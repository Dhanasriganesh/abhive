import React from 'react';
import { motion } from 'framer-motion';

const cultureHighlights = [
  {
    title: 'Community guilds',
    description: 'Weekly guild sessions across design, data, engineering, and delivery to share experiments and level up together.',
  },
  {
    title: 'Impact weeks',
    description: 'Company-wide events where teams focus on social impact, sustainability, and pro-bono innovation challenges.',
  },
  {
    title: 'Transparent rituals',
    description: 'Quarterly business reviews, open-source decision logs, and AMA sessions with leadership.',
  },
];

const CultureSection = () => (
  <section className="relative overflow-hidden bg-white py-20 lg:py-28">

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-red-600" />
          The Rituals
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
          People-first <span className="italic">rituals</span> that <br />
          spark <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Innovation</span>.
        </h2>
      </div>

      <div className="space-y-4">
        {cultureHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-6 rounded-[32px] bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10 grid lg:grid-cols-12 gap-4 items-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors lg:col-span-2">
                Cultural Pilot
              </p>
              <h3 className="text-xl font-bold text-slate-900 leading-snug lg:col-span-3">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light lg:col-span-6">
                {item.description}
              </p>
              <div className="flex items-center gap-3 lg:justify-end lg:col-span-1">
                <div className="h-[2px] w-8 bg-slate-100 group-hover:bg-blue-600 group-hover:w-12 transition-all" />
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">Read more</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CultureSection;
