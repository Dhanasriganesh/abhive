import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/services.webp';

const stats = [
  { label: 'AI builds delivered', value: '180+' },
  { label: 'Median launch', value: '6 wks' },
  { label: 'Reusable accelerators', value: '25' },
  { label: 'Cloud migrations', value: '140+' },
];

const signals = [
  'Product + data + engineering in one pod',
  'Launch, observe, and iterate — no handoffs',
  'Safety, privacy, and compliance baked in',
];

const ServicesHero = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center py-20 lg:py-28"
      data-header-theme="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/80 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.35),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(239,68,68,0.3),transparent_34%)] z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white" />
                Our Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.1]">
                AI Built for <span className="italic">Production</span>, <br />
                Not just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white font-normal">Prototypes</span>.
              </h1>
              <p className="text-base md:text-lg text-white/95 mb-12 max-w-xl leading-relaxed">
                One embedded pod—product, design, data, and engineering—shipping with observability, guardrails, and accelerators so you move faster without breaking things.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {signals.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white hover:border-white/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="p-6 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-red-400" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/90 mb-5">Proof of Delivery</p>

              <div className="space-y-3">
                {stats.map((stat, idx) => (
                  <div key={stat.label} className="relative group rounded-2xl border border-white/15 bg-slate-950/40 p-4">
                    <p className="text-2xl font-light text-white mb-1">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/75 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">Production Focused</p>
                    <p className="text-[10px] text-white/80 italic">"Scaling from day zero."</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
