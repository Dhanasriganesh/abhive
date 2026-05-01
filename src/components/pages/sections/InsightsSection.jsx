import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Terminal, Sparkles } from 'lucide-react';
import insightsImage from '../../../assets/home-section/insights.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const insightsData = [
  {
    title: 'Building trustworthy AI copilots across regulated industries',
    category: 'Perspective',
    author: 'Priya Nair',
    icon: Sparkles,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Design systems as operating systems for omni-channel brands',
    category: 'Playbook',
    author: 'Matthew Cole',
    icon: BookOpen,
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    title: 'Telemetry-first DevOps: how to scale releases without burnout',
    category: 'Guide',
    author: 'Nora Valdez',
    icon: Terminal,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
];

const InsightsSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Thought Leadership</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
            >
              Latest thinking from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">our studios</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="inline-flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors cursor-pointer group">
              <span>Explore all insights</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-2.5 rounded-xl ${insight.bg} ${insight.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <insight.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-300 group-hover:text-red-600 transition-colors">
                  {insight.category}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                {insight.title}
              </h3>

              <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Written by</span>
                  <span className="text-sm font-bold text-slate-700">{insight.author}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

