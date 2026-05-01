import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Cloud, Shield, Zap, Database, Network, Code, Rocket, CheckCircle2, Clock, Globe, Building2, MessageCircle, ArrowRight, Layers, Cpu, Lock, Monitor, BarChart3, Settings, Activity, FileText, Target, TrendingUp, Brain, Users } from 'lucide-react';
import itSolutionsHero from '../../../assets/about-section/itsolutions.webp';
import SkeletonImage from '../../shared/SkeletonImage';
import BackgroundImage from '../../shared/BackgroundImage';
import it1 from '../../../assets/it-solutions/it-1.webp';
import it2 from '../../../assets/it-solutions/it-2.webp';
import it3 from '../../../assets/it-solutions/it-3.webp';
import it4 from '../../../assets/it-solutions/it-4.webp';
import it5 from '../../../assets/it-solutions/it-5.webp';
import it6 from '../../../assets/it-solutions/it-6.webp';

const solutionPillars = [
  {
    title: 'Platform Modernization',
    icon: Server,
    description: 'Re-architect legacy estates with domain-driven design, event backbones, and zero-downtime migration strategies.',
    services: [
      'Legacy system transformation',
      'Microservices architecture',
      'Event-driven architecture',
      'Zero-downtime migrations',
      'Domain-driven design',
      'API-first development',
    ],
    technologies: ['Kubernetes', 'Docker', 'Cloud Platforms', 'Event Streaming', 'Service Mesh'],
    benefits: [
      'Reduced technical debt',
      'Improved scalability',
      'Enhanced performance',
      'Modern architecture patterns',
    ],
  },
  {
    title: 'AI & Automation Engineering',
    icon: Brain,
    description: 'Deploy copilots, intelligent workflows, and decision automation powered by trustworthy data foundations.',
    services: [
      'AI copilots and assistants',
      'Intelligent workflow automation',
      'Decision automation systems',
      'Machine learning pipelines',
      'Natural language processing',
      'Computer vision solutions',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'LLMs', 'MLOps', 'AutoML', 'AI Frameworks'],
    benefits: [
      'Increased productivity',
      'Automated decision-making',
      'Enhanced user experiences',
      'Data-driven insights',
    ],
  },
  {
    title: 'Run & Evolve',
    icon: Activity,
    description: 'SRE, FinOps, and continuous improvement pods that keep platforms reliable, secure, and cost efficient.',
    services: [
      'Site Reliability Engineering',
      'Financial operations optimization',
      'Continuous improvement programs',
      'Incident response automation',
      'Performance optimization',
      'Cost management',
    ],
    technologies: ['Monitoring Tools', 'SRE Practices', 'FinOps Tools', 'CI/CD', 'Observability'],
    benefits: [
      'Improved reliability',
      'Cost optimization',
      'Faster incident resolution',
      'Continuous improvement',
    ],
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Design, deploy, and manage scalable cloud-native infrastructure across all major platforms.',
    services: [
      'Cloud architecture design',
      'Infrastructure as Code',
      'Multi-cloud strategies',
      'Serverless computing',
      'Container orchestration',
      'Cloud security',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'CloudFormation'],
    benefits: [
      'Scalable infrastructure',
      'Cost-effective solutions',
      'High availability',
      'Global reach',
    ],
  },
  {
    title: 'DevSecOps & Security',
    icon: Shield,
    description: 'Integrate security into every stage of development with automated security practices and compliance.',
    services: [
      'Security automation',
      'Vulnerability management',
      'Compliance automation',
      'Security scanning',
      'Identity and access management',
      'Threat detection',
    ],
    technologies: ['Security Tools', 'Policy as Code', 'SAST/DAST', 'Secrets Management', 'IAM'],
    benefits: [
      'Enhanced security posture',
      'Automated compliance',
      'Reduced vulnerabilities',
      'Faster security reviews',
    ],
  },
  {
    title: 'Data & Analytics Platforms',
    icon: Database,
    description: 'Build modern data platforms for real-time analytics, machine learning, and business intelligence.',
    services: [
      'Data lake architecture',
      'Real-time data processing',
      'Data warehousing',
      'ETL/ELT pipelines',
      'Business intelligence',
      'Data governance',
    ],
    technologies: ['Big Data Tools', 'Data Warehouses', 'Streaming Platforms', 'BI Tools', 'Data Lakes'],
    benefits: [
      'Real-time insights',
      'Scalable data processing',
      'Improved decision-making',
      'Data-driven culture',
    ],
  },
];

