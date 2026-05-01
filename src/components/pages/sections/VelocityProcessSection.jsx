import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Zap, BarChart, ArrowRight } from 'lucide-react';
import phasesImage from '../../../assets/home-section/phases.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const steps = [
  {
    phase: 'Discover',
    detail: 'Immersion, value modeling, and rapid concept validation to align executives and product teams.',
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    phase: 'Design',
    detail: 'Blueprint customer journeys, platform architectures, and AI guardrails with measurable hypotheses.',
    icon: PenTool,
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    phase: 'Build',
    detail: 'Multidisciplinary pods ship increments with automated QA, telemetry, and enablement baked in.',
    icon: Zap,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    phase: 'Scale',
    detail: 'Launch kits, capability academies, and managed evolution ensure adoption and continuous improvement.',
    icon: BarChart,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
];

const VelocityProcessSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-100">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Delivery Rhythm
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Velocity without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">sacrificing rigor</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-14 rounded-3xl overflow-hidden border border-slate-200"
        >
          <SkeletonImage src={phasesImage} alt="Delivery phases" className="w-full h-56 md:h-72 object-cover" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <p className={`text-xs font-black tracking-widest uppercase ${step.color}`}>Phase 0{index + 1}</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.phase}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 text-slate-500 font-bold text-sm tracking-widest uppercase hover:text-blue-600 transition-colors cursor-pointer group">
            <span>Our Approach in detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VelocityProcessSection;

