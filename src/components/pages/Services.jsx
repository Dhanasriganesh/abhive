import React from 'react';
import ServicesHero from './services/ServicesHero';
import CapabilityMatrixSection from './services/CapabilityMatrixSection';
import EngagementModelsSection from './services/EngagementModelsSection';
import ProcessSection from './services/ProcessSection';
import CaseStudiesSection from './services/CaseStudiesSection';
import ServicesCTASection from './services/ServicesCTASection';
import ServiceDetailSections from './services/ServiceDetailSections';

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.08),transparent_34%),radial-gradient(circle_at_100%_16%,rgba(239,68,68,0.08),transparent_36%)]" />
      <div className="relative z-10">
        <ServicesHero />
        <ServiceDetailSections />
        <CapabilityMatrixSection />
        <EngagementModelsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ServicesCTASection />
      </div>
    </div>
  );
};

export default Services;
