import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="text-cyan-400 w-6 h-6" />,
    label: 'Email',
    value: 'nakul11verma@gmail.com',
  },
  {
    icon: <Phone className="text-cyan-400 w-6 h-6" />,
    label: 'Phone',
    value: '+91 6396600366',
  },
  {
    icon: <MapPin className="text-cyan-400 w-6 h-6" />,
    label: 'Location',
    value: 'Haridwar, Uttarakhand, India',
  },
//   {
//     icon: <Linkedin className="text-cyan-400 w-6 h-6" />,
//     label: 'LinkedIn',
//     value: 'linkedin.com/in/nakulverma',
//     link: 'https://linkedin.com/in/nakulverma',
//   },
  {
    icon: <Github className="text-cyan-400 w-6 h-6" />,
    label: 'GitHub',
    value: 'github.com/nakulverma09',
    link: 'https://github.com/nakulverma09',
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-950 min-h-screen py-16 px-6 md:px-20 text-white"
    >
        <br /><br />
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12 neon-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        {contactDetails.map(({ icon, label, value, link }, idx) => (
          <motion.div
            key={idx}
            className="flex items-center space-x-4 bg-cyan-900/20 rounded-lg p-4 border border-cyan-400 shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px #0ff' }}
            transition={{ duration: 0.3 }}
          >
            <div>{icon}</div>
            <div>
              <h3 className="text-cyan-400 font-semibold">{label}</h3>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-300 transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p>{value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;