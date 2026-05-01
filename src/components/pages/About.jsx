import React from 'react';
import AboutHero from './about/AboutHero';
import MissionVisionSection from './about/MissionVisionSection';
import CoreValuesSection from './about/CoreValuesSection';
import CultureImpactSection from './about/CultureImpactSection';
import AboutCTASection from './about/AboutCTASection';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(37,99,235,0.08),transparent_35%),radial-gradient(circle_at_95%_20%,rgba(239,68,68,0.08),transparent_35%)]" />
      <div className="relative z-10">
        <AboutHero />
        <MissionVisionSection />
        <CoreValuesSection />
        <CultureImpactSection />
        <AboutCTASection />
      </div>
    </div>
  );
};

export default About;
