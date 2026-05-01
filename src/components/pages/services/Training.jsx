import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Target, Zap, TrendingUp, CheckCircle2, Clock, Globe, Code, Database, Cloud, Brain, Shield, Rocket, MessageCircle, ArrowRight, GraduationCap, Laptop, PlayCircle, FileText, Layers, Network, BarChart3, Cpu, Server, Lock, Monitor, Building2 } from 'lucide-react';
import trainingHero from '../../../assets/about-section/training.webp';
import SkeletonImage from '../../shared/SkeletonImage';
import BackgroundImage from '../../shared/BackgroundImage';
import training24 from '../../../assets/training/24.webp';
import training25 from '../../../assets/training/25.webp';
import training26 from '../../../assets/training/26.webp';
import training27 from '../../../assets/training/27.webp';
import training28 from '../../../assets/training/28.webp';
import training29 from '../../../assets/training/29.webp';

const trainingTracks = [
  {
    title: 'Leader Immersion',
    icon: Users,
    description: 'Executive labs and scenario planning sessions that align roadmaps and investment theses.',
    duration: '2-5 days',
    format: 'In-person or Virtual',
    focus: ['Strategic planning', 'Technology roadmaps', 'Investment decisions', 'Digital transformation'],
    outcomes: ['Clear strategic vision', 'Aligned technology investments', 'Executive buy-in', 'Roadmap clarity'],
  },
  {
    title: 'Maker Studios',
    icon: Code,
    description: 'Hands-on sprints for engineers, designers, and data scientists using live codebases and datasets.',
    duration: '1-4 weeks',
    format: 'Hands-on Labs',
    focus: ['Practical coding', 'Real-world projects', 'Best practices', 'Tool mastery'],
    outcomes: ['Production-ready skills', 'Portfolio projects', 'Team collaboration', 'Industry standards'],
  },
  {
    title: 'Operator Enablement',
    icon: Server,
    description: 'Change, support, and success teams learn to run and scale new products via playbooks and simulations.',
    duration: '1-2 weeks',
    format: 'Workshops & Simulations',
    focus: ['Operations', 'Support processes', 'Scaling strategies', 'Incident management'],
    outcomes: ['Operational excellence', 'Reduced downtime', 'Improved support', 'Scalable processes'],
  },
  {
    title: 'Certification Pathways',
    icon: Award,
    description: 'Structured programs leading to industry-recognized certifications in cloud, security, and development.',
    duration: '8-16 weeks',
    format: 'Blended Learning',
    focus: ['Certification prep', 'Exam readiness', 'Industry standards', 'Career advancement'],
    outcomes: ['Industry certifications', 'Career growth', 'Market recognition', 'Skill validation'],
  },
];

