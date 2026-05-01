import React from 'react';
import { motion } from 'framer-motion';

const MobileMenuButton = ({ isOpen, onClick, isTextWhite = false }) => {
  return (
    <button
      onClick={onClick}
      className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isTextWhite
          ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.div
        className="absolute"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.span
          className={`block w-6 h-0.5 rounded-full ${
            isTextWhite ? 'bg-white' : 'bg-gray-700'
          }`}
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`block w-6 h-0.5 rounded-full mt-1.5 ${
            isTextWhite ? 'bg-white' : 'bg-gray-700'
          }`}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`block w-6 h-0.5 rounded-full mt-1.5 ${
            isTextWhite ? 'bg-white' : 'bg-gray-700'
          }`}
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </button>
  );
};

export default MobileMenuButton;
