import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowWeWorkSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const steps = [
    {
      title: 'Define the scope',
      description: 'Our team of AI experts will sit down with you and discuss what your specific needs are.',
      icon: '📋',
    },
    {
      title: 'Develop a plan',
      description: 'We will develop a customized solution that is tailored to your business and AI needs.',
      icon: '📊',
    },
    {
      title: 'Execute the plan',
      description: 'We will work with you to implement the solution and get it up and running in no time.',
      icon: '🚀',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            How we work
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

