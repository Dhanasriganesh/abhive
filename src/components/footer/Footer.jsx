import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../assets/Techhive-logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Staffing', path: '/services/staffing' },
    { name: 'Training', path: '/services/training' },
    { name: 'IT Solutions', path: '/services/it-solutions' },
  ];

  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">

        {/* 🔥 Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 🧠 Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* BIGGER LOGO */}
            <img
              src={logoImage}
              alt="TechHive Logo"
              className="h-16 sm:h-20 lg:h-44  w-auto object-contain brightness-0 invert"
            />

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              TechHive is a digital transformation partner helping businesses scale with modern AI-driven solutions.
            </p>

            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-medium">
              ✔ E-Verified Company
            </div>
          </motion.div>

          {/* 📂 Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ⚙️ Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 📞 Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Charleston, SC</p>
              <p>📞 +1 (984) 687-6475</p>
              <p>✉ info@techhiveit.com</p>
            </div>
          </motion.div>

        </div>

        {/* 🔻 Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} TechHive. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;