import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart } from 'lucide-react';
import axios from 'axios';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');

  try {
    const { data } = await axios.post('http://localhost:5000/api/users', formData);
    setStatus('Message sent ✅');
    setFormData({ name: '', email: '', message: '' });
  } catch (err) {
    console.error('Submission error:', err);

    // Safe extraction and conversion of error
    let errorMsg = 'Error sending message ❌';

    const errData = err?.response?.data;

    if (errData) {
      if (typeof errData === 'string') {
        errorMsg = errData;
      } else if (typeof errData.error === 'string') {
        errorMsg = errData.error;
      } else if (Array.isArray(errData.error)) {
        errorMsg = errData.error.join(', ');
      } else if (typeof errData.error === 'object') {
        errorMsg = JSON.stringify(errData.error); // last resort
      }
    } else if (err.message) {
      errorMsg = err.message;
    }

    setStatus(errorMsg);
  }
};

  return (
    <section id="Form" className="bg-gray-950 text-white py-16 px-6 md:px-20">
      <br />
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MessageCircleHeart className="inline-block mb-2 mr-2 text-cyan-400" />
          Connect with RoboDev
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 bg-gradient-to-br from-cyan-400/10 to-gray-800/20 p-8 rounded-xl border border-cyan-400 shadow-lg"
        >
          <motion.input
            variants={itemVariants}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <motion.input
            variants={itemVariants}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <motion.textarea
            variants={itemVariants}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />
          <motion.button
            variants={itemVariants}
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-cyan-500/40"
          >
            Send Message
          </motion.button>

          {status && 
            <p className="text-sm text-center mt-2 text-cyan-300">{status}</p>
          }
        </motion.form>
      </div>
    </section>
  );
};

export default Form;
