import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    id: 'consulting',
    title: 'Consulting',
    headline: 'Shape resilient strategies and operating models.',
    description:
      'Our consulting teams blend industry strategists, data scientists, and product leaders to craft future-ready roadmaps, investment cases, and responsible AI guardrails.',
    pillars: [
      'Enterprise assessments & value models',
      'Customer and employee journey re-imagination',
      'Responsible AI playbooks and policy design',
    ],
    metrics: [
      { label: 'Programs launched', value: '60+' },
      { label: 'Avg. value uplift', value: '18%' },
    ],
  },
  {
    id: 'staffing',
    title: 'Staffing',
    headline: 'Deploy elite hybrid teams, on demand.',
    description:
      'We provide cleared, certified engineers, designers, analysts, and delivery leads who plug directly into your squads with transparent velocity metrics.',
    pillars: [
      'Flexible pods with SLAs and velocity dashboards',
      'Curated talent network across 12 countries',
      'Knowledge transfer baked into every engagement',
    ],
    metrics: [
      { label: 'Time to deploy', value: '3 weeks' },
      { label: 'Retention', value: '96%' },
    ],
  },
  {
    id: 'training',
    title: 'Training',
    headline: 'Upskill teams with hands-on academies.',
    description:
      'Capability academies pair live instruction with battle-tested accelerators so teams internalize modern delivery disciplines and AI best practices.',
    pillars: [
      'Custom curricula for leaders, makers, and operators',
      'Sandbox environments with real datasets',
      'Coaching circles and certification pathways',
    ],
    metrics: [
      { label: 'Learners certified', value: '4,000+' },
      { label: 'Skill uplift', value: '+32 points' },
    ],
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    headline: 'Engineer platforms that scale responsibly.',
    description:
      'We design and run secure, cloud-native platforms with observability, DevSecOps, and automation baked in from day one.',
    pillars: [
      'Modernization & cloud migration accelerators',
      'AI copilots, workflow automation, and integrations',
      'Site reliability, FinOps, and managed evolution',
    ],
    metrics: [
      { label: 'Deployments per year', value: '120+' },
      { label: 'Release acceleration', value: '5 times' },
    ],
  },
  {
    id: 'visa-sponsorship',
    title: 'Visa Sponsorship',
    headline: 'Move global talent where they create the most value.',
    description:
      'We help employers and skilled professionals navigate work visa sponsorship—aligning the right roles, locations, and timelines while staying compliant with evolving regulations.',
    pillars: [
      'Eligibility assessments and sponsorship strategy',
      'Document preparation and petition coordination',
      'End-to-end guidance from filing to post-approval compliance',
    ],
    metrics: [
      { label: 'Countries supported', value: '10+' },
      { label: 'End-to-end engagements', value: '200+' },
    ],
  },
];

const ServiceDetailSections = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28" id="service-details">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-6">
            Depth across every service line. <br />
            Built for <span className="font-normal italic">longevity</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">performance</span>.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Each offering includes strategy, experience, engineering, and change partners so we can move from idea to scaled value without handoffs.
          </p>
        </div>

        <div className="space-y-6">
          {offerings.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative grid lg:grid-cols-12 gap-6 items-start p-6 md:p-8 rounded-[32px] bg-slate-50 border border-slate-200 hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 lg:col-span-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
                  {service.title}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 leading-tight">
                  {service.headline}
                </h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-lg">
                  {service.description}
                </p>

                <ul className="grid md:grid-cols-2 gap-3 mb-2">
                  {service.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 group-hover/item:bg-blue-600 transition-colors" />
                      <span className="text-sm text-slate-700">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 lg:col-span-4 grid grid-cols-2 gap-4">
                {service.metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-2xl bg-white border border-slate-200">
                    <p className="text-2xl font-light text-slate-900 mb-1">{metric.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {metric.label}
                    </p>
                  </div>
                ))}

                <div className="col-span-2 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 opacity-60">Status</p>
                  <p className="text-sm font-medium">Enterprise Ready & Scalable</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSections;
