import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const clients = Array.from({ length: 12 }, (_, i) => `Client ${i + 1}`);

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
            Our Clients
          </h2>
          <p className="text-lg text-gray-600">
            We are happy to work with global largest brands
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-gray-400 font-semibold">{client}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

