import React from 'react';
import ClientsHero from './clients/ClientsHero';
import ClientsShowcaseSection from './clients/ClientsShowcaseSection';
import ClientsCTASection from './clients/ClientsCTASection';

const Clients = () => {
  return (
    <div className="min-h-screen bg-white">
      <ClientsHero />
      <ClientsShowcaseSection />
      <ClientsCTASection />
    </div>
  );
};

export default Clients;
