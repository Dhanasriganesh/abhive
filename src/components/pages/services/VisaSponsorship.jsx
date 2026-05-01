import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, FileText, GraduationCap, Globe, Users, Award, Shield, Briefcase, MessageCircle } from 'lucide-react';
import visaSponsorBg from '../../../assets/about-section/vs.webp';
import h1bImg from '../../../assets/about-section/h1b.webp';
import passportImg from '../../../assets/about-section/passport.webp';
import usaImg from '../../../assets/about-section/usa.webp';
import studentVisaImg from '../../../assets/about-section/US-Student-Visa.webp';
import greencardImg from '../../../assets/about-section/greencard.jpg';
import stemImg from '../../../assets/about-section/stem.webp';
import cptImg from '../../../assets/about-section/cpt.webp';
import tnImg from '../../../assets/about-section/tn.webp';
import SkeletonImage from '../../shared/SkeletonImage';
import BackgroundImage from '../../shared/BackgroundImage';

const visaTypes = [
  {
    title: 'H1B Visas',
    icon: Building2,
    body: 'Specialty occupation visas for skilled professionals. TechHive provides comprehensive H1B sponsorship and processing support.',
    support: '✓ Full support by TechHive',
    image: h1bImg,
  },
  {
    title: 'F1 Visa (Student Visas)',
    icon: GraduationCap,
    body: 'Academic student visas for educational purposes. Our team assists with F1 visa applications and status maintenance.',
    support: '✓ Full support by TechHive',
    image: studentVisaImg,
  },
  {
    title: 'Optional Practical Training (OPT/OPT-STEM)',
    icon: Award,
    body: 'Work authorization for F1 students in STEM fields. We help extend OPT visas for up to 24 months with E-Verify certification.',
    support: '✓ Full support by TechHive',
    image: stemImg,
  },
  {
    title: 'Curricular Practical Training (CPT)',
    icon: FileText,
    body: 'Work authorization as part of academic curriculum. TechHive facilitates CPT authorization for eligible students.',
    support: '✓ Full support by TechHive',
    image: cptImg,
  },
  {
    title: 'TN1, TN2',
    icon: Globe,
    body: 'NAFTA professional visas for Canadian and Mexican citizens. Complete sponsorship and processing support provided by TechHive.',
    support: '✓ Full support by TechHive',
    image: tnImg,
  },
  {
    title: 'Green Card Process (EB-2/EB-3)',
    icon: Users,
    body: 'Permanent residency sponsorship provided by TechHive. Complete support for EB-2 and EB-3 employment-based green card applications.',
    support: '✓ Full support by TechHive Immigration Team',
    image: greencardImg,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    body: 'We assess your visa status and career goals to determine the best sponsorship path forward.',
  },
  {
    number: '02',
    title: 'Documentation Review',
    body: 'Our team reviews all necessary documentation and ensures USCIS compliance requirements are met.',
  },
  {
    number: '03',
    title: 'Client Matching & Sponsorship by TechHive',
    body: 'TechHive directly matches you with suitable clients and provides visa sponsorship. Our immigration team handles all sponsorship documentation and ensures TechHive sponsors your visa for the right opportunity.',
    badge: 'TechHive SPONSORSHIP',
  },
  {
    number: '04',
    title: 'Application Processing',
    body: 'We handle the entire visa application process, keeping you informed at every step.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    body: 'Continuous support throughout your engagement and assistance with future career moves.',
  },
];

const experienceBenefits = [
  {
    title: 'E-Verify Certification',
    icon: Shield,
    body: 'Our e-verify certification offers students in STEM majors the potential to extend their OPT visa for 24 months. TechHive handles all certification processes.',
    support: '✓ 24-month OPT extension support',
  },
  {
    title: 'Visa Issue Resolution',
    icon: FileText,
    body: 'Our immigration specialists apply their deep subject matter expertise to quickly address and resolve even the most complex visa issues.',
    support: '✓ Expert problem resolution',
  },
  {
    title: 'Direct Client Relationships',
    icon: Users,
    body: 'TechHive directly markets candidates to end clients, alleviating third-party channel issues and ensuring smooth processes.',
    support: '✓ Direct client connections',
  },
  {
    title: 'Comprehensive Green Card Support',
    icon: Award,
    body: 'TechHive provides full support for your green card journey. We facilitate EB-2 and EB-3 employment-based applications, handle PERM certification, and I-140 petitions.',
    support: '✓ EB-2/EB-3, PERM, I-140 support',
  },
  {
    title: 'Consultant Redeployment',
    icon: Briefcase,
    body: 'Before your current assignment ends, our redeployment team is already working to find your next opportunity.',
    support: '✓ Proactive opportunity matching',
  },
  {
    title: 'Industry Recognition',
    icon: Building2,
    body: "TechHive's client portfolio includes partnerships with Fortune 500 companies across multiple industries. Trusted by top employers.",
    support: '✓ Fortune 500 partnerships',
  },
];

