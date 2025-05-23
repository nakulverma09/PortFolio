const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 50,
    validate: {
      validator: (v) => /^[a-zA-Z\s.'-]+$/.test(v),
      message: 'Name contains invalid characters',
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid email format'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: 1000,
    validate: {
      validator: (v) => !/[${}<>]/.test(v), // basic injection prevention
      message: 'Message contains potentially unsafe characters',
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
