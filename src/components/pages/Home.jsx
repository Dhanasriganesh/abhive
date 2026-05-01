import React from 'react';
import HeroSection from './sections/HeroSection';
import StrategicHighlightsSection from './sections/StrategicHighlightsSection';
import ServicesSection from './sections/ServicesSection';
import SolutionsShowcaseSection from './sections/SolutionsShowcaseSection';
import IndustriesSection from './sections/IndustriesSection';
import VelocityProcessSection from './sections/VelocityProcessSection';
import StatisticsSection from './sections/StatisticsSection';
import HomeCTASection from './sections/HomeCTASection';

const Home = () => {
  return (
    <div className="relative bg-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.08),transparent_32%),radial-gradient(circle_at_100%_10%,rgba(239,68,68,0.08),transparent_35%)]" />
      <HeroSection />
      <div className="relative z-10 space-y-0">
        <StrategicHighlightsSection />
        <ServicesSection />
        <SolutionsShowcaseSection />
        <IndustriesSection />
        <VelocityProcessSection />
        <StatisticsSection />
        <HomeCTASection />
      </div>
    </div>
  );
};

export default Home;
