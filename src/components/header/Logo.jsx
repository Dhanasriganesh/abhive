import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../assets/Techhive-logo.png';

const Logo = ({ isTextWhite = false }) => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-5 group"
    >
      <motion.img
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        src={logoImage}
        alt="TechHive Logo"
        className="h-10 md:h-12 w-auto object-contain"
      />

      {/* Logo Text */}
      <div className="flex flex-col leading-tight">
        <motion.div
          className={`text-2xl md:text-3xl font-bold tracking-tight ${isTextWhite
              ? 'text-white drop-shadow-lg'
              : 'bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-gradient'
            }`}
          whileHover={{ scale: 1.02 }}
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          TechHive
        </motion.div>
        <div className={`text-xs md:text-sm font-medium tracking-wide uppercase mt-1 ${isTextWhite ? 'text-gray-200' : 'text-gray-600'
          }`}>
          Solutions
        </div>
      </div>
    </Link>
  );
};

export default Logo;
