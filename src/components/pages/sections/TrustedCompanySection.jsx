import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustedCompanySection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            TechHive
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
            Trusted AI Development Company
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            TechHive believes in constant innovation and improvement to remain number one. We believe our core values of integrity, client satisfaction, innovation and intellect differentiate us from our competitors. When you choose to do business with TechHive you are partnering with a company who cares. <strong>100% Satisfaction Guarantee</strong> – We want you to be completely satisfied with our services.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Explore Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanySection;

