import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Shield, Zap, Globe, Building2, MessageCircle, ArrowRight, Award, FileText, Brain, Network, Layers, Gauge } from 'lucide-react';
import consultingHero from '../../../assets/about-section/consulting.webp';
import SkeletonImage from '../../shared/SkeletonImage';
import BackgroundImage from '../../shared/BackgroundImage';
import consulting12 from '../../../assets/consulting/12.webp';
import consulting13 from '../../../assets/consulting/13.webp';
import consulting14 from '../../../assets/consulting/14.webp';
import consulting15 from '../../../assets/consulting/15.webp';
import consulting16 from '../../../assets/consulting/16.webp';
import consulting17 from '../../../assets/consulting/17.webp';

const consultingServices = [
  {
    title: 'Digital Transformation Strategy',
    icon: Rocket,
    description: 'End-to-end digital transformation roadmaps that align technology investments with business outcomes.',
    deliverables: ['Current state assessment', 'Future state architecture', 'Transformation roadmap', 'ROI modeling'],
  },
  {
    title: 'AI & Machine Learning Strategy',
    icon: Lightbulb,
    description: 'Responsible AI frameworks, use case prioritization, and implementation roadmaps for enterprise AI adoption.',
    deliverables: ['AI readiness assessment', 'Use case portfolio', 'Ethics & governance framework', 'Implementation plan'],
  },
  {
    title: 'Cloud Migration & Modernization',
    icon: Globe,
    description: 'Cloud-native architecture design and migration strategies for legacy system modernization.',
    deliverables: ['Cloud strategy', 'Migration plan', 'Cost optimization', 'Security & compliance'],
  },
  {
    title: 'Product Strategy & Innovation',
    icon: Target,
    description: 'Product discovery, market research, and go-to-market strategies for new digital products.',
    deliverables: ['Market analysis', 'Product roadmap', 'MVP definition', 'Launch strategy'],
  },
  {
    title: 'Data Strategy & Analytics',
    icon: BarChart3,
    description: 'Data governance, analytics platforms, and insights-driven decision-making frameworks.',
    deliverables: ['Data strategy', 'Governance model', 'Analytics platform design', 'KPI framework'],
  },
  {
    title: 'Organizational Change Management',
    icon: Users,
    description: 'Change orchestration, capability building, and adoption strategies for digital initiatives.',
    deliverables: ['Change plan', 'Training curriculum', 'Communication strategy', 'Adoption metrics'],
  },
];

const methodologies = [
  {
    name: 'Design Thinking',
    description: 'Human-centered approach to innovation that integrates user needs, technology feasibility, and business viability.',
    phases: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'],
    icon: Brain,
  },
  {
    name: 'Agile Transformation',
    description: 'Iterative delivery frameworks that enable rapid experimentation and continuous improvement.',
    phases: ['Sprint Planning', 'Daily Standups', 'Sprint Review', 'Retrospective'],
    icon: Zap,
  },
  {
    name: 'Lean Startup',
    description: 'Build-measure-learn cycles that validate assumptions and minimize waste in product development.',
    phases: ['Build MVP', 'Measure Metrics', 'Learn Insights', 'Pivot or Persevere'],
    icon: TrendingUp,
  },
  {
    name: 'DevOps & SRE',
    description: 'Cultural and technical practices that bridge development and operations for faster, more reliable releases.',
    phases: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Observability', 'Incident Response'],
    icon: Network,
  },
];

const consultingProcess = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'Comprehensive analysis of your current state, challenges, opportunities, and strategic objectives.',
    activities: [
      'Stakeholder interviews',
      'Workshop facilitation',
      'Data analysis',
      'Capability assessment',
    ],
    duration: '2-4 weeks',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Co-creation of future-state vision, strategic roadmap, and implementation plan aligned with business goals.',
    activities: [
      'Vision workshops',
      'Scenario planning',
      'Roadmap design',
      'Business case development',
    ],
    duration: '3-6 weeks',
  },
  {
    number: '03',
    title: 'Design & Blueprinting',
    description: 'Detailed design of solutions, operating models, and technical architectures ready for implementation.',
    activities: [
      'Solution design',
      'Service blueprinting',
      'Architecture design',
      'Process mapping',
    ],
    duration: '4-8 weeks',
  },
  {
    number: '04',
    title: 'Pilot & Validation',
    description: 'Rapid prototyping and pilot implementation to validate assumptions and refine solutions.',
    activities: [
      'MVP development',
      'Pilot execution',
      'User testing',
      'Metrics analysis',
    ],
    duration: '6-12 weeks',
  },
  {
    number: '05',
    title: 'Scale & Optimize',
    description: 'Full-scale implementation with continuous optimization, measurement, and improvement.',
    activities: [
      'Rollout planning',
      'Change management',
      'Performance monitoring',
      'Continuous improvement',
    ],
    duration: 'Ongoing',
  },
];

