import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LocationsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const locations = [
    {
      city: 'Hyderabad',
      type: 'Registered Office',
      address: '1st Floor, TRENDZ SOLITAIRE, Vittal Rao Nagar, Madhapur, Hitec City, Hyderabad, Telangana 500081.',
      email: 'contact@techhive.com',
      phone: '+91-7330758787',
    },
    {
      city: 'Noida',
      type: 'Registered Office',
      address: 'C-56/30, C Block, Industrial Area, Divit Developers, 5th Floor, Noida, Uttar Pradesh 201307',
      email: 'contact@techhive.com',
      phone: '+91-120 442 3603',
    },
    {
      city: 'USA',
      type: 'Registered Office',
      address: '8832 Blakeney Professional Dr Suite 205, Charlotte, NC 28277, United States.',
      email: 'contact@techhive.com',
      phone: '+91 7793992217',
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Locations
          </h2>
          <p className="text-lg text-gray-600">Our Offices</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{location.city}</h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">{location.type}</p>
              <p className="text-gray-700 mb-4">{location.address}</p>
              <p className="text-gray-600 mb-1">{location.email}</p>
              <p className="text-gray-600">{location.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

