import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Strategy & Advisory',
    description: 'Operating model design, value stream mapping, capability roadmaps, and responsible AI governance.',
    tags: ['AI strategy', 'Enterprise architecture', 'Value acceleration'],
  },
  {
    title: 'Digital Product & Experience',
    description: 'End-to-end product incubation combining research, UX, design systems, and experimentation frameworks.',
    tags: ['Service design', 'Product leadership', 'Growth experiments'],
  },
  {
    title: 'Data, AI & Automation',
    description: 'Modern data platforms, MLOps, GenAI copilots, and automation programs built with guardrails.',
    tags: ['Data fabric', 'Responsible AI', 'Intelligent automation'],
  },
  {
    title: 'Cloud & Platforms',
    description: 'Cloud native engineering, DevSecOps, platform reliability, and ecosystem integrations.',
    tags: ['Cloud transformation', 'Platform ops', 'APIs'],
  },
  {
    title: 'Talent & Enablement',
    description: 'Capability academies, change orchestration, and embedded pods that upskill teams while delivering value.',
    tags: ['Agile coaching', 'Academies', 'Embedded squads'],
  },
  {
    title: 'Managed Evolution',
    description: 'Run and optimize digital programs with continuous improvement, FinOps, and reliability SLAs.',
    tags: ['SRE', 'FinOps', 'Lifecycle support'],
  },
];

const CapabilityMatrixSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300 mb-6">Execution Pillars</p>
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
            A unified service catalog for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal italic">high-velocity</span> teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500"
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold text-white/50 group-hover:text-blue-200 transition-colors">0{index + 1}</span>
                <h3 className="text-lg font-bold text-white mt-2">{capability.title}</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                {capability.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrixSection;
