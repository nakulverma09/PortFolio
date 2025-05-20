import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const technicalSkills = [
  'HTML5 & CSS',
  'JavaScript',
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'Git',
  'GitHub',
  'REST',
  'APIs',
  'JWT Authentication',
  'Bcrypt',
];

const softSkills = [
  'Communication',
  'Problem-solving',
  'Teamwork',
  'Agile Development',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 h-screen text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-8 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <br />
          <BrainCircuit className="inline-block mb-2 mr-2 text-cyan-400" />
          Skills
        </motion.h2>

        {/* Technical Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 10px #0ff',
                }}
                className="bg-gradient-to-br from-cyan-400/10 to-gray-800/30 border border-cyan-400 text-cyan-200 p-4 rounded-xl text-center font-semibold shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 10px #0ff',
                }}
                className="bg-gradient-to-br from-cyan-400/10 to-gray-800/30 border border-cyan-400 text-cyan-200 p-4 rounded-xl text-center font-semibold shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
