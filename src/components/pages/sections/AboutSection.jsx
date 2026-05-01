import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="about"
      data-header-theme="light"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            About TechHive
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
            Driving Innovation Through AI-Powered Excellence
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Welcome to TechHive, where innovation meets expertise. Based in the dynamic tech hub of Charlotte, North Carolina, we are pioneering the future of IT services and consulting with our transformative AI-driven solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
