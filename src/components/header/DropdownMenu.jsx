import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ submenu, isOpen, onMouseEnter, onMouseLeave }) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.96 }}
          transition={{ 
            duration: 0.25, 
            ease: [0.4, 0, 0.2, 1],
            staggerChildren: 0.03
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-gray-900/10 py-3 border border-gray-100/50 overflow-hidden"
        >
          {/* Animated Top Border */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-red-600 to-blue-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative max-h-96 overflow-y-auto custom-scrollbar px-2 py-2">
            {submenu.map((item, index) => {
              const isActive = location.pathname === item.path;
              const isHovered = hoveredItem === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className="relative flex items-center px-4 py-3 mx-1 rounded-xl transition-all duration-300 group"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="dropdownActive"
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 rounded-xl border border-blue-100"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}

                    {/* Hover Background */}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gray-50 rounded-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          scale: isHovered ? 1 : 0.95
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    {/* Active Left Border */}
                    {isActive && (
                      <motion.div
                        layoutId="dropdownBorder"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-600 to-red-600 rounded-r-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}

                    {/* Hover Left Border */}
                    {!isActive && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-blue-600 rounded-r-full"
                        animate={{ 
                          height: isHovered ? '1.5rem' : '0',
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    {/* Text Content */}
                    <span className={`relative z-10 flex-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive 
                        ? 'text-blue-700 font-semibold' 
                        : isHovered 
                        ? 'text-blue-600' 
                        : 'text-gray-700'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Active Check Icon */}
                    {isActive && (
                      <motion.svg
                        className="w-4 h-4 text-blue-600 ml-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    )}
                    
                    {/* Hover Arrow */}
                    {!isActive && (
                      <motion.svg
                        className="w-4 h-4 text-blue-600 ml-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    )}

                    {/* Ripple Effect on Click */}
                    <motion.div
                      className="absolute inset-0 bg-blue-200 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 1.2, opacity: [0.3, 0] }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