const expertiseAreas = [
  {
    title: 'Financial Services',
    description: 'Regulatory compliance, risk management, and digital banking transformation.',
    icon: Building2,
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Patient experience, clinical workflows, and healthcare data interoperability.',
    icon: Shield,
  },
  {
    title: 'Retail & E-commerce',
    description: 'Omnichannel strategies, personalization, and supply chain optimization.',
    icon: TrendingUp,
  },
  {
    title: 'Manufacturing & Industrial',
    description: 'Industry 4.0, IoT integration, and smart factory transformation.',
    icon: Zap,
  },
  {
    title: 'Energy & Utilities',
    description: 'Smart grid, renewable energy, and sustainability initiatives.',
    icon: Globe,
  },
  {
    title: 'Technology & Software',
    description: 'Platform strategies, SaaS transformation, and developer experience.',
    icon: Rocket,
  },
];

const frameworks = [
  {
    name: 'Business Model Canvas',
    description: 'Visual framework for developing and documenting business models.',
  },
  {
    name: 'Value Proposition Canvas',
    description: 'Tool for designing products and services that customers want.',
  },
  {
    name: 'Wardley Mapping',
    description: 'Strategic mapping technique for understanding competitive landscape.',
  },
  {
    name: 'Cynefin Framework',
    description: 'Decision-making framework for complex and chaotic situations.',
  },
  {
    name: 'OKR Framework',
    description: 'Goal-setting methodology for aligning objectives and key results.',
  },
  {
    name: 'Jobs-to-be-Done',
    description: 'Innovation framework focused on customer jobs and outcomes.',
  },
];

const impactStories = [
  {
    industry: 'Financial Services',
    client: 'Fortune 500 Bank',
    challenge: 'Legacy systems limiting digital innovation and customer experience.',
    solution: 'Digital transformation strategy with cloud migration roadmap and API-first architecture.',
    results: [
      'Significant reduction in risk review time',
      '$2.3B in new lending capacity unlocked',
      '6-month faster time-to-market for new products',
    ],
    metrics: {
      primary: '2.3x',
      label: 'Faster Processing',
    },
  },
  {
    industry: 'Healthcare',
    client: 'Regional Health Network',
    challenge: 'Fragmented patient experience across 42 hospitals and clinics.',
    solution: 'AI governance program and unified service blueprint for virtual care expansion.',
    results: [
      'Near-universal adoption across 42 facilities',
      '6-month implementation timeline',
      'Major reduction in care coordination time',
    ],
    metrics: {
      primary: '42',
      label: 'Facilities',
    },
  },
  {
    industry: 'Energy & Utilities',
    client: 'National Energy Provider',
    challenge: 'Reactive maintenance causing high operational costs and downtime.',
    solution: 'Operational blueprint for predictive maintenance and automation at scale.',
    results: [
      '18M field hours saved annually',
      '$45M in operational cost reduction',
      'Near-perfect uptime achieved',
    ],
    metrics: {
      primary: '18M',
      label: 'Hours Saved',
    },
  },
];

const deliverables = [
  {
    category: 'Strategic Documents',
    items: [
      'Digital transformation roadmap',
      'AI strategy and governance framework',
      'Cloud migration strategy',
      'Product strategy and roadmap',
      'Data strategy and governance model',
    ],
  },
  {
    category: 'Design Artifacts',
    items: [
      'Service blueprints',
      'Customer journey maps',
      'Technical architecture diagrams',
      'Process flow diagrams',
      'User experience wireframes',
    ],
  },
  {
    category: 'Implementation Plans',
    items: [
      'Project plans and timelines',
      'Resource requirements',
      'Risk mitigation strategies',
      'Change management plans',
      'Success metrics and KPIs',
    ],
  },
];

