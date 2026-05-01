import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Growth & Learning',
    description: 'Annual learning budget, guilds, mentorship programs, and quarterly hack weeks focused on experimentation.',
  },
  {
    title: 'Flexibility & Wellbeing',
    description: 'Remote-first with regional studios, flexible paid time off, wellness stipends, and inclusive benefits packages.',
  },
  {
    title: 'Impact & Ownership',
    description: 'Pod-based autonomy, exposure to global clients, and transparent career frameworks with shared success metrics.',
  },
];

const BenefitsSection = () => (
  <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-300" />
          The Reward
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
          Supporting your <span className="italic">whole</span> journey.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="text-blue-300 font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {benefit.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Wellness First</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
