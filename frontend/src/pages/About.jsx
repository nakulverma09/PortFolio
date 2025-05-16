import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900 text-white px-6 md:px-20 flex items-center"
    >
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold text-cyan-400 tracking-wide neon-text">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            I’m <span className="text-cyan-400 font-semibold">Nakul Verma</span> — a passionate full-stack developer wired to build
            futuristic web solutions. With a love for code and creativity, I
            engineer seamless user experiences and robust backend logic.
            Constantly learning, adapting, and evolving — ready to power up any
            challenge with innovation and precision.
          </p>
          <p className="text-gray-400 italic">
            “Coding is my circuitry, innovation my energy source.”
          </p>
        </div>

        {/* Right: Robotic-themed Illustration or Placeholder */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          {/* You can replace this with a robotic SVG or Lottie animation */}
          <img
            src="/dev2.svg"
            alt="dev2"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
