import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';

const studies = [
  {
    industry: 'Retail & Consumer',
    headline: 'Unified loyalty platform boosts CLV 33%',
    detail: 'Designed a headless experience, AI promotions engine, and in-store copilots for 2,800 stores.',
    metrics: ['8 domains modernized', '5x release cadence', '45M members migrated'],
  },
  {
    industry: 'Healthcare',
    headline: 'Virtual care fabric covers 42 hospitals',
    detail: 'Co-created patient journeys, remote monitoring dashboards, and compliance-ready AI assistants.',
    metrics: ['NPS +23', 'Clinician adoption 82%', 'Go-live in 6 months'],
  },
  {
    industry: 'Energy & Utilities',
    headline: 'Automation control tower saves 1.2M hours',
    detail: 'Built digital twins, orchestration workflows, and capability academies for field engineers.',
    metrics: ['Predictive coverage worldwide', '90-day pilot to scale', '600 employees upskilled'],
  },
];

const CaseStudiesShowcaseSection = () => (
  <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Proof of excellence</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Co-authored results with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">ambitious teams</span></h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {studies.map((study, index) => (
          <motion.div
            key={study.headline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-slate-300" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600 mb-4">{study.industry}</p>
            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{study.headline}</h3>
            <p className="text-sm text-slate-600 flex-1 leading-relaxed">{study.detail}</p>
            <ul className="mt-6 space-y-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              {study.metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-blue-600"></span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesShowcaseSection;
