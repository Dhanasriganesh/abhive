import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from "../../../assets/video/techhive.mp4";

/* ===================== STATS ===================== */
const stats = [
  { value: 3480, suffix: '+', label: 'Projects Completed' },
  { value: 428, suffix: '+', label: 'IT Specialists' },
  { value: 6980, suffix: '+', label: 'Happy Clients' },
  { value: 256, suffix: '+', label: 'Smart Solutions' },
];

/* ===================== ANIMATED NUMBER ===================== */
const AnimatedNumber = ({ value, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

/* ===================== MOBILE HERO (WHITE UI) ===================== */
const MobileHero = () => (
  <section className="relative min-h-screen px-5 py-10 flex flex-col justify-center bg-white text-black">

    <div className="max-w-md mx-auto">

      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 bg-gray-100 text-[10px] uppercase tracking-widest text-gray-600">
        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
        Next-Generation AI Solutions
      </span>

      {/* Heading */}
      <h1 className="mt-5 text-3xl font-extrabold leading-tight">
        Shaping the Future of
        <span className="block text-blue-600">
          Business Through
        </span>
        Innovation and Excellence
      </h1>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        Transforming businesses with cutting-edge technology solutions and strategic innovation.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3">
        <Link to="/contact" className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm">
          Get Started
        </Link>
        <Link to="/services" className="w-full text-center border border-gray-300 py-3 rounded-lg text-sm">
          Explore Services
        </Link>
      </div>

      {/* Highlights */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[
          'Trusted by global teams',
          'Delivery in weeks, not quarters',
          'Secure by design'
        ].map((item) => (
          <span key={item} className="text-[10px] px-2 py-1 rounded-full border border-gray-300 bg-gray-100 text-gray-600">
            {item}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center border border-gray-200 rounded-lg py-3">
            <p className="text-lg font-bold text-blue-600">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-[10px] text-gray-500 uppercase">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

/* ===================== DESKTOP HERO ===================== */
const DesktopHero = () => (
  <section className="relative h-screen w-full overflow-hidden">

    {/* Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={heroVideo}
      autoPlay
      loop
      muted
      playsInline
    />

    {/* 🔥 Strong Black Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-8 h-full flex items-center">

      <div className="max-w-3xl text-white">

        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs uppercase tracking-widest">
          Next-Generation AI Solutions
        </span>

        <h1 className="mt-6 text-5xl font-black leading-tight text-white">
          Shaping the Future of
          <span className="block text-blue-400">Business Through</span>
          Innovation and Excellence
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Transforming businesses with cutting-edge technology solutions and strategic innovation.
        </p>

        <div className="mt-6 flex gap-4">
          <Link to="/contact" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </Link>
          <Link to="/services" className="border border-white/30 px-6 py-3 rounded-lg">
            Explore Services
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

/* ===================== MAIN HERO ===================== */
const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default HeroSection;