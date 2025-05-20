import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // or use <a> if external link

const LetsTalkButton = ({ handleNavClick }) => {
  return (
    <motion.div
      whileHover={{ boxShadow: '0 0 1px #0ff' }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        to="/form" // change to your contact route or external URL
        onClick={() => {handleNavClick('form')}}
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-cyan-500/50 transition duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        Let&apos;s Talk
      </Link>
    </motion.div>
  );
};

export default LetsTalkButton;
