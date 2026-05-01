import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItems } from './menuItems';
import DropdownMenu from './DropdownMenu';

const DesktopNavigation = ({ isTextWhite = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path || 
          (item.submenu && item.submenu.some(subItem => location.pathname === subItem.path));
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => {
              setHoveredIndex(index);
              if (hasSubmenu) setActiveDropdown(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              if (hasSubmenu) setActiveDropdown(null);
            }}
          >
            {/* Main Menu Item */}
            <Link
              to={item.path || '#'}
              className="group relative inline-flex items-center px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium no-underline"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {/* Active Background Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border border-blue-100"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Hover Background */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.95
                  }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Active Underline */}
              {isActive && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Hover Underline */}
              {!isActive && (
                <motion.div
                  className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: isHovered ? 1 : 0,
                    left: isHovered ? '10%' : '50%',
                    right: isHovered ? '10%' : '50%'
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}

              {/* Text Content */}
              <span className="relative z-10 flex items-center gap-1.5">
                <motion.span
                  className={`whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-700 font-semibold'
                      : isHovered
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                  animate={{
                    color: isActive 
                      ? 'rgb(29, 78, 216)' 
                      : isHovered 
                      ? 'rgb(37, 99, 235)' 
                      : 'rgb(55, 65, 81)'
                  }}
                >
                  {item.name}
                </motion.span>
                
                {/* Dropdown Arrow */}
                {hasSubmenu && (
                  <motion.svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ 
                      rotate: activeDropdown === index ? 180 : 0,
                      color: isActive || isHovered ? 'rgb(37, 99, 235)' : 'rgb(107, 114, 128)'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                )}
              </span>

              {/* Active Glow Effect */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-blue-100/30 rounded-lg blur-sm -z-10"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </Link>

            {/* Dropdown Menu */}
            {hasSubmenu && (
              <DropdownMenu
                submenu={item.submenu}
                isOpen={activeDropdown === index}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setActiveDropdown(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setActiveDropdown(null);
                }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;