const VisaSponsorship = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero */}
      <BackgroundImage
        src={visaSponsorBg}
        data-header-theme="hero"
        className="relative pt-32 pb-16"
      >
        <motion.section
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container relative mx-auto px-4 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                TechHive Immigration Team - Your Trusted Visa Sponsorship Partner
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Navigate your visa sponsorship journey with confidence through{' '}
                <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent font-semibold italic">
                  TechHive&apos;s dedicated in-house immigration team
                </span>
                . Our comprehensive immigration support services are provided directly by TechHive, ensuring personalized attention and seamless sponsorship processes.
              </p>
              <div className="mt-8 inline-block rounded-lg border-2 border-blue-400 bg-gradient-to-r from-blue-600/30 to-red-600/30 backdrop-blur-sm px-6 py-4">
                <p className="text-base sm:text-lg font-semibold text-white">
                  ✨ Visa Sponsorship Provided Directly by TechHive - No Third-Party Intermediaries
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </BackgroundImage>

      {/* Our Immigration Team - With Image */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <SkeletonImage
                src={passportImg}
                alt="Immigration Team"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-blue-700">
                  Expert Immigration Support
                </span>
              </div>
            </motion.div>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border-2 border-blue-300 bg-gradient-to-br from-blue-100 via-red-50 to-blue-50 p-8 sm:p-10 text-center lg:text-left shadow-xl"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-red-500 px-5 py-2 text-sm font-bold text-white uppercase tracking-widest shadow-md">
                TechHive IMMIGRATION TEAM
              </span>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Our Immigration Team is Here to Help You Every Step of the Way
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                Connect directly with TechHive&apos;s immigration specialists. Our in-house team provides personalized support throughout your visa sponsorship journey.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 16px 32px rgba(37,99,235,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-red-500 px-8 py-3 text-base font-semibold text-white shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact TechHive Immigration Team
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best-In-Class section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-red-500 px-5 py-2 text-sm font-bold text-white uppercase tracking-widest shadow-md">
                TechHive IMMIGRATION TEAM
              </span>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Best-In-Class Visa Sponsorship Solutions by TechHive
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                As the global workforce rapidly evolves, choosing the right partner for your visa sponsorship and employment needs is crucial.{' '}
                <span className="font-semibold text-blue-600 underline decoration-red-400">TechHive&apos;s internal immigration team</span>{' '}
                guides you through each step of the visa sponsorship process and provides tailored solutions to international consultants facing immigration challenges.
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                As a leading AI technology company, we specialize in helping our consultants find meaningful work with top companies nationwide, including Fortune 500 enterprises.
              </p>

              {/* Sponsorship info card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50/80 p-6 text-left shadow-md"
              >
                <p className="text-base sm:text-lg font-bold text-blue-700">
                  ✓ Visa Sponsorship Provided Directly by TechHive
                </p>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our immigration team is an integral part of TechHive, ensuring direct communication, faster processing, and dedicated support throughout your visa journey.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={h1bImg}
                  alt="H1B Visa Sponsorship"
                  className="w-full h-72 lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Direct Sponsorship</p>
                    <p className="text-xs text-gray-500">No Third Parties</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect - Visa Types with Icons */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What to Expect
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our subject matter expertise and strict adherence to the United States Citizenship and Immigration Services (USCIS) regulations enables us to secure visa sponsorship for multiple visa types, including:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}
                className="rounded-2xl bg-white shadow-lg text-left border border-gray-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={visa.image}
                    alt={visa.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <visa.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{visa.title}</h3>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    {visa.body}
                  </p>
                  <div className="mt-4 border-l-4 border-blue-500 bg-blue-50 px-3 py-2 rounded-r-lg">
                    <p className="text-sm font-semibold text-blue-700">{visa.support}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Sponsorship Process - Timeline Style */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Visa Sponsorship Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our streamlined process ensures a smooth visa sponsorship experience from start to finish.
          </p>
          <div className="mt-12 space-y-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex items-start gap-6 ${index % 2 === 1 ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                {/* Number circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                  {step.number}
                </div>
                {/* Content card */}
                <div className={`flex-1 rounded-2xl border-2 border-blue-300 bg-blue-50/70 p-6 shadow-md ${index % 2 === 1 ? 'mr-0' : 'ml-0'}`}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-blue-700">{step.title}</h3>
                    {step.badge && (
                      <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-red-500 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Benefits */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            With TechHive, You Can Expect an Exceptional Sponsorship Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our comprehensive benefits package ensures you have the support you need throughout your visa sponsorship journey.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experienceBenefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.1)' }}
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-red-50 p-6 shadow-lg text-left border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-200 to-red-200 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {item.body}
                </p>
                <div className="mt-4 border-l-4 border-blue-500 bg-white px-3 py-2 rounded-r-lg">
                  <p className="text-sm font-semibold text-blue-700">{item.support}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image */}
        <BackgroundImage
          src={usaImg}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-red-900/80 to-red-900/85" />

        <div className="container relative mx-auto px-4 lg:px-12 text-center text-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Start Your Visa Sponsorship Journey?
            </h2>
            <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto text-white/90">
              Let our experienced team guide you through the process and help you achieve your career goals in the United States.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.06, boxShadow: '0 20px 45px rgba(15,23,42,0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-700 shadow-lg"
                >
                  Contact Our Team
                </motion.button>
              </Link>
              <Link to="/careers">
                <motion.button
                  whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.14)' }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white"
                >
                  Submit Your Resume
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default VisaSponsorship;