const technologyStack = [
  {
    category: 'Cloud Platforms',
    technologies: [
      { name: 'AWS', icon: Cloud, description: 'Amazon Web Services cloud solutions' },
      { name: 'Azure', icon: Cloud, description: 'Microsoft Azure cloud platform' },
      { name: 'Google Cloud', icon: Cloud, description: 'Google Cloud Platform services' },
      { name: 'Multi-Cloud', icon: Globe, description: 'Hybrid and multi-cloud strategies' },
    ],
  },
  {
    category: 'Container & Orchestration',
    technologies: [
      { name: 'Docker', icon: Server, description: 'Containerization platform' },
      { name: 'Kubernetes', icon: Layers, description: 'Container orchestration' },
      { name: 'OpenShift', icon: Server, description: 'Enterprise Kubernetes platform' },
      { name: 'Helm', icon: Settings, description: 'Kubernetes package manager' },
    ],
  },
  {
    category: 'Infrastructure as Code',
    technologies: [
      { name: 'Terraform', icon: Code, description: 'Infrastructure provisioning' },
      { name: 'Ansible', icon: Settings, description: 'Configuration management' },
      { name: 'CloudFormation', icon: Cloud, description: 'AWS infrastructure templates' },
      { name: 'ARM Templates', icon: FileText, description: 'Azure resource templates' },
    ],
  },
  {
    category: 'CI/CD & DevOps',
    technologies: [
      { name: 'Jenkins', icon: Zap, description: 'Continuous integration server' },
      { name: 'GitLab CI', icon: Code, description: 'Integrated CI/CD platform' },
      { name: 'GitHub Actions', icon: Code, description: 'Automated workflows' },
      { name: 'Azure DevOps', icon: Cloud, description: 'DevOps toolchain' },
    ],
  },
  {
    category: 'Monitoring & Observability',
    technologies: [
      { name: 'Prometheus', icon: Monitor, description: 'Metrics and monitoring' },
      { name: 'Grafana', icon: BarChart3, description: 'Visualization and dashboards' },
      { name: 'ELK Stack', icon: Database, description: 'Log aggregation and analysis' },
      { name: 'Datadog', icon: Activity, description: 'Application performance monitoring' },
    ],
  },
  {
    category: 'Security & Compliance',
    technologies: [
      { name: 'Security Scanning', icon: Shield, description: 'Automated security testing' },
      { name: 'Secrets Management', icon: Lock, description: 'Secure credential storage' },
      { name: 'Policy as Code', icon: FileText, description: 'Automated compliance' },
      { name: 'IAM Solutions', icon: Users, description: 'Identity and access management' },
    ],
  },
];

const solutionAreas = [
  {
    title: 'Enterprise Application Development',
    description: 'Build scalable, modern applications using cloud-native architectures and best practices.',
    icon: Code,
    capabilities: [
      'Full-stack development',
      'Microservices architecture',
      'API development',
      'Mobile applications',
      'Progressive web apps',
      'Serverless applications',
    ],
  },
  {
    title: 'Cloud Migration & Transformation',
    description: 'Seamlessly migrate legacy systems to cloud platforms with minimal disruption.',
    icon: Cloud,
    capabilities: [
      'Lift and shift migrations',
      'Re-platforming strategies',
      'Cloud-native refactoring',
      'Data migration',
      'Application modernization',
      'Hybrid cloud solutions',
    ],
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'Design and implement data platforms for analytics, machine learning, and business intelligence.',
    icon: Database,
    capabilities: [
      'Data pipeline development',
      'Real-time data processing',
      'Data lake architecture',
      'Data warehousing',
      'ETL/ELT solutions',
      'Data quality management',
    ],
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Deploy AI and ML solutions to automate processes and drive intelligent decision-making.',
    icon: Brain,
    capabilities: [
      'ML model development',
      'MLOps pipelines',
      'AI copilots',
      'Natural language processing',
      'Computer vision',
      'Predictive analytics',
    ],
  },
  {
    title: 'DevSecOps Implementation',
    description: 'Integrate security into development workflows with automated security practices.',
    icon: Shield,
    capabilities: [
      'Security automation',
      'Vulnerability scanning',
      'Compliance automation',
      'Security testing',
      'Threat modeling',
      'Security monitoring',
    ],
  },
  {
    title: 'Platform Operations & SRE',
    description: 'Ensure platform reliability, performance, and cost efficiency with SRE practices.',
    icon: Activity,
    capabilities: [
      'Site reliability engineering',
      'Incident management',
      'Performance optimization',
      'Capacity planning',
      'Cost optimization',
      'Disaster recovery',
    ],
  },
];

