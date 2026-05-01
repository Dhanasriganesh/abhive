import React from 'react';
import { motion } from 'framer-motion';
const commitments = [
  'Diversity, equity, and inclusion targets tied to leadership OKRs',
  'Pro-bono innovation programs for nonprofits driving social impact',
  'Carbon-aware architecture guidelines baked into every technical review',
  'Talent exchanges and residencies that upskill client teams in real time',
];

const CultureImpactSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              Culture & Ethics
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
              Built for <span className="italic">People</span>. <br />
              Grounded in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Integrity</span>.
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-10 leading-relaxed max-w-xl">
              Our teams co-create with clients, pairing their domain expertise with our modern delivery playbooks. We invest 5% of annual revenue into internal R&D and community impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <p className="text-2xl font-bold text-slate-900 mb-1">82%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Employee Engagement</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <p className="text-2xl font-bold text-slate-900 mb-1">1200+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Pro-Bono Hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 rounded-3xl bg-slate-950 text-white border border-white/10 lg:col-span-5"
          >
            <h3 className="text-xl font-bold text-white mb-6">Our Commitments</h3>
            <ul className="space-y-4 mb-10">
              {commitments.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-blue-300 group-hover:bg-blue-500 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 group-hover:bg-white" />
                  </div>
                  <span className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />
              <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed mb-4">
                "Our partnership with TechHive accelerated our sustainability roadmap while equipping our teams with the skills to own the change."
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                VP — Global Energy Leader
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultureImpactSection;
