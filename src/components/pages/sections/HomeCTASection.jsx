import React from 'react';
import { motion } from 'framer-motion';
import buildImage from '../../../assets/home-section/build.webp';
import { Link } from 'react-router-dom';

const HomeCTASection = () => (
  <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden group"
      >
        <img src={buildImage} alt="" className="absolute inset-y-0 right-0 w-1/2 h-full object-cover opacity-25 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/85" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-500" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Let's build together</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Ready to design the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">next chapter</span> of your business?
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Kick off with a strategy sprint, AI co-creation workshop, or platform modernization plan. We'll tailor the first 90 days to your outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-800/30">
                Start a Conversation
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold text-sm uppercase tracking-widest hover:border-slate-500 transition-colors shadow-sm">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeCTASection;
