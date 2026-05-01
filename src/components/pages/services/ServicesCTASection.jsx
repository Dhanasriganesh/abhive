import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  'Run a strategy sprint within 14 days',
  'Stand up an integrated pod in under 4 weeks',
  'Build the first AI copilot pilot in 6 weeks',
];

const ServicesCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900" />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-red-500" />
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-blue-400 mb-8">
                Next Chapter
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
                Ready to build the <span className="italic">next increment</span> <br />
                of your digital <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">future</span>?
              </h2>

              <div className="grid md:grid-cols-3 gap-3">
                {commitments.map((item) => (
                  <div key={item} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-3">Milestone</span>
                    <p className="text-xs text-white/80 leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-500/20"
              >
                Start Conversation
              </a>
              <a
                href="/services"
                className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Learn Models
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
