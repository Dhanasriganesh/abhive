import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from './menuItems';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleItem = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-16 right-0 bottom-0 w-full bg-white shadow-2xl z-[70] lg:hidden overflow-y-auto"
            style={{ 
              minHeight: 'calc(100vh - 4rem)',
              WebkitOverflowScrolling: 'touch',
              transform: 'translateX(0)'
            }}
          >
            <div className="p-6 space-y-1 min-h-full">
              {menuItems && menuItems.length > 0 ? (
                menuItems.map((item, index) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isExpanded = expandedItems.includes(index);
                const isActive = location.pathname === item.path ||
                  (hasSubmenu && item.submenu.some(subItem => location.pathname === subItem.path));

                return (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-2">
                    {/* Main Menu Item */}
                    <Link
                      to={item.path || '#'}
                      onClick={(e) => {
                        if (hasSubmenu) {
                          e.preventDefault();
                          toggleItem(index);
                        } else {
                          onClose();
                        }
                      }}
                      className={`flex items-center justify-between px-4 py-4 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-red-50 text-blue-600 font-semibold'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      <span className="font-semibold text-base">{item.name}</span>
                      {hasSubmenu && (
                        <motion.svg
                          className="w-5 h-5 text-gray-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                    </Link>

                    {/* Submenu Items */}
                    <AnimatePresence>
                      {hasSubmenu && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 pr-2 py-2 space-y-1">
                            {item.submenu.map((subItem, subIndex) => {
                              const isSubActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  onClick={onClose}
                                  className={`block px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                                    isSubActive
                                      ? 'bg-blue-50 text-blue-600 font-semibold'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })) : (
                <div className="text-center py-8 text-gray-500">No menu items available</div>
              )}
            </div>

            {/* CTA Button */}
            <div className="p-5 border-t border-gray-200 mt-4 sticky bottom-0 bg-white">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full bg-gradient-to-r from-blue-600 via-blue-700 to-red-700 text-white text-center py-4 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
