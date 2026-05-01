import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Headphones, Users } from 'lucide-react';

const channels = [
  {
    title: 'Partnerships & Sales',
    description: 'Exploring new initiatives, co-innovation, or platform builds.',
    email: 'info@techhiveit.com',
    response: '2 business days',
    icon: Shield,
  },
  {
    title: 'Support & Client Delivery',
    description: 'Active engagement support, production issues, or roadmap planning.',
    email: 'info@techhiveit.com',
    response: 'Same day',
    icon: Headphones,
  },
  {
    title: 'Talent & Media',
    description: 'Careers, speaking opportunities, or media inquiries.',
    email: 'info@techhiveit.com',
    response: '3 business days',
    icon: Users,
  },
];

const SupportChannelsSection = () => (
  <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-300" />
          Direct Access
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
          Specialized <span className="italic">channels</span> for <br />
          faster <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Resolution</span>.
        </h2>
      </div>

      <div className="space-y-4">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-6 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="grid lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-1 w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <channel.icon className="w-5 h-5 text-blue-300" />
                </div>
                <div className="lg:col-span-2">
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">
                    {channel.response} SLA
                  </p>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light lg:col-span-6">
                  {channel.description}
                </p>
                <div className="lg:col-span-3 lg:justify-self-end">
                <a
                  href={`mailto:${channel.email}`}
                    className="flex items-center gap-3 text-xs font-bold text-blue-300 group/link"
                >
                  {channel.email}
                    <div className="w-6 h-[1px] bg-blue-300 group-hover/link:w-10 transition-all" />
                </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SupportChannelsSection;
