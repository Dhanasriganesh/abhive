import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, RefreshCcw, Sparkles, TrendingUp, Layers } from 'lucide-react';
import whyImage from '../../../assets/home-section/why.webp';

const stats = [
  { label: 'AI-native launches', value: '280+', icon: Sparkles },
  { label: 'Design systems deployed', value: '42', icon: Layers },
  { label: 'Experience score uplift', value: '37%', icon: TrendingUp },
];

const pillars = [
  {
    title: 'Strategy x Delivery',
    description: 'Integrated pods bring strategists, designers, engineers, and change partners to every engagement.',
    icon: Cpu,
    color: 'from-blue-500 to-blue-300',
  },
  {
    title: 'Responsible Intelligence',
    description: 'Guardrails, data governance, and explainability baked into every AI solution.',
    icon: Shield,
    color: 'from-red-500 to-red-400',
  },
  {
    title: 'Adaptive Operations',
    description: 'Telemetry, automation, and playbooks ensure programs keep evolving after launch.',
    icon: RefreshCcw,
    color: 'from-red-500 to-red-400',
  },
];

const StrategicHighlightsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Why teams choose TechHive</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Operating models <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">built for reinvention.</span>
            </h2>

            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-xl">
              We combine vision-led consulting with relentless product delivery. Our studios co-create with your teams, transferring playbooks so you keep scaling long after launch.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md"
                >
                  <stat.icon className="w-4 h-4 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[2rem] overflow-hidden group border border-slate-200 shadow-lg"
            >
              <img
                src={whyImage}
                alt="Why TechHive"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-70"></div>

              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/20 shadow-lg">
                <p className="text-slate-900 font-bold text-sm">Vision Driven Delivery</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative overflow-hidden"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex flex-col gap-4 items-start">
                    <div className="p-3 rounded-2xl bg-slate-100 group-hover:bg-slate-200 transition-colors flex-shrink-0">
                      <pillar.icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategicHighlightsSection;

