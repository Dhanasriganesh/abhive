import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[40px] border border-slate-200 bg-slate-950 overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.3),transparent_35%)]" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-red-500" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-blue-300 mb-8">
                Next Steps
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
                Ready to design the <span className="italic">next chapter</span> <br />
                of your digital <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">journey</span>?
              </h2>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Kick off with a strategy sprint or an AI co-creation workshop. We'll tailor the first 90 days to your specific business outcomes.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/contact">
                <button className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
                  Start a Conversation
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
