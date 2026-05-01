import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Users2, Heart, Lightbulb } from 'lucide-react';
import Counter from './Counter';

const statList = [
  { number: 3480, suffix: '', label: 'Projects Completed', icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { number: 428, suffix: '', label: 'IT Specialists', icon: Users2, color: 'text-red-600', bg: 'bg-red-50' },
  { number: 6980, suffix: '', label: 'Happy Clients', icon: Heart, color: 'text-red-600', bg: 'bg-red-50' },
  { number: 256, suffix: '', label: 'Smart Solutions', icon: Lightbulb, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const StatisticsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="statistics"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.2),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.2),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statList.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-3xl ${stat.bg} ${stat.color} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-white`}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 font-display">
                {inView ? <Counter end={stat.number} suffix={stat.suffix} /> : '0'}
              </div>

              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                {stat.label}
              </div>

              {/* Connecting Dot for desktop */}
              {index < statList.length - 1 && (
                <div className="absolute top-1/2 -right-6 w-1 h-1 bg-white/40 rounded-full hidden lg:block" />
              )}
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
