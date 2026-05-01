import React from 'react';
import { motion } from 'framer-motion';
import milestone1Image from '../../../assets/banners/energybanner.webp';
import milestone2Image from '../../../assets/banners/financebanner.webp';
import milestone3Image from '../../../assets/banners/healthbanner.webp';
import milestone4Image from '../../../assets/banners/telecombanner.webp';
import milestone5Image from '../../../assets/ppl/location1.webp';
import journeyImage from '../../../assets/wolrdlocation.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const milestones = [
  {
    year: '2010',
    title: 'Founded in Charlotte',
    description: 'Launched with a focus on cloud-native engineering for financial services.',
    image: milestone1Image,
  },
  {
    year: '2015',
    title: 'Global delivery hubs',
    description: 'Opened innovation labs in Toronto and Lisbon, expanding 24/6 coverage.',
    image: milestone2Image,
  },
  {
    year: '2018',
    title: 'Experience & Data studio',
    description: 'Merged design research, data science, and AI engineering under one practice.',
    image: milestone3Image,
  },
  {
    year: '2022',
    title: 'Responsible AI framework',
    description: 'Published our Responsible Intelligence playbook adopted by Fortune 500 partners.',
    image: milestone4Image,
  },
  {
    year: '2025',
    title: 'Adaptive enterprise platform',
    description: 'Launched modular platform accelerators powering retail, healthcare, and energy clients.',
    image: milestone5Image,
  },
];

const TimelineSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Connection Flow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1e40af" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-600" />
            Our Evolution
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
            A decade of <span className="italic">velocity</span> and <br />
            continuous <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">learning</span>.
          </h2>
        </div>

        {/* Dense Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-slate-100 md:left-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Year Bubble */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 md:left-1/2 md:-translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0 md:w-1/2">
                  <div className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:mr-10 text-right md:items-end' : 'md:ml-10'
                    }`}>
                    <span className="text-xs font-bold text-blue-600 mb-2 block">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    {/* Compact Image */}
                    <div className="rounded-xl overflow-hidden h-24 sm:h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                      <SkeletonImage
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
