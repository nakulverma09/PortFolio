import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-950 text-white flex items-center justify-center px-9 md:px-20"
    >
      <div className="flex flex-col items-center gap-8 pt-20 w-full max-w-screen-xl">
        {/* Image Section Always on Top */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 5px #0ff, 0 0 15px #0ff",
              rotate: [0, 1, -1, 0],
            }}
            whileTap={{ scale: 0.95 }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 shadow-xl flex items-center justify-center bg-gradient-to-br from-cyan-400/30 to-gray-800/60"
          >
            <img
              src="/nakul.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border border-cyan-500"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400 neon-text typing-animation">
            <span>Hello, I'm NAKUL VERMA</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            A passionate{" "}
            <span className="text-cyan-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            crafting futuristic web experiences with code and creativity.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-cyan-500 text-gray-950 font-semibold hover:bg-cyan-400 shadow-md hover:shadow-cyan-500/50 transition duration-300"
          >
            View Projects <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