const Consulting = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 border-b border-gray-100">
        <BackgroundImage
          src={consultingHero}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-slate-900/75"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-blue-300 mb-4">
              Strategic Consulting
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Strategy That Moves Seamlessly Into Execution
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Engagements are staffed with strategists, researchers, data scientists, and change partners who work side-by-side with your leaders to transform vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">What we deliver</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Comprehensive Consulting Services
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we deliver end-to-end consulting solutions that drive measurable business outcomes.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {consultingServices.map((service, index) => {
              const serviceImages = [consulting16, consulting17];
              const hasImage = index < 2;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
                >
                  {hasImage && (
                    <div className="relative h-32 mb-4 rounded-md overflow-hidden">
                      <SkeletonImage
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 mb-2">Key Deliverables:</p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
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

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">Our Process</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Partner With You
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              A proven methodology that takes you from discovery to scale, ensuring every step delivers value.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              <div className="space-y-8">
                {consultingProcess.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-md relative z-10">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg border border-gray-200 p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {step.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[10px] bg-white text-gray-700 px-2 py-1 rounded border border-gray-200"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" />
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">Our Methodologies</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Proven Frameworks for Success
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              We leverage industry-leading methodologies tailored to your unique challenges and goals.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{method.name}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 mb-2">Key Phases:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {method.phases.map((phase, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-gray-50 text-gray-700 px-2 py-1 rounded border border-gray-200"
                      >
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">Industry Expertise</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Deep Domain Knowledge Across Industries
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Our consultants bring specialized expertise from years of working with leading organizations in your industry.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-lg border border-gray-200 p-5 text-center hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <area.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">Strategic Tools</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Industry-Leading Frameworks
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              We apply proven strategic frameworks to help you make better decisions and drive innovation.
            </p>
          </div>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-white rounded-md border border-gray-200 p-4 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <h4 className="text-sm font-semibold text-gray-900 mb-1.5">{framework.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">Impact</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Proof From The Field
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Real results from real engagements across industries and use cases.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            {impactStories.map((story, index) => {
              const storyImages = [consulting12, consulting13, consulting14];
              return (
                <motion.div
                  key={story.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative h-36 rounded-md mb-4 overflow-hidden">
                    <SkeletonImage
                      src={storyImages[index]}
                      alt={`${story.client} - ${story.industry}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-medium uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {story.industry}
                    </span>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-blue-600">{story.metrics.primary}</div>
                      <div className="text-[10px] text-gray-500">{story.metrics.label}</div>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{story.client}</h3>
                  <p className="text-xs text-gray-600 mb-2">
                    <span className="font-medium">Challenge:</span> {story.challenge}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    <span className="font-medium">Solution:</span> {story.solution}
                  </p>

                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[10px] font-medium text-gray-500 mb-2">Key Results:</p>
                    <ul className="space-y-1.5">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">What You Get</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Comprehensive Deliverables
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Every engagement includes detailed documentation, strategic artifacts, and implementation roadmaps.
            </p>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {deliverables.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-blue-100 p-5"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <ArrowRight className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <SkeletonImage
                src={consulting15}
                alt="Strategy Meets Execution Excellence"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded mb-4">
                Why TechHive Consulting
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Strategy Meets Execution Excellence
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Our consulting approach combines strategic thinking with hands-on execution. We don't just deliver reports—we work alongside your team to implement solutions that drive real business value.
              </p>
              <div className="space-y-3">
                {[
                  'Cross-functional teams of strategists, designers, and technologists',
                  'Proven methodologies adapted to your unique context',
                  'Measurable outcomes tied to business KPIs',
                  'Ongoing support from strategy to scale',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="relative py-16 overflow-hidden bg-slate-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our consulting services can help you achieve your strategic objectives and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto rounded-md bg-white px-6 py-2.5 text-sm font-medium text-slate-900 shadow-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Schedule a Consultation
                </motion.button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto rounded-md border-2 border-white px-6 py-2.5 text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Consulting;
