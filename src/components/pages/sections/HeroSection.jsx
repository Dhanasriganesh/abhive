import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBackground from '../../../assets/home-section/services.webp';
import logoBackground from '../../../assets/Techhive-logo.png';
import SkeletonImage from '../../shared/SkeletonImage';

const stats = [
  { value: 3480, suffix: '+', label: 'Projects Completed' },
  { value: 428, suffix: '+', label: 'IT Specialists' },
  { value: 6980, suffix: '+', label: 'Happy Clients' },
  { value: 256, suffix: '+', label: 'Smart Solutions' },
];

const AnimatedNumber = ({ value, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: latest => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden " data-header-theme="hero">
    <SkeletonImage src={heroBackground} alt="TechHive hero" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br " />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.35),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(239,68,68,0.35),transparent_36%)]" />
    <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img src={logoBackground} alt="" className="w-[78%] max-w-5xl opacity-[0.08] object-contain" />
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 pt-28 md:pt-32 pb-16">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className=" inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-red-600 text-xs font-semibold uppercase tracking-[0.22em]">
            <span className="h-2 w-2 rounded-full bg-blue-400 " />
            Next-Generation AI Solutions
          </span>
          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-blue-600 max-w-5xl">
            Shaping the Future of
            <span className="block bg-gradient-to-r from-red-500 via-white to-blue-300 bg-clip-text text-transparent">
              Business Through
            </span>
            Innovation and Excellence
          </h1>
          <p className="mt-6 max-w-2xl text-black text-base md:text-lg leading-relaxed">
            Transforming businesses with cutting-edge technology solutions and strategic innovation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/35"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-white/25 bg-white/10 text font-semibold text-sm uppercase tracking-wider hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Trusted by global teams', 'Delivery in weeks, not quarters', 'Secure by design'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 bg-white/10 text-[11px] text-blue-800">
                <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-4">
                <p className="text-2xl md:text-3xl font-bold text-red-700">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-white/70 text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
