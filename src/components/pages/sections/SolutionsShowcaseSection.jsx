import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Network, Activity, ArrowUpRight } from 'lucide-react';
import solutionsImage from '../../../assets/home-section/solutions.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const solutions = [
  {
    title: 'Customer Blueprinting',
    description: 'Full-funnel research, journey orchestration, and service blueprinting to unlock new value pools.',
    tags: ['Research', 'Service Design', 'Experimentation'],
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'AI Copilot Studio',
    description: 'Rapid ideation, guardrail design, and deployment of trustworthy AI copilots for every team.',
    tags: ['GenAI', 'Safety', 'Enablement'],
    icon: Rocket,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    title: 'Modern Platform Fabric',
    description: 'Composable architectures, API ecosystems, and automation that connect legacy and cloud.',
    tags: ['Platforms', 'Integration', 'Automation'],
    icon: Network,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    title: 'Intelligent Operations',
    description: 'Telemetry-driven ops, FinOps, and continuous improvement programs keeping releases fast and safe.',
    tags: ['SRE', 'FinOps', 'Observability'],
    icon: Activity,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
];

const SolutionsShowcaseSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-950 text-white">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Solution Patterns
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Modular offerings built to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">plug into your roadmap</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 max-w-3xl mx-auto"
          >
            Select exactly what you need—strategy sprints, platform pods, AI accelerators, or managed evolution. Every capability is composable.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl sticky top-28"
          >
            <SkeletonImage src={solutionsImage} alt="Solutions showcase" className="w-full h-72 object-cover opacity-80" />
            <div className="p-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">Solution Patterns</p>
              <p className="text-sm text-slate-300">
                Select exactly what you need—strategy sprints, platform pods, AI accelerators, or managed evolution. Every capability is composable.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-5">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="group relative p-5 md:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  <div className="flex items-center gap-4 md:w-72">
                    <div className="text-3xl font-black text-white/30 leading-none min-w-14">0{index + 1}</div>
                    <div className={`p-3 rounded-2xl ${solution.bg} ${solution.color} transition-transform duration-500 group-hover:scale-110`}>
                      <solution.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed flex-1 text-sm md:text-base">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:w-80">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold uppercase tracking-wider text-white/70 group-hover:bg-blue-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 font-bold text-xs uppercase tracking-widest group-hover:text-red-300 transition-colors md:min-w-32 justify-end">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcaseSection;

