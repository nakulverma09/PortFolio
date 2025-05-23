const express = require('express');
const User = require('../models/User');
const router = express.Router();
const nodemailer = require('nodemailer');

// Basic sanitization function
const sanitize = (str) => str.replace(/[<>{}]/g, '');

// POST: Create user message
router.post('/', async (req, res) => {
    // Sanitize input (assuming sanitize is a function to clean input)
    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const message = sanitize(req.body.message);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail
      pass: process.env.GMAIL_PASS, // your App Password
    },
  });
  const mailOptions = {
  from: email,          // your Gmail address
  to: 'workwithnakul09@gmail.com',             // where you want to receive
  subject: 'New message from your portfolio', // subject line
  replyTo: email,                  // visitor’s email here
  text: `You got a message from ${email}:\n\n${message}`,
};

  try {
    await transporter.sendMail(mailOptions);
    // Create new user document
    const user = new User({ name, email, message });
    await user.save();

    res.status(201).json({ message: 'Message received!' });
  } catch (err) {
    console.error(err);

    // Duplicate key error (usually email unique constraint)
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already exists. Please use another email.' });
    }

    // Validation errors from Mongoose schema
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: errors.join(', ') });
    }

    // Generic error fallback
    res.status(500).json({
      error: err.message || 'Something went wrong',
    });
  }
});


module.exports = router;
