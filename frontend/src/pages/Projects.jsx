import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const projects = [
  {
  title: "CREATIVE 86 BLOGGING WEBSITE",
  description:
    "A full-stack MERN blogging platform with a modern UI, responsive design, and seamless blog management.",
  tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  link: "https://blog-frontend-sa3d.onrender.com/",
  },
  {
  title: "MINI AI CHATBOT",
  description:
    "A mini MERN project featuring an AI-powered chatbot with markdown support and dynamic content rendering.",
  tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  link: "https://minichatbot-frontend.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-16 bg-gray-950 text-white"
    >
      <br />
      <br />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Code2 className="inline-block mb-2 mr-2 text-cyan-400" />
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-cyan-400/10 to-gray-800/40 p-6 rounded-2xl border border-cyan-500 shadow-xl hover:shadow-cyan-400/30 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 10px #0ff" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-cyan-500/20 border border-cyan-400 text-cyan-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline text-sm"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
