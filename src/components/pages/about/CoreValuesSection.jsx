import React from 'react';
import { motion } from 'framer-motion';
import integrityImage from '../../../assets/about-section/int.webp';
import innovationImage from '../../../assets/about-section/invent.webp';
import peopleImage from '../../../assets/about-section/elevate.webp';
import outcomesImage from '../../../assets/banners/sponsership.webp';
import sustainabilityImage from '../../../assets/banners/mediabanner.webp';
import partnershipImage from '../../../assets/about-section/partnership.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const values = [
  {
    title: 'Integrity in Action',
    description: 'We operate with radical transparency - clarity in scope, inclusive decision making, and accountable delivery.',
    image: integrityImage,
  },
  {
    title: 'Invent Boldly',
    description: 'Curiosity drives us. We prototype early, test quickly, and shape new playbooks informed by data and empathy.',
    image: innovationImage,
  },
  {
    title: 'Elevate People',
    description: 'We invest in talent mobility, mentorship, and equitable opportunities so multidisciplinary teams thrive.',
    image: peopleImage,
  },
  {
    title: 'Outcomes over Output',
    description: 'Success is measured by business impact, adoption, and cultural readiness - not just code shipped.',
    image: outcomesImage,
  },
  {
    title: 'Sustainable Delivery',
    description: 'From responsible AI guardrails to carbon-aware architectures, we build solutions that last.',
    image: sustainabilityImage,
  },
  {
    title: 'Partnership Mindset',
    description: 'We co-create with clients, blending our expertise with their domain depth for shared success.',
    image: partnershipImage,
  },
];

const CoreValuesSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 text-white">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300 mb-6">Foundational Pillars</p>
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
            Principles that guide every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal italic">engagement</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-36 overflow-hidden">
                <SkeletonImage
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/15 text-white text-xs font-bold">V{index + 1}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                  Read More
                  <div className="w-4 h-[1px] bg-white/50 group-hover:bg-white transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
