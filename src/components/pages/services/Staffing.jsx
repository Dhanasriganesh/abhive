import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Rocket, Shield, TrendingUp, CheckCircle2, Award, Briefcase, Clock, Target, Zap, Globe, Building2, MessageCircle, ArrowRight, FileText, Network, Layers, Gauge, UserCheck, Code, Palette, Database, Brain, BarChart3 } from 'lucide-react';
import staffingHero from '../../../assets/about-section/staffing.webp';
import SkeletonImage from '../../shared/SkeletonImage';
import BackgroundImage from '../../shared/BackgroundImage';
import staffing18 from '../../../assets/staffing/18.webp';
import staffing19 from '../../../assets/staffing/19.webp';
import staffing20 from '../../../assets/staffing/20.webp';
import staffing21 from '../../../assets/staffing/21.webp';
import staffing22 from '../../../assets/staffing/22.webp';
import staffing23 from '../../../assets/staffing/23.webp';

const talentModels = [
  {
    title: 'Embedded Pods',
    icon: Network,
    description: 'Cross-functional teams (product, design, engineering, data) that plug into your backlog with shared OKRs.',
    benefits: [
      'Shared ownership and accountability',
      'Integrated with your existing workflows',
      'Direct collaboration with your teams',
      'Aligned on business outcomes',
    ],
    useCase: 'Ideal for product development, digital transformation, and innovation initiatives',
  },
  {
    title: 'Specialist Augmentation',
    icon: UserCheck,
    description: 'Rapid access to cleared architects, analysts, SREs, and program leads for high-priority initiatives.',
    benefits: [
      'Quick deployment of specialized skills',
      'Security-cleared professionals available',
      'Flexible engagement models',
      'Expert-level domain knowledge',
    ],
    useCase: 'Perfect for urgent projects, skill gaps, and specialized technical needs',
  },
  {
    title: 'Managed Squads',
    icon: Rocket,
    description: 'Outcome-based delivery teams with velocity dashboards, quality guardrails, and integrated change support.',
    benefits: [
      'Full team ownership and management',
      'Transparent performance metrics',
      'Built-in quality assurance',
      'Continuous improvement focus',
    ],
    useCase: 'Best for end-to-end delivery, complex projects, and long-term partnerships',
  },
  {
    title: 'Hybrid Teams',
    icon: Layers,
    description: 'Blended teams combining your internal talent with our specialists for optimal knowledge transfer.',
    benefits: [
      'Knowledge sharing and upskilling',
      'Cultural integration',
      'Smooth handoff processes',
      'Sustainable capability building',
    ],
    useCase: 'Excellent for capability building and knowledge transfer initiatives',
  },
];

const roles = [
  {
    category: 'Engineering & Development',
    positions: [
      { title: 'Full-Stack Engineers', icon: Code },
      { title: 'DevOps Engineers', icon: Zap },
      { title: 'Cloud Architects', icon: Globe },
      { title: 'Security Engineers', icon: Shield },
      { title: 'Mobile Developers', icon: Rocket },
      { title: 'Data Engineers', icon: Database },
    ],
  },
  {
    category: 'Design & Product',
    positions: [
      { title: 'Product Managers', icon: Target },
      { title: 'UX/UI Designers', icon: Palette },
      { title: 'Product Designers', icon: Layers },
      { title: 'Design Systems Engineers', icon: Network },
    ],
  },
  {
    category: 'Data & Analytics',
    positions: [
      { title: 'Data Scientists', icon: TrendingUp },
      { title: 'ML Engineers', icon: Brain },
      { title: 'Analytics Engineers', icon: BarChart3 },
      { title: 'Business Analysts', icon: FileText },
    ],
  },
  {
    category: 'Leadership & Strategy',
    positions: [
      { title: 'Engineering Managers', icon: Users },
      { title: 'Technical Program Managers', icon: Briefcase },
      { title: 'Solution Architects', icon: Building2 },
      { title: 'Scrum Masters', icon: Clock },
    ],
  },
];

const enablementServices = [
  {
    title: 'Capability Benchmarking',
    description: 'Comprehensive skill-gap analysis and capability assessments to identify development opportunities.',
    icon: Gauge,
  },
  {
    title: 'Talent Playbooks',
    description: 'Customized onboarding rituals, tooling guides, and best practices tailored to your environment.',
    icon: FileText,
  },
  {
    title: 'Growth Plans & Coaching',
    description: 'Individual development plans, mentorship programs, and certification support for career growth.',
    icon: TrendingUp,
  },
  {
    title: 'Knowledge Transfer',
    description: 'Structured documentation, pair programming, and training sessions to ensure smooth transitions.',
    icon: Network,
  },
];