const deliveryMethodologies = [
  {
    name: 'Agile Development',
    description: 'Iterative development with continuous feedback and rapid delivery cycles.',
    icon: Zap,
    practices: ['Sprint planning', 'Daily standups', 'Sprint reviews', 'Retrospectives'],
  },
  {
    name: 'DevOps Practices',
    description: 'Collaboration between development and operations for faster, more reliable releases.',
    icon: Network,
    practices: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Continuous monitoring'],
  },
  {
    name: 'Site Reliability Engineering',
    description: 'Engineering approach to operations focused on reliability, scalability, and performance.',
    icon: Activity,
    practices: ['SLO/SLI definition', 'Error budgets', 'Incident response', 'Post-mortems'],
  },
  {
    name: 'FinOps',
    description: 'Cloud financial management to optimize costs while maintaining performance.',
    icon: TrendingUp,
    practices: ['Cost allocation', 'Resource optimization', 'Budget management', 'Cost forecasting'],
  },
  {
    name: 'Security by Design',
    description: 'Integrate security considerations into every stage of development.',
    icon: Shield,
    practices: ['Threat modeling', 'Security reviews', 'Vulnerability scanning', 'Compliance checks'],
  },
  {
    name: 'Continuous Improvement',
    description: 'Ongoing optimization and enhancement of systems and processes.',
    icon: Target,
    practices: ['Performance monitoring', 'Metrics analysis', 'Process refinement', 'Technology updates'],
  },
];

const implementationProcess = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'Understand current state, identify requirements, and define success criteria.',
    activities: [
      'Current state analysis',
      'Requirements gathering',
      'Technology assessment',
      'Risk identification',
      'Stakeholder alignment',
    ],
    duration: '2-4 weeks',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'Design solution architecture, define technical specifications, and create implementation roadmap.',
    activities: [
      'Solution architecture design',
      'Technical specifications',
      'Integration planning',
      'Security design',
      'Implementation roadmap',
    ],
    duration: '2-6 weeks',
  },
  {
    number: '03',
    title: 'Development & Integration',
    description: 'Build, integrate, and test solutions following best practices and quality standards.',
    activities: [
      'Development sprints',
      'Integration work',
      'Unit and integration testing',
      'Code reviews',
      'Continuous integration',
    ],
    duration: 'Variable',
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing including functional, performance, security, and user acceptance testing.',
    activities: [
      'Functional testing',
      'Performance testing',
      'Security testing',
      'User acceptance testing',
      'Bug fixes and refinements',
    ],
    duration: '2-4 weeks',
  },
  {
    number: '05',
    title: 'Deployment & Go-Live',
    description: 'Deploy to production with zero-downtime strategies and comprehensive monitoring.',
    activities: [
      'Deployment planning',
      'Production deployment',
      'Smoke testing',
      'Monitoring setup',
      'Go-live support',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '06',
    title: 'Operations & Optimization',
    description: 'Ongoing operations, monitoring, optimization, and continuous improvement.',
    activities: [
      '24/7 monitoring',
      'Incident management',
      'Performance optimization',
      'Cost optimization',
      'Continuous improvement',
    ],
    duration: 'Ongoing',
  },
];

