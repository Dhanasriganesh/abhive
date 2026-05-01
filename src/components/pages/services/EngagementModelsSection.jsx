import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Advisory Sprints',
    description: 'Two to four week intensives to align leadership, quantify value, and provide a prioritized roadmap.',
    outcomes: ['North-star architecture', 'Investable business case', 'Operating model blueprint'],
  },
  {
    title: 'Integrated Pods',
    description: 'Cross-functional squads embedded with your teams to deliver products, AI copilots, or platform upgrades.',
    outcomes: ['Joint OKRs', 'Design + build + change expertise', 'Weekly value demos'],
  },
  {
    title: 'Managed Programs',
    description: 'Longer-term run + optimize partnerships with transparent KPIs and governance cadences.',
    outcomes: ['SLO management', 'Continuous experimentation', 'Capability uplift'],
  },
];

const EngagementModelsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              Engagement Models
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
              Partnership levels <span className="italic">designed</span> to fit your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">pace</span>.
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">
              We flex between strategic advisory, outcome-based pods, and managed services. Every model anchors to measurable outcomes with joint governance.
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-slate-950 text-white border border-white/10 lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Our Commitments</p>
            <ul className="space-y-4">
              {[
                'Transparent backlog and decision logs',
                'Integrated change and enablement plans',
                'Shared metrics and weekly value reviews'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-1.5" />
                  <span className="text-xs font-medium text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-[32px] bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-4 items-center">
                <h3 className="text-lg font-bold text-slate-900 lg:col-span-3">{model.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed lg:col-span-4">{model.description}</p>
                <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
                  {model.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 py-2 px-3 rounded-full bg-white border border-slate-200 text-[10px] font-medium text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-blue-600" />
                      {outcome}
                    </div>
                  ))}
                </div>
                  </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