const programmingLanguages = [
  {
    category: 'Object-Oriented Languages',
    technologies: [
      { name: 'Java', icon: Code, level: 'Beginner to Advanced', duration: '4-12 weeks' },
      { name: 'Python', icon: Code, level: 'Beginner to Advanced', duration: '4-12 weeks' },
      { name: 'C++', icon: Code, level: 'Intermediate to Advanced', duration: '6-16 weeks' },
      { name: 'C#', icon: Code, level: 'Beginner to Advanced', duration: '4-12 weeks' },
      { name: 'TypeScript', icon: Code, level: 'Beginner to Advanced', duration: '3-8 weeks' },
    ],
  },
  {
    category: 'Web Development',
    technologies: [
      { name: 'JavaScript', icon: Code, level: 'Beginner to Advanced', duration: '4-10 weeks' },
      { name: 'React', icon: Code, level: 'Beginner to Advanced', duration: '4-10 weeks' },
      { name: 'Angular', icon: Code, level: 'Intermediate to Advanced', duration: '6-12 weeks' },
      { name: 'Vue.js', icon: Code, level: 'Beginner to Advanced', duration: '4-10 weeks' },
      { name: 'Node.js', icon: Server, level: 'Beginner to Advanced', duration: '4-12 weeks' },
    ],
  },
  {
    category: 'Backend & Frameworks',
    technologies: [
      { name: 'Spring Boot', icon: Server, level: 'Intermediate to Advanced', duration: '6-12 weeks' },
      { name: 'Django', icon: Server, level: 'Beginner to Advanced', duration: '4-10 weeks' },
      { name: 'Flask', icon: Server, level: 'Beginner to Intermediate', duration: '3-8 weeks' },
      { name: 'Express.js', icon: Server, level: 'Beginner to Advanced', duration: '4-10 weeks' },
      { name: '.NET Core', icon: Server, level: 'Intermediate to Advanced', duration: '6-12 weeks' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', icon: Cloud, level: 'Beginner to Expert', duration: '6-16 weeks' },
      { name: 'Azure', icon: Cloud, level: 'Beginner to Expert', duration: '6-16 weeks' },
      { name: 'Google Cloud', icon: Cloud, level: 'Beginner to Expert', duration: '6-16 weeks' },
      { name: 'Docker', icon: Server, level: 'Beginner to Advanced', duration: '2-6 weeks' },
      { name: 'Kubernetes', icon: Server, level: 'Intermediate to Advanced', duration: '4-10 weeks' },
    ],
  },
  {
    category: 'Data & Analytics',
    technologies: [
      { name: 'Data Analytics', icon: BarChart3, level: 'Beginner to Advanced', duration: '6-14 weeks' },
      { name: 'Big Data', icon: Database, level: 'Intermediate to Advanced', duration: '8-16 weeks' },
      { name: 'Machine Learning', icon: Brain, level: 'Intermediate to Advanced', duration: '8-16 weeks' },
      { name: 'Data Science', icon: BarChart3, level: 'Intermediate to Advanced', duration: '10-20 weeks' },
      { name: 'SQL & NoSQL', icon: Database, level: 'Beginner to Advanced', duration: '4-10 weeks' },
    ],
  },
  {
    category: 'Security & Compliance',
    technologies: [
      { name: 'Cybersecurity', icon: Shield, level: 'Beginner to Expert', duration: '8-20 weeks' },
      { name: 'DevSecOps', icon: Lock, level: 'Intermediate to Advanced', duration: '6-12 weeks' },
      { name: 'Cloud Security', icon: Shield, level: 'Intermediate to Advanced', duration: '6-14 weeks' },
      { name: 'Ethical Hacking', icon: Lock, level: 'Intermediate to Advanced', duration: '8-16 weeks' },
    ],
  },
];

const curriculumAreas = [
  {
    title: 'AI & Machine Learning',
    description: 'From AI literacy to advanced GenAI engineering, covering neural networks, deep learning, and responsible AI practices.',
    topics: [
      'AI fundamentals and ethics',
      'Machine learning algorithms',
      'Deep learning frameworks',
      'Generative AI and LLMs',
      'MLOps and model deployment',
      'Responsible AI governance',
    ],
    icon: Brain,
  },
  {
    title: 'Product & Growth',
    description: 'Product discovery, experimentation frameworks, and growth strategies for digital products.',
    topics: [
      'Product discovery methods',
      'A/B testing and experimentation',
      'Growth hacking techniques',
      'User research and validation',
      'Product metrics and analytics',
      'Go-to-market strategies',
    ],
    icon: TrendingUp,
  },
  {
    title: 'DevSecOps & SRE',
    description: 'Platform automation, site reliability engineering, and security integration in DevOps practices.',
    topics: [
      'CI/CD pipeline design',
      'Infrastructure as Code',
      'Monitoring and observability',
      'Incident response and SRE',
      'Security scanning and compliance',
      'Platform reliability patterns',
    ],
    icon: Zap,
  },
  {
    title: 'Customer Experience',
    description: 'Customer experience research, service design, and UX/UI best practices for digital products.',
    topics: [
      'User experience design',
      'Service design methodologies',
      'Customer journey mapping',
      'Usability testing',
      'Design systems',
      'Accessibility standards',
    ],
    icon: Monitor,
  },
  {
    title: 'Data Engineering',
    description: 'Building modern data platforms, data pipelines, and analytics infrastructure.',
    topics: [
      'Data architecture patterns',
      'ETL/ELT pipelines',
      'Data warehousing',
      'Real-time data processing',
      'Data quality and governance',
      'Data lake architectures',
    ],
    icon: Database,
  },
  {
    title: 'Cloud Architecture',
    description: 'Designing scalable, secure, and cost-effective cloud-native solutions.',
    topics: [
      'Cloud architecture patterns',
      'Microservices design',
      'Serverless computing',
      'Container orchestration',
      'Multi-cloud strategies',
      'Cost optimization',
    ],
    icon: Cloud,
  },
];

const trainingMethodologies = [
  {
    name: 'Hands-On Labs',
    description: 'Interactive coding sessions with real-world projects and live codebases.',
    icon: Laptop,
    benefits: ['Practical experience', 'Real-world scenarios', 'Immediate feedback', 'Portfolio building'],
  },
  {
    name: 'Instructor-Led Training',
    description: 'Live sessions with expert instructors for interactive learning and Q&A.',
    icon: Users,
    benefits: ['Expert guidance', 'Real-time support', 'Peer interaction', 'Customized pace'],
  },
  {
    name: 'Self-Paced Learning',
    description: 'Flexible online courses with video content, exercises, and assessments.',
    icon: PlayCircle,
    benefits: ['Learn at your pace', '24/7 access', 'Repeatable content', 'Cost-effective'],
  },
  {
    name: 'Bootcamp Programs',
    description: 'Intensive, immersive programs for rapid skill development and career transition.',
    icon: Rocket,
    benefits: ['Fast-track learning', 'Immersive experience', 'Career support', 'Job placement'],
  },
  {
    name: 'Corporate Training',
    description: 'Customized programs tailored to your organization\'s specific needs and goals.',
    icon: Building2,
    benefits: ['Customized curriculum', 'Team alignment', 'On-site or virtual', 'Scalable delivery'],
  },
  {
    name: 'Certification Prep',
    description: 'Structured programs designed to prepare you for industry-recognized certifications.',
    icon: Award,
    benefits: ['Exam readiness', 'Practice tests', 'Study materials', 'Pass guarantee'],
  },
];

const learningPaths = [
  {
    path: 'Full-Stack Developer',
    duration: '20-30 weeks',
    level: 'Beginner to Advanced',
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
    description: 'Complete journey from frontend to backend development with modern frameworks.',
    icon: Code,
  },
  {
    path: 'Cloud Engineer',
    duration: '16-24 weeks',
    level: 'Intermediate to Expert',
    technologies: ['AWS/Azure/GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
    description: 'Master cloud platforms, containerization, and infrastructure automation.',
    icon: Cloud,
  },
  {
    path: 'Data Scientist',
    duration: '24-36 weeks',
    level: 'Intermediate to Advanced',
    technologies: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistics', 'Big Data'],
    description: 'Comprehensive data science program covering analytics, ML, and AI.',
    icon: BarChart3,
  },
  {
    path: 'DevOps Engineer',
    duration: '18-26 weeks',
    level: 'Intermediate to Advanced',
    technologies: ['Linux', 'Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Cloud Platforms'],
    description: 'End-to-end DevOps training from CI/CD to infrastructure management.',
    icon: Zap,
  },
  {
    path: 'Cybersecurity Specialist',
    duration: '20-32 weeks',
    level: 'Intermediate to Expert',
    technologies: ['Network Security', 'Penetration Testing', 'Security Tools', 'Compliance', 'Incident Response'],
    description: 'Comprehensive security training covering defense, offense, and compliance.',
    icon: Shield,
  },
  {
    path: 'AI/ML Engineer',
    duration: '22-34 weeks',
    level: 'Intermediate to Advanced',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Deep Learning', 'NLP'],
    description: 'Advanced AI and machine learning program with hands-on projects.',
    icon: Brain,
  },
];

const certificationPrograms = [
  {
    provider: 'AWS',
    certifications: [
      'AWS Certified Cloud Practitioner',
      'AWS Certified Solutions Architect',
      'AWS Certified Developer',
      'AWS Certified DevOps Engineer',
      'AWS Certified Security Specialist',
    ],
    icon: Cloud,
  },
  {
    provider: 'Microsoft Azure',
    certifications: [
      'Azure Fundamentals',
      'Azure Administrator',
      'Azure Developer',
      'Azure Solutions Architect',
      'Azure Security Engineer',
    ],
    icon: Cloud,
  },
  {
    provider: 'Google Cloud',
    certifications: [
      'Google Cloud Digital Leader',
      'Cloud Architect',
      'Cloud Developer',
      'Cloud DevOps Engineer',
      'Cloud Security Engineer',
    ],
    icon: Cloud,
  },
  {
    provider: 'Security',
    certifications: [
      'CompTIA Security+',
      'CISSP',
      'CEH (Certified Ethical Hacker)',
      'CISM',
      'Security+',
    ],
    icon: Shield,
  },
  {
    provider: 'Development',
    certifications: [
      'Oracle Java Certification',
      'Microsoft .NET Certification',
      'Red Hat OpenShift',
      'Kubernetes Administrator',
      'Docker Certified Associate',
    ],
    icon: Code,
  },
];

const trainingProcess = [
  {
    number: '01',
    title: 'Needs Assessment',
    description: 'Evaluate current skills, identify gaps, and define learning objectives.',
    activities: [
      'Skill gap analysis',
      'Learning objectives definition',
      'Audience profiling',
      'Resource planning',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '02',
    title: 'Curriculum Design',
    description: 'Develop customized curriculum aligned with your goals and industry standards.',
    activities: [
      'Content development',
      'Learning path creation',
      'Assessment design',
      'Material preparation',
    ],
    duration: '2-4 weeks',
  },
  {
    number: '03',
    title: 'Training Delivery',
    description: 'Execute training through chosen methodology with expert instructors.',
    activities: [
      'Instructor-led sessions',
      'Hands-on labs',
      'Project work',
      'Progress tracking',
    ],
    duration: 'Variable',
  },
  {
    number: '04',
    title: 'Assessment & Certification',
    description: 'Evaluate learning outcomes and provide certifications where applicable.',
    activities: [
      'Skills assessment',
      'Project evaluation',
      'Certification exams',
      'Performance reviews',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'Provide continued learning resources, mentorship, and career support.',
    activities: [
      'Post-training resources',
      'Mentorship programs',
      'Career guidance',
      'Community access',
    ],
    duration: 'Ongoing',
  },
];

const successStories = [
  {
    industry: 'Banking',
    client: 'National Bank',
    challenge: 'Need to upskill product and engineering leaders in responsible AI practices and accelerate technology adoption.',
    solution: 'Delivered comprehensive AI literacy program with hands-on labs and executive workshops.',
    results: [
      'Upskilled 600+ product and engineering leaders',
      'Significant acceleration in AI project approvals',
      'Enhanced responsible AI governance',
      'Improved cross-functional collaboration',
    ],
    metrics: {
      primary: '600+',
      label: 'Leaders Trained',
    },
  },
  {
    industry: 'Healthcare',
    client: 'Healthcare System',
    challenge: 'Low adoption of virtual care tools across multiple hospital locations.',
    solution: 'Created clinician-facing academy with role-specific training and change management support.',
    results: [
      'Widespread adoption of virtual care tools',
      'Training delivered across 42 hospitals',
      'Improved clinician confidence',
      'Enhanced patient care delivery',
    ],
    metrics: {
      primary: '42',
      label: 'Hospitals',
    },
  },
  {
    industry: 'Retail',
    client: 'Retail Group',
    challenge: 'Need to enable store associates with AI copilots and modern technology tools.',
    solution: 'Developed comprehensive store operations training program with hands-on AI copilot workshops.',
    results: [
      'Enabled 20,000+ store associates',
      'Significant operational cost reduction',
      'Improved customer service',
      'Enhanced employee productivity',
    ],
    metrics: {
      primary: '20K+',
      label: 'Associates Trained',
    },
  },
];

const enablementFeatures = [
  {
    title: 'Skill Baseline & Tracking',
    description: 'We baseline skills before kickoff and monitor performance after launch, providing leaders with dashboards that tie capability growth to business impact.',
    icon: BarChart3,
    highlight: 'Measurable skill improvement',
  },
  {
    title: 'Custom Learning Paths',
    description: 'Tailored curricula designed for your specific roles, technologies, and business objectives.',
    icon: Target,
    highlight: 'Role-specific training',
  },
  {
    title: 'Hands-On Projects',
    description: 'Real-world projects using live codebases and datasets to ensure practical, applicable learning.',
    icon: Laptop,
    highlight: 'Portfolio-ready projects',
  },
  {
    title: 'Expert Instructors',
    description: 'Industry practitioners with years of experience teaching cutting-edge technologies and best practices.',
    icon: Users,
    highlight: 'Industry experts',
  },
  {
    title: 'Certification Support',
    description: 'Comprehensive preparation for industry-recognized certifications with practice exams and study materials.',
    icon: Award,
    highlight: 'Certification pathways',
  },
  {
    title: 'Ongoing Mentorship',
    description: 'Continued support through mentorship programs, community access, and career guidance.',
    icon: MessageCircle,
    highlight: 'Lifelong learning support',
  },
];

const Training = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
        <BackgroundImage
        src={trainingHero}
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
              Training & Development
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
              Upskill Teams with Hands-On Academies
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              Capability academies pair live instruction with battle-tested accelerators so teams internalize modern delivery disciplines and AI best practices.
            </p>
          </motion.div>
        </div>
    </section>

      {/* Training Tracks */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Training Tracks</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Tailored Journeys for Every Role
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              From executive leadership to hands-on makers, we design training programs that fit your needs.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
            {trainingTracks.map((track, index) => {
              const trackImages = [training27, training28, training29];
              const hasImage = index < 3;
              return (
              <motion.div
                key={track.title}
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
                      src={trackImages[index]}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <track.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {track.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                      {track.duration}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-600 bg-gray-50 px-2 sm:px-3 py-1 rounded-full">
                      {track.format}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Focus Areas:</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {track.focus.map((item, idx) => (
                        <span key={idx} className="text-[10px] sm:text-xs text-gray-700 bg-gray-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Outcomes:</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {track.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
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

      {/* Programming Languages & Technologies */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Technologies</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Comprehensive Technology Training
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              From programming languages to cloud platforms, we cover all major technologies and frameworks.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
            {programmingLanguages.map((category, catIndex) => {
              const CategoryIcon = category.technologies[0]?.icon || Code;
              return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-lg"
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
                      className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50 to-red-50 hover:from-blue-100 hover:to-red-100 transition-colors border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm sm:text-base font-bold text-gray-900">{tech.name}</h4>
                        <TechIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500" />
                          <span className="text-[10px] sm:text-xs text-gray-600">{tech.level}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500" />
                          <span className="text-[10px] sm:text-xs text-gray-600">{tech.duration}</span>
                        </div>
                      </div>
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

      {/* Curriculum Areas */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Curriculum</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Always-On Learning Ecosystems
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Comprehensive curricula covering the latest technologies and best practices.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {curriculumAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-red-50 p-4 sm:p-5 md:p-6"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">{area.description}</p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Key Topics:</p>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {area.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
              </li>
            ))}
          </ul>
                </div>
        </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Learning Paths</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Structured Career Pathways
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Complete learning journeys designed to take you from beginner to expert in your chosen field.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                className="group rounded-xl sm:rounded-2xl border-2 border-blue-100 bg-white p-4 sm:p-5 md:p-6"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <path.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{path.path}</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                      <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 sm:py-1 rounded-full">
                        {path.duration}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-600 bg-gray-50 px-2 py-0.5 sm:py-1 rounded-full">
                        {path.level}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">{path.description}</p>
                <div className="border-t border-gray-100 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Technologies Covered:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {path.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[10px] sm:text-xs text-gray-700 bg-gray-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
        </motion.div>
            ))}
          </div>
      </div>
    </section>

      {/* Training Methodologies */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Methodologies</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Flexible Training Delivery Options
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Choose the learning format that works best for your team and schedule.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {trainingMethodologies.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-red-50 p-4 sm:p-5 md:p-6"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">{method.description}</p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2">Benefits:</p>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Certifications</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Industry-Recognized Certifications
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Prepare for and earn certifications from leading technology providers and industry bodies.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {certificationPrograms.map((program, index) => (
              <motion.div
                key={program.provider}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 md:p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{program.provider}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-2.5">
                  {program.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-700">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Training Process */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Our Process</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              How We Deliver Training Excellence
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              A structured approach from needs assessment to ongoing support.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {trainingProcess.map((step, index) => (
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

      {/* Enablement Features */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Enablement</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Measurable Uplift & Support
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Comprehensive enablement features that ensure lasting impact and continuous growth.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {enablementFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="group rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-red-50 p-4 sm:p-5 md:p-6 shadow-lg"
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
                    <div className="border-l-4 border-blue-500 bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-lg">
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Outcomes</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
              Academies That Change How Teams Work
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Real results from training programs across industries and use cases.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
            {successStories.map((story, index) => {
              const storyImages = [training24, training25, training26];
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
              Ready to Upskill Your Team?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 mb-6 sm:mb-8 px-2 sm:px-0">
              Let's discuss how our training programs can help your team master the latest technologies and drive business impact.
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
                  View Training Programs
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

export default Training;
