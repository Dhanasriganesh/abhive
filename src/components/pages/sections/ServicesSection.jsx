import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, GraduationCap, Monitor, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import consultingImg from '../../../assets/about-section/consulting.webp';
import staffingImg from '../../../assets/about-section/staffing.webp';
import trainingImg from '../../../assets/about-section/training.webp';
import itSolutionsImg from '../../../assets/about-section/itsolutions.webp';
import visaSponsorshipImg from '../../../assets/about-section/vs.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const services = [
  {
    title: 'Consulting',
    description: 'We bring cutting-edge AI and deep industry expertise to help your business navigate complex challenges and unlock new opportunities.',
    image: consultingImg,
    icon: Brain,
    color: 'from-blue-500 to-red-500',
    path: '/services/consulting'
  },
  {
    title: 'Staffing',
    description: 'Our solutions connect you with top-tier professionals who drive business forward through specialized expertise and dedication.',
    image: staffingImg,
    icon: Users,
    color: 'from-red-500 to-red-400',
    path: '/services/staffing'
  },
  {
    title: 'Training',
    description: 'Stay ahead of the curve with comprehensive training designed to upskill your team and keep them at the forefront of innovation.',
    image: trainingImg,
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-500',
    path: '/services/training'
  },
  {
    title: 'IT Solutions',
    description: 'Transform your business with our comprehensive suite of IT solutions tailored to drive digital transformation and growth.',
    image: itSolutionsImg,
    icon: Monitor,
    color: 'from-red-500 to-red-500',
    path: '/services/it-solutions'
  },

];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative h-full flex flex-col"
  >
    {/* Card Container */}
    <div className="relative flex-1 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <SkeletonImage
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>

        {/* Floating Icon Badge */}
        <div className={`absolute top-6 left-6 p-3 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg shadow-black/10`}>
          <service.icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
          {service.description}
        </p>

        {/* Action Link */}
        <Link
          to={service.path}
          className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm tracking-widest uppercase group/link"
        >
          <span>Explore Service</span>
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center transition-all group-hover/link:bg-blue-600 group-hover/link:translate-x-2">
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover/link:text-white transition-colors" />
          </div>
        </Link>
      </div>

      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`} />
    </div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden bg-slate-100">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Excellence in Delivery</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-700 to-red-600">
              Technology Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            Empowering global enterprises with innovative solutions designed for the digital-first era.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

