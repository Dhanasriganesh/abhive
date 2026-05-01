import React from 'react';
import { motion } from 'framer-motion';
import missionImage from '../../../assets/banners/cloudbanner.webp';
import visionImage from '../../../assets/banners/databanner.webp';
import promiseImage from '../../../assets/banners/devopsbanner.webp';
import SkeletonImage from '../../shared/SkeletonImage';
const pillars = [
  {
    title: 'Mission',
    description:
      'Engineer trustworthy AI and digital ecosystems that amplify human decision-making, accelerate innovation, and drive resilient growth for our clients.',
    highlights: ['Strategy, product, and delivery under one roof', 'Outcome-focused agile governance'],
    image: missionImage,
  },
  {
    title: 'Vision',
    description:
      'Be the partner enterprises trust to navigate every wave of technological disruption with purpose, clarity, and measurable impact.',
    highlights: ['Industry blueprints for faster execution', 'Embedded change enablement'],
    image: visionImage,
  },
  {
    title: 'Promise',
    description:
      'Design experiences people love, platforms teams can scale, and cultures empowered to continuously learn.',
    highlights: ['Inclusive collaboration rituals', 'Transparent impact metrics'],
    image: promiseImage,
  },
];

const MissionVisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-6">
            Beyond delivering software, we build adaptive operating models where <span className="font-normal italic">innovation</span> is constant.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
            Success isn't just about the code shipped; it's about the cultural readiness and business impact we co-create with every partnership.
          </p>
        </div>

        <div className="space-y-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="grid md:grid-cols-12">
                <div className="relative h-48 md:h-auto md:col-span-4 overflow-hidden">
                  <SkeletonImage
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                </div>
                <div className="md:col-span-8 p-6 md:p-8">
                  <h3 className="text-slate-900 font-bold tracking-widest uppercase text-xs mb-4">
                    0{index + 1} — {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{pillar.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pillar.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
