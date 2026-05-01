import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndustryExperienceSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const industries = [
    { name: 'Banking & Finance', icon: '🏦' },
    { name: 'Travel & Hospitality', icon: '✈️' },
    { name: 'Education', icon: '🎓' },
    { name: 'Energy & Utility', icon: '⚡' },
    { name: 'Government', icon: '🏛️' },
    { name: 'Logistics & Warehousing', icon: '📦' },
    { name: 'Insurance', icon: '🛡️' },
    { name: 'Healthcare & Life Science', icon: '🏥' },
    { name: 'Retail & Consumer Goods', icon: '🛒' },
    { name: 'Telecom & Media', icon: '📡' },
    { name: 'Oil & Gas', icon: '🛢️' },
    { name: 'E-Commerce', icon: '🛍️' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Industry Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            You want a strategic partner to understand your market, but you also need them to understand your industry — Since your company is special, we start with a discovery phase to define your distinct brand attributes and benefits.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExperienceSection;

