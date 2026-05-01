import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from './Counter';

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const stats = [
    { percentage: 60, title: 'Minimal Timelines', description: 'Get Your Projects Done Quickly and Efficiently with TechHive.' },
    { percentage: 95, title: 'Effective Communication', description: 'Unlock Your Company\'s Potential With Effective Communication Strategies.' },
    { percentage: 70, title: 'High Quality Standards', description: 'Get Professional AI Solutions to Create the Perfect Start-Up.' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            One of the pioneers of AI solutions is TechHive. We offer our clients the advantage of having hardworking, committed, and talented manpower on demand, wherever and whenever they are needed, at a cost that fits their development budget.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {inView ? <Counter end={stat.percentage} /> : 0}%
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

