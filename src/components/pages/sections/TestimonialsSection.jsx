import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const testimonials = [
    {
      text: 'In my history of working with TechHive, I can honestly say that there is not one company that I\'ve ever worked with that has better service.',
      author: 'James Smith',
      role: 'Creative Director',
    },
    {
      text: 'I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with TechHive because I just do not want to be sold. I want to trust that what I am getting is going to be good.',
      author: 'Michael Thompson',
      role: 'Sales Manager',
    },
    {
      text: 'We worked with TechHive in developing our AI-powered platform. The development & implementation process was very smooth & delivered the exact results we were expecting. We\'ll surely work with them in the future.',
      author: 'Tim Bogemans',
      role: 'Managing Partner',
    },
    {
      text: 'TechHive offers a high caliber of resources skilled in AI, Machine Learning, mobile & Quality Assurance. Over the past three years, We was very pleased with the service provided by TechHive development teams & executive management.',
      author: 'Ross Shamelashvili',
      role: 'Manager, Development Operations',
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
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">Clients feedback</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