const staffingProcess = [
  {
    number: '01',
    title: 'Requirements Discovery',
    description: 'Deep dive into your needs, team culture, technical requirements, and success criteria.',
    activities: [
      'Stakeholder interviews',
      'Technical requirements analysis',
      'Cultural fit assessment',
      'Timeline and budget planning',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '02',
    title: 'Talent Sourcing & Screening',
    description: 'Rigorous vetting process to identify candidates who match your technical and cultural needs.',
    activities: [
      'Candidate sourcing',
      'Technical assessments',
      'Cultural fit interviews',
      'Reference checks',
    ],
    duration: '2-4 weeks',
  },
  {
    number: '03',
    title: 'Matching & Selection',
    description: 'Present qualified candidates with detailed profiles and facilitate interview process.',
    activities: [
      'Candidate presentation',
      'Interview coordination',
      'Technical evaluations',
      'Final selection support',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '04',
    title: 'Onboarding & Integration',
    description: 'Smooth onboarding process ensuring new team members are productive from day one.',
    activities: [
      'Onboarding planning',
      'Access provisioning',
      'Team introductions',
      'Initial project setup',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '05',
    title: 'Ongoing Support & Optimization',
    description: 'Continuous performance monitoring, feedback loops, and team optimization.',
    activities: [
      'Performance reviews',
      'Regular check-ins',
      'Team optimization',
      'Retention strategies',
    ],
    duration: 'Ongoing',
  },
];

const benefits = [
  {
    title: 'E-Verify Certification',
    description: 'Our E-Verify certification enables extended OPT visas for STEM students, providing up to 24 months of work authorization.',
    icon: Shield,
    highlight: '24-month OPT extension support',
  },
  {
    title: 'Direct Client Relationships',
    description: 'TechHive directly markets candidates to end clients, eliminating third-party intermediaries and ensuring transparent processes.',
    icon: Users,
    highlight: 'No middlemen, direct connections',
  },
  {
    title: 'Transparent Metrics',
    description: 'Weekly scorecards provide visibility into throughput, quality, enablement, and retention metrics.',
    icon: Gauge,
    highlight: 'Real-time performance dashboards',
  },
  {
    title: 'Redeployment Support',
    description: 'Proactive redeployment team works before assignments end to find your next opportunity seamlessly.',
    icon: Briefcase,
    highlight: 'Continuous opportunity matching',
  },
  {
    title: 'Industry Recognition',
    description: 'Trusted by Fortune 500 companies across multiple industries with proven track record.',
    icon: Award,
    highlight: 'Fortune 500 partnerships',
  },
  {
    title: 'Comprehensive Support',
    description: 'End-to-end support from recruitment to retention, including visa sponsorship and career development.',
    icon: Rocket,
    highlight: 'Full lifecycle management',
  },
];

const successStories = [
  {
    industry: 'Retail',
    client: 'Global Retailer',
    challenge: 'Need to rapidly scale omnichannel capabilities and experiment with new customer experiences.',
    solution: 'Deployed embedded product and engineering pod with shared OKRs and integrated workflows.',
    results: [
      'Launched omnichannel pod in 18 days',
      'Shipped 40+ experiments per quarter',
      'Significant revenue growth achieved',
      'Faster time-to-market for features',
    ],
    metrics: {
      primary: '18',
      label: 'Days to Launch',
    },
  },
  {
    industry: 'Healthcare',
    client: 'Healthcare Network',
    challenge: 'Legacy clinical workflows causing inefficiencies and delayed patient care.',
    solution: 'Embedded data and automation engineers to modernize workflows and implement intelligent systems.',
    results: [
      'Modernized clinical workflows',
      'Major reduction in cycle time',
      'Improved patient care delivery',
      'Enhanced operational efficiency',
    ],
    metrics: {
      primary: 'Major',
      label: 'Time Reduction',
    },
  },
  {
    industry: 'Energy',
    client: 'Energy Enterprise',
    challenge: 'System reliability issues and need for DevSecOps capabilities across infrastructure.',
    solution: 'Deployed SRE and platform squads with integrated coaching for internal teams.',
    results: [
      'Exceptional system reliability achieved',
      'Internal teams upskilled in DevSecOps',
      'Improved platform stability',
      'Enhanced security posture',
    ],
    metrics: {
      primary: 'Exceptional',
      label: 'Reliability',
    },
  },
];

const engagementModels = [
  {
    model: 'Project-Based',
    description: 'Fixed-duration engagements for specific projects or initiatives.',
    duration: '3-12 months',
    bestFor: 'Defined scope projects, migrations, implementations',
  },
  {
    model: 'Ongoing Partnership',
    description: 'Long-term relationships with flexible team scaling as needs evolve.',
    duration: '12+ months',
    bestFor: 'Product development, continuous delivery, transformation programs',
  },
  {
    model: 'On-Demand',
    description: 'Flexible access to specialists for urgent needs or skill gaps.',
    duration: 'Variable',
    bestFor: 'Urgent projects, skill augmentation, specialized expertise',
  },
];

const Staffing = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
        <BackgroundImage
          src={staffingHero}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-red-900/70"></div>
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
              Talent Solutions
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
              Flexible Teams Designed Around Your Goals
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              From embedded pods to specialist augmentation, we provide talent solutions that integrate seamlessly with your teams and drive measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Talent Models Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Talent Models</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Flexible Engagement Models
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Choose the model that best fits your needs—from embedded pods to specialist augmentation.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
            {talentModels.map((model, index) => {
              const modelImages = [staffing22, staffing23];
              const hasImage = index < 2;
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                  className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-300 hover:border-blue-200 overflow-hidden"
                >
                  {hasImage && (
                    <div className="relative h-32 sm:h-40 mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden">
                      <SkeletonImage
                        src={modelImages[index]}
                        alt={model.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <model.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {model.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                        {model.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3 sm:pt-4">
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Key Benefits:</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {model.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-500 italic">
                      {model.useCase}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles & Positions */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Our Talent Pool</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Access to Top-Tier Professionals
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We source and place talent across all technology disciplines, from engineering to design to data science.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            {roles.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {category.positions.map((position, posIndex) => (
                    <div
                      key={posIndex}
                      className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <position.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{position.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enablement Services */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Enablement</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              More Than Staff Augmentation
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We invest in your team's growth with comprehensive enablement services that build lasting capabilities.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {enablementServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-red-50 p-4 sm:p-5 md:p-6 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Process */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Our Process</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              How We Source & Place Talent
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              A streamlined process from requirements to onboarding, ensuring the right fit every time.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {staffingProcess.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg border-2 sm:border-4 border-white">
                  {step.number}
                </div>
                {/* Content Card */}
                <div className="flex-1 rounded-xl sm:rounded-2xl border-2 border-blue-200 bg-white p-4 sm:p-5 md:p-6 shadow-md w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full w-fit">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {step.activities.map((activity, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs bg-gray-50 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 flex-shrink-0" />
                        <span className="whitespace-nowrap">{activity}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Why Choose Us</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Comprehensive Benefits & Support
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Beyond placement, we provide ongoing support, enablement, and career development for your team.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-red-50 p-4 sm:p-5 md:p-6 shadow-lg"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                      {benefit.description}
                    </p>
                    <div className="border-l-4 border-blue-500 bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-lg">
                      <p className="text-[10px] sm:text-xs font-semibold text-blue-700">{benefit.highlight}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Impact</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Talent That Delivers Outcomes
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Real results from real teams deployed across industries and use cases.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
            {successStories.map((story, index) => {
              const storyImages = [staffing18, staffing19, staffing20];
              return (
                <motion.div
                  key={story.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                  className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-lg overflow-hidden"
                >
                  <div className="relative h-40 sm:h-48 rounded-lg sm:rounded-xl mb-3 sm:mb-4 overflow-hidden">
                    <SkeletonImage
                      src={storyImages[index]}
                      alt={`${story.client} - ${story.industry}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full w-fit">
                      {story.industry}
                    </span>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">{story.metrics.primary}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">{story.metrics.label}</div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{story.client}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-2 sm:mb-3">
                    <span className="font-semibold">Challenge:</span> {story.challenge}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-4">
                    <span className="font-semibold">Solution:</span> {story.solution}
                  </p>

                  <div className="border-t border-gray-100 pt-3 sm:pt-4">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Key Results:</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Engagement Options</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Flexible Engagement Models
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Choose the engagement model that aligns with your project timeline and business needs.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="rounded-xl sm:rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{model.model}</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  {model.description}
                </p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-500">Duration:</span>
                    <span className="text-[10px] sm:text-xs font-bold text-blue-600">{model.duration}</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-1">Best For:</p>
                    <p className="text-[10px] sm:text-xs text-gray-700">{model.bestFor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Metrics */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <SkeletonImage
                src={staffing21}
                alt="Transparent Performance Metrics"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-red-500 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white uppercase tracking-wide sm:tracking-widest shadow-md mb-4 sm:mb-6">
                Radical Visibility
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transparent Performance Metrics
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Weekly scorecards provide complete visibility into team performance, including throughput, quality metrics, enablement progress, and retention rates. You always know how your teams are performing.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Real-time performance dashboards',
                  'Weekly scorecard reports',
                  'Quality and velocity metrics',
                  'Retention and satisfaction tracking',
                  'Enablement progress monitoring',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-r from-blue-600 via-red-600 to-red-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center text-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 mb-6 sm:mb-8 px-2 sm:px-0">
              Let's discuss how our staffing solutions can help you scale your team with top-tier talent that drives results.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 45px rgba(15,23,42,0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-blue-700 shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get Started
                </motion.button>
              </Link>
              <Link to="/careers" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.14)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto rounded-full border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white flex items-center justify-center gap-2"
                >
                  View Open Roles
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Staffing;