const successStories = [
  {
    industry: 'Retail',
    client: 'Global Retailer',
    challenge: 'Legacy e-commerce platform unable to scale and support international expansion.',
    solution: 'Built headless commerce platform with microservices architecture and cloud-native infrastructure.',
    results: [
      'Platform launched across 14 countries',
      'Significant increase in release cadence',
      'Major performance improvements',
      'Enhanced scalability and flexibility',
      'Improved developer productivity',
    ],
    technologies: ['Cloud Platforms', 'Microservices', 'API Gateway', 'CDN'],
    metrics: {
      primary: '14',
      label: 'Countries',
    },
  },
  {
    industry: 'Healthcare',
    client: 'Healthcare Network',
    challenge: 'Fragmented data systems and inefficient care coordination processes.',
    solution: 'Implemented secure data fabric and AI-powered triage copilots for care coordination.',
    results: [
      'Secure data integration platform',
      'AI-powered care coordination',
      'Significant reduction in coordination time',
      'Improved patient outcomes',
      'Enhanced data security',
    ],
    technologies: ['Data Fabric', 'AI/ML', 'Security', 'Integration'],
    metrics: {
      primary: 'Major',
      label: 'Time Reduction',
    },
  },
  {
    industry: 'Energy',
    client: 'Energy Company',
    challenge: 'Manual field operations and lack of predictive maintenance capabilities.',
    solution: 'Deployed automation control tower with predictive maintenance and field operations optimization.',
    results: [
      'Automated field operations',
      'Predictive maintenance coverage worldwide',
      'Massive field hours saved',
      'Reduced operational costs',
      'Improved equipment reliability',
    ],
    technologies: ['IoT', 'AI/ML', 'Automation', 'Analytics'],
    metrics: {
      primary: '1.2M+',
      label: 'Hours Saved',
    },
  },
];

const keyFeatures = [
  {
    title: 'Cloud-Native Blueprints',
    description: 'Reference architectures and accelerators for AWS, Azure, and GCP to accelerate delivery.',
    icon: Cloud,
    highlight: 'Pre-built templates',
  },
  {
    title: 'DevSecOps Accelerators',
    description: 'Policy-as-code frameworks and security automation tools integrated into CI/CD pipelines.',
    icon: Shield,
    highlight: 'Security by default',
  },
  {
    title: 'Observability & AIOps',
    description: 'Comprehensive monitoring, logging, and AI-powered incident response automation.',
    icon: Monitor,
    highlight: 'Proactive operations',
  },
  {
    title: 'API Ecosystems',
    description: 'Design and implement API-first architectures with partner integrations and developer portals.',
    icon: Network,
    highlight: 'API-first approach',
  },
  {
    title: 'Reliability by Design',
    description: 'Embedded SRE, SecOps, and FinOps practices ensure SLAs hold while costs stay optimized.',
    icon: Activity,
    highlight: 'Built-in reliability',
  },
  {
    title: 'Knowledge Transfer',
    description: 'Transition ownership with live runbooks, enablement sessions, and comprehensive documentation.',
    icon: FileText,
    highlight: 'Smooth transitions',
  },
];

