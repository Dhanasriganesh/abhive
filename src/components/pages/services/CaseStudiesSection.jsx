import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    industry: 'Retail & Consumer',
    headline: 'AI-driven forecasting trims inventory costs by 19%',
    summary: 'Partnered with a global retailer to build a unified data fabric, predictive demand models, and store associate copilots.',
    impact: ['8 week pilot to nationwide rollout', '35k associates enabled', '$50M working capital unlocked'],
  },
  {
    industry: 'Healthcare',
    headline: 'Virtual care platform expands access across 42 hospitals',
    summary: 'Designed patient journeys, integrated EHR APIs, and implemented remote monitoring with clinician insights.',
    impact: ['NPS up 23 points', '82% clinician adoption', 'Launch in 6 months'],
  },
  {
    industry: 'Energy & Utilities',
    headline: 'Automation control tower saves 1.2M field hours',
    summary: 'Built a secure automation platform with digital twins, workflow orchestration, and workforce enablement programs.',
    impact: ['90 day roadmap to production', '5 times more releases', 'Enterprise academy for 600 employees'],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-600" />
            Outcome Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
            Realized value for our <span className="italic">partners</span>. <br />
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Scale</span>.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Every story is co-authored. We share playbooks, embed teams, and leave behind systems clients can grow without us.
          </p>
        </div>

        <div className="space-y-5">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 md:p-7 rounded-[32px] bg-slate-50 border border-slate-200 hover:shadow-md transition-all duration-500 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-3">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 py-1 px-3 rounded-full bg-blue-50 border border-blue-100">
                    {item.industry}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.headline}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed lg:col-span-4">
                  {item.summary}
                </p>

                <div className="lg:col-span-5 grid sm:grid-cols-3 gap-2">
                  {item.impact.map((point) => (
                    <div key={point} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">{point}</span>
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

export default CaseStudiesSection;
