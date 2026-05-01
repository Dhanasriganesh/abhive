import React from 'react';
import ContactHero from './contact/ContactHero';
import ContactInfoSection from './contact/ContactInfoSection';
import SupportChannelsSection from './contact/SupportChannelsSection';
import ContactFormSection from './contact/ContactFormSection';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.08),transparent_34%),radial-gradient(circle_at_100%_20%,rgba(239,68,68,0.08),transparent_36%)]" />
      <div className="relative z-10">
        <ContactHero />
        <ContactFormSection />
        <ContactInfoSection />
        <SupportChannelsSection />
      </div>
    </div>
  );
};

export default Contact;
