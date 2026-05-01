import React from 'react';
import CareersHero from './careers/CareersHero';
import BenefitsSection from './careers/BenefitsSection';
import CultureSection from './careers/CultureSection';
import ApplicationFormSection from './careers/ApplicationFormSection';

const Careers = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.08),transparent_34%),radial-gradient(circle_at_100%_20%,rgba(239,68,68,0.08),transparent_36%)]" />
      <div className="relative z-10">
        <CareersHero />
        <ApplicationFormSection />
        <BenefitsSection />
        <CultureSection />
      </div>
    </div>
  );
};

export default Careers;
