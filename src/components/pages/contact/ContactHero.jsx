import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import backgroundImage from '../../../assets/about-section/contactus.webp';

const contactStats = [
  { label: 'Global Response', value: '< 2hrs', icon: Mail },
  { label: 'Studio Network', value: '12+', icon: Globe },
  { label: 'Timezones', value: '24/7', icon: Phone },
  { label: 'HQ Presence', value: 'Charleston, SC', icon: MapPin },
];

const ContactHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/80 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.35),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(239,68,68,0.3),transparent_35%)] z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.6em] text-white flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-white/50" />
              Global Connection
              <span className="w-12 h-[1px] bg-white/50" />
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mt-8 mb-6">
              Let's build <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 font-normal">the future</span>, together.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 p-6 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            <div className="space-y-3">
              {contactStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 p-3 rounded-2xl border border-white/15 bg-slate-950/40">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white tabular-nums">{stat.value}</p>
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">Collaborate</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
};

export default ContactHero;
