import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Car, Palette, Eye, Code, Layers, Landmark, HeartPulse,
  Cpu, Phone, Zap, Factory, Plane, Briefcase,
  GraduationCap, Building2, Shield, Box, ShoppingBag,
  Droplets, Hotel, Globe, Mic, Radio
} from 'lucide-react';

const industryList = [
  { title: 'Automobile & Mobility', icon: Car, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Product Design', icon: Palette, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Smart Vision', icon: Eye, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Web Development', icon: Code, color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: 'Platform Integration', icon: Layers, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Financial Services', icon: Landmark, color: 'text-blue-700', bg: 'bg-blue-50' },
  { title: 'Healthcare', icon: HeartPulse, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Media & Entertainment', icon: Mic, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Technology Enablement', icon: Cpu, color: 'text-blue-700', bg: 'bg-blue-50' },
  { title: 'Telecommunications', icon: Phone, color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: 'Energy & Utility', icon: Zap, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Industrial Products', icon: Factory, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Transportation & Travel', icon: Plane, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Banking & Finance', icon: Briefcase, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Education', icon: GraduationCap, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Government', icon: Building2, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Insurance', icon: Shield, color: 'text-blue-700', bg: 'bg-blue-50' },
  { title: 'Logistics', icon: Box, color: 'text-blue-700', bg: 'bg-blue-50' },
  { title: 'Retail & Consumer Goods', icon: ShoppingBag, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Telecom & Media', icon: Radio, color: 'text-blue-400', bg: 'bg-blue-50' },
  { title: 'Oil & Gas', icon: Droplets, color: 'text-blue-800', bg: 'bg-blue-50' },
  { title: 'Travel & Hospitality', icon: Hotel, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Smart Cities', icon: Building2, color: 'text-red-400', bg: 'bg-red-50' },
  { title: 'E-commerce', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const IndustriesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="industries"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden bg-white"
    >
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Domain Depth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Industries we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">power</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 max-w-2xl mx-auto"
          >
            From mobility to media, every program is tailored with industry-specific playbooks, controls, and partners.
          </motion.p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {industryList.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -2 }}
              className="group p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${industry.bg} ${industry.color} transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                  <industry.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex-1">
                  {industry.title}
                </h4>
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-blue-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

