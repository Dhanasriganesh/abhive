import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Have you project in mind?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's make something great together!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact with us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

