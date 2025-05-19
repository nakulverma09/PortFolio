import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import LetsTalkButton from './LetsTalkButton'; // Adjust the path as needed

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  const handleNavClick = (item) => {
    setActive(item);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-950 shadow-lg fixed w-full z-50 border-b border-cyan-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-cyan-400 tracking-widest select-none">
            <span className="neon-text lowercase">nakul</span>
            <span className="text-white lowercase">verse</span>
            <span className="neon-text lowercase">.dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  active === item
                    ? 'text-cyan-400 underline underline-offset-4'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {item}
              </Link>
            ))}

            {/* LetsTalkButton inline with menu items */}
            <div className="ml-4">
              <LetsTalkButton handleNavClick={handleNavClick}/>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-cyan-400 hover:text-white transition duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-900 border-t border-cyan-500 px-4 pb-4 rounded-b-xl overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                  active === item
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {item}
              </Link>
            ))}

            <Link
                key={"chat"}
                to={`/${"chat".toLowerCase()}`}
                onClick={() => handleNavClick("chat")}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                  active === "talk"
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                Lets's Talk
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
