import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    title: 'Discover & Frame',
    description: 'Rapid research, immersion, and value modeling to align on the right problems to solve.',
    artifacts: ['Executive playback', 'Opportunity map', 'Outcome hypotheses'],
  },
  {
    title: 'Design & Validate',
    description: 'Service blueprints, technical spikes, and pilot experiences to prove feasibility and adoption.',
    artifacts: ['Experience maps', 'Pilot dashboards', 'Tech reference patterns'],
  },
  {
    title: 'Build & Launch',
    description: 'Integrated design + engineering pods deliver increments with QA, change, and adoption plans.',
    artifacts: ['Increment playbacks', 'Runbooks', 'Launch kits'],
  },
  {
    title: 'Scale & Optimize',
    description: 'Measure impact, automate operations, and embed client teams through academies and residencies.',
    artifacts: ['Impact scorecards', 'Automation backlog', 'Capability uplift roadmap'],
  },
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Execution Rhythm
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
            A proven delivery <span className="italic">framework</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">measurable</span> checkpoints.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Our process adapts to your governance model while preserving the rituals that keep velocity high and risk low.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-[32px] bg-white border border-slate-200 hover:border-blue-200 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6">
                <span className="text-3xl font-light text-slate-100 group-hover:text-blue-100 transition-colors">0{index + 1}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{phase.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-8 min-h-14">
                  {phase.description}
                </p>

                <div className="pt-6 border-t border-slate-50">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Milestones</p>
                  <ul className="space-y-3">
                    {phase.artifacts.map((artifact) => (
                      <li key={artifact} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                        <span className="text-[10px] font-medium text-slate-600">{artifact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-[1px] bg-slate-100" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
