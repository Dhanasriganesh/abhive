import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../assets/Techhive-logo.png';
import SkeletonImage from '../shared/SkeletonImage';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Staffing', path: '/services/staffing' },
    { name: 'Training', path: '/services/training' },
    { name: 'IT Solutions', path: '/services/it-solutions' },
  ];



  const locations = [
    {
      title: '📍 TechHive Headquarters',
      address: '215 East Bay Street, Suite 201K, Charleston, SC 29401',
      phone: '+1 (984) 687-6475',
      email: 'info@techhiveit.com',
      mapUrl: 'https://www.google.com/maps?q=215+East+Bay+Street,+Suite+201K,+Charleston,+SC+29401',
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 overflow-hidden border-t border-slate-700/50">
      {/* Modern Dark Background with Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/98 to-slate-900/95"></div>
        
        {/* Animated Mesh Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%',
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Animated Orb Effects */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-red-500/8 blur-3xl"
        />

        {/* Subtle Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Top Border Glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          {/* Logo and Description - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-3 lg:col-span-3"
          >
            <div className="mb-2 sm:mb-4">
              <SkeletonImage
                src={logoImage}
                alt="TechHive Logo"
                className="h-20 sm:h-12 md:h-16 lg:h-44 w-auto lg:w-44 object-contain brightness-0 invert"
              />
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                TechHive is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
              </p>
            </div>


          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-1 md:col-span-1 lg:col-span-3"
          >
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">Explore</h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-1 md:col-span-1 lg:col-span-2"
          >
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

     
        </div>

        

        {/* Bottom Bar - Copyright Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-slate-700/50 pt-4 sm:pt-5 md:pt-6"
        >
          <div className="flex justify-center items-center">
            <p className="text-xs sm:text-sm text-gray-400 text-center px-2">© 2020 TechHive. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
