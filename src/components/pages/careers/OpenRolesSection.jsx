import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Senior Product Designer',
    location: 'Remote (North America)',
    type: 'Full-time',
    description: 'Lead discovery, design systems, and experimentation for enterprise AI products.',
  },
  {
    title: 'Staff Software Engineer (Platforms)',
    location: 'Toronto / Hybrid',
    type: 'Full-time',
    description: 'Architect cloud-native platforms, APIs, and automation pipelines across industries.',
  },
  {
    title: 'AI Transformation Lead',
    location: 'Charlotte / Hybrid',
    type: 'Full-time',
    description: 'Partner with executives to shape AI strategies, governance, and adoption roadmaps.',
  },
  {
    title: 'Delivery Manager',
    location: 'Lisbon / Remote-friendly',
    type: 'Full-time',
    description: 'Guide integrated pods, ensuring velocity, stakeholder alignment, and measurable outcomes.',
  },
];

const OpenRolesSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Open roles</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Join one of our multidisciplinary pods</h2>
        </div>
      
      </div>
      <div className="mt-10 space-y-4">
        {roles.map((role, index) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col gap-4 rounded-3xl border border-white bg-white p-6 shadow-xl md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{role.type}</p>
              <h3 className="text-2xl font-semibold text-gray-900">{role.title}</h3>
              <p className="text-sm text-gray-500">{role.location}</p>
              <p className="mt-2 text-sm text-gray-700">{role.description}</p>
            </div>
         
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OpenRolesSection;