const ITSolutions = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
        <BackgroundImage
        src={itSolutionsHero}
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
              IT Solutions & Services
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
              Full-Stack Delivery for Mission-Critical Systems
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              From platform modernization to AI automation, we deliver enterprise-grade solutions that drive business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Offerings</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Comprehensive IT Solutions
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              End-to-end solutions covering platform modernization, AI automation, cloud infrastructure, and operations.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {solutionPillars.map((pillar, index) => {
              const pillarImages = [it1, it2, it3];
              const hasImage = index < 3;
              return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                className="group rounded-xl sm:rounded-2xl border border-white/30 bg-gradient-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-xl transition-all duration-300 hover:border-white/50 hover:from-white/50 hover:via-white/40 hover:to-white/50 overflow-hidden"
              >
                {hasImage && (
                  <div className="relative h-32 sm:h-40 mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden">
                    <SkeletonImage
                      src={pillarImages[index]}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/30 pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Services:</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {pillar.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {pillar.technologies.map((tech, idx) => (
                        <span key={idx} className="text-[10px] sm:text-xs text-gray-700 bg-white/30 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Benefits:</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {pillar.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                          <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
    </section>

      {/* Technology Stack */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Technology Stack</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Reference Accelerators & Tools
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Proven technology stack and accelerators to accelerate delivery and ensure best practices.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
            {technologyStack.map((category, catIndex) => {
              const CategoryIcon = category.technologies[0]?.icon || Code;
              return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="rounded-xl sm:rounded-2xl border border-white/30 bg-gradient-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-xl"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 flex items-center gap-2">
                  <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {category.technologies.map((tech, techIndex) => {
                    const TechIcon = tech.icon || Code;
                    return (
                    <div
                      key={techIndex}
                      className="p-3 sm:p-4 rounded-lg bg-white/30 backdrop-blur-md hover:bg-white/40 transition-colors border border-white/40"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm sm:text-base font-bold text-gray-900">{tech.name}</h4>
                        <TechIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">{tech.description}</p>
                    </div>
                    );
                  })}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Solutions</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Comprehensive Solution Areas
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              End-to-end solutions covering all aspects of modern IT infrastructure and applications.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-white/30 bg-gradient-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-xl hover:border-white/50 hover:from-white/50 hover:via-white/40 hover:to-white/50 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">{area.description}</p>
                <div className="border-t border-white/30 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Capabilities:</p>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {area.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Delivery Methodologies */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Methodologies</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Proven Delivery Practices
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Industry-leading methodologies and practices to ensure successful delivery and operations.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {deliveryMethodologies.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 sm:p-5 md:p-6 shadow-lg hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{method.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">{method.description}</p>
                  </div>
                </div>
                <div className="border-t border-white/30 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Key Practices:</p>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {method.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{practice}</span>
              </li>
            ))}
          </ul>
                </div>
        </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Our Process</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Structured Implementation Approach
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              A proven methodology from discovery to operations, ensuring successful delivery.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {implementationProcess.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg border-2 sm:border-4 border-white">
                  {step.number}
                </div>
                <div className="flex-1 rounded-xl sm:rounded-2xl border-2 border-white/40 bg-gradient-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-xl w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-white/30 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full w-fit border border-white/40">
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
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs bg-white/30 backdrop-blur-md text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/40"
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

      {/* Key Features */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Features</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Reference Accelerators & Operations
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Built-in accelerators and operational practices to ensure reliability, security, and cost efficiency.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-white/30 bg-gradient-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-xl hover:border-white/50 hover:from-white/50 hover:via-white/40 hover:to-white/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    <div className="border-l-4 border-blue-500 bg-white/30 backdrop-blur-md px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-lg">
                      <p className="text-[10px] sm:text-xs font-semibold text-blue-700">{feature.highlight}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Proof</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Platforms Delivering Measurable Impact
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Real results from IT solutions deployed across industries and use cases.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
            {successStories.map((story, index) => {
              const storyImages = [it4, it5, it6];
              return (
              <motion.div
                key={story.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                className="group rounded-xl sm:rounded-2xl border border-white/30 bg-gradient-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-xl overflow-hidden hover:border-white/50 hover:from-white/50 hover:via-white/40 hover:to-white/50 transition-all duration-300"
              >
                <div className="relative h-40 sm:h-48 rounded-lg sm:rounded-xl mb-3 sm:mb-4 overflow-hidden">
                  <SkeletonImage
                    src={storyImages[index]}
                    alt={`${story.client} - ${story.industry}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-blue-600 bg-white/30 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full w-fit border border-white/40">
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
                
                <div className="border-t border-white/30 pt-3 sm:pt-4 mb-3 sm:mb-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {story.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[10px] sm:text-xs text-gray-700 bg-white/30 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-white/30 pt-3 sm:pt-4">
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 mb-6 sm:mb-8 px-2 sm:px-0">
              Let's discuss how our IT solutions can help you modernize platforms, automate processes, and drive business outcomes.
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
              <Link to="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.14)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto rounded-full border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white flex items-center justify-center gap-2"
                >
                  View All Services
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

export default ITSolutions;
