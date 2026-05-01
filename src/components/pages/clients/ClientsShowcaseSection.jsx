import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Zap, Target, TrendingUp, Award, Building2, Sparkles } from 'lucide-react';
import SkeletonImage from '../../shared/SkeletonImage';

// Import logos
import appleLogo from '../../../assets/apple-1.webp';
import ibmLogo from '../../../assets/ibm.webp';
import metalogo from '../../../assets/meta.webp';
import amazonlogo from '../../../assets/amazon.webp';
import nvidialogo from '../../../assets/nvidia.webp';
import htclogo from '../../../assets/htc.webp';
import epsonLogo from '../../../assets/clients2/epsonlogo.webp';
import cadenceLogo from '../../../assets/clients2/cadencelogo.webp';
import intuitLogo from '../../../assets/clients2/intuitlogo.webp';
import infosysLogo from '../../../assets/infosys.webp';
import accentureLogo from '../../../assets/accenture.webp';
import tcsLogo from '../../../assets/tcs.webp';
import capgeminiLogo from '../../../assets/capgemini.webp';
import deloitteLogo from '../../../assets/deloitee.webp';
import atosLogo from '../../../assets/atos.webp';
import Wipro from '../../../assets/wipro.webp';
import Hcl from '../../../assets/hcl.webp';
import bankofamericaLogo from '../../../assets/bankofamerica.webp';
import wellsfargoLogo from '../../../assets/wellsfargo.webp';
import capitaloneLogo from '../../../assets/capitolone.webp';
import creditoneLogo from '../../../assets/creditone.webp';
import pncbankLogo from '../../../assets/pncbank.webp';
import usabankLogo from '../../../assets/usabank.webp';
import truistLogo from '../../../assets/truist.webp';
import lplLogo from '../../../assets/lpl.webp';
import mastercardLogo from '../../../assets/mastercard.webp';
import freddiemacLogo from '../../../assets/freddiemac.webp';
import seilogo from '../../../assets/sei.webp';
import mizuhoLogo from '../../../assets/clients2/mizuhobanklogo.webp';
import ambestLogo from '../../../assets/clients2/ambestlogo.webp';
import capitalgroupLogo from '../../../assets/clients2/capitalgrouplogo.webp';
import morganstanleyLogo from '../../../assets/clients2/morganstanleylogo.webp';
import jpmorganLogo from '../../../assets/clients2/jpmorganlogo.webp';
import libertymutualLogo from '../../../assets/clients2/libertymutuallogo.webp';
import frontlineLogo from '../../../assets/clients2/frontlineinsurancelogo.webp';
import humanaLogo from '../../../assets/humana.webp';
import cvsLogo from '../../../assets/cvs.webp';
import anscesionlogo from '../../../assets/anscesion.webp';
import sanofiLogo from '../../../assets/clients2/sanfoilogo.webp';
import primetherapeuticsLogo from '../../../assets/clients2/primelogo.webp';
import healthfirstLogo from '../../../assets/clients2/healthfirstlogo.webp';
import medimpactLogo from '../../../assets/clients2/medimpactlogo.webp';
import walmartlogo from '../../../assets/wallmart.webp';
import publixLogo from '../../../assets/clients2/pubixlogo.webp';
import finishlineLogo from '../../../assets/clients2/finishlinelogo.webp';
import meijerLogo from '../../../assets/clients2/meijerlogo.webp';
import cswholesaleLogo from '../../../assets/clients2/cswholesalelogo.webp';
import adpLogo from '../../../assets/adp.webp';
import centerpointlogo from '../../../assets/centerpoint.webp';
import umglogo from '../../../assets/umg.webp';
import bheLogo from '../../../assets/clients2/bhegt&slogo.webp';
import swaLogo from '../../../assets/clients2/swalogo.webp';
import aaaLogo from '../../../assets/clients2/aaalogo.webp';
import ionLogo from '../../../assets/clients2/ionlogo.webp';
import ecolabLogo from '../../../assets/clients2/ecolablogo.webp';
import lipmanLogo from '../../../assets/clients2/lipmanlogo.webp';
import stellantisLogo from '../../../assets/clients2/stellantislogo.webp';
import cricketLogo from '../../../assets/clients2/cricketwirelesslogo.webp';
import upsLogo from '../../../assets/clients2/upslogo.webp';
import coxLogo from '../../../assets/clients2/coxlogo.webp';
import ttLogo from '../../../assets/clients2/t&tlogo.webp';
import commonwealthLogo from '../../../assets/clients2/commonwealthlogo.webp';
import boeingLogo from '../../../assets/clients2/boeing.webp';

const clients = {
    technology: [
        { name: 'Apple', logo: appleLogo },
        { name: 'IBM', logo: ibmLogo },
        { name: 'Meta', logo: metalogo },
        { name: 'Amazon', logo: amazonlogo },
        { name: 'NVIDIA', logo: nvidialogo },
        { name: 'HTC', logo: htclogo },
        { name: 'Epson America', logo: epsonLogo },
        { name: 'Cadence Design Systems', logo: cadenceLogo },
        { name: 'Intuit', logo: intuitLogo },
    ],
    consulting: [
        { name: 'Infosys', logo: infosysLogo },
        { name: 'Accenture', logo: accentureLogo },
        { name: 'TCS', logo: tcsLogo },
        { name: 'Capgemini', logo: capgeminiLogo },
        { name: 'Deloitte', logo: deloitteLogo },
        { name: 'Atos', logo: atosLogo },
        { name: 'Wipro', logo: Wipro },
        { name: 'HCL', logo: Hcl },
    ],
    financial: [
        { name: 'Bank of America', logo: bankofamericaLogo },
        { name: 'Wells Fargo', logo: wellsfargoLogo },
        { name: 'Capital One', logo: capitaloneLogo },
        { name: 'Credit One', logo: creditoneLogo },
        { name: 'PNC Bank', logo: pncbankLogo },
        { name: 'US Bank', logo: usabankLogo },
        { name: 'Truist', logo: truistLogo },
        { name: 'LPL Financial', logo: lplLogo },
        { name: 'Mastercard', logo: mastercardLogo },
        { name: 'Freddie Mac', logo: freddiemacLogo },
        { name: 'SEI', logo: seilogo },
        { name: 'Mizuho Bank', logo: mizuhoLogo },
        { name: 'AM Best', logo: ambestLogo },
        { name: 'Capital Group', logo: capitalgroupLogo },
        { name: 'Morgan Stanley', logo: morganstanleyLogo },
        { name: 'JP Morgan', logo: jpmorganLogo },
        { name: 'Liberty Mutual', logo: libertymutualLogo },
        { name: 'Frontline Insurance', logo: frontlineLogo },
    ],
    healthcare: [
        { name: 'Humana', logo: humanaLogo },
        { name: 'CVS', logo: cvsLogo },
        { name: 'Ascension', logo: anscesionlogo },
        { name: 'Sanofi', logo: sanofiLogo },
        { name: 'Prime Therapeutics', logo: primetherapeuticsLogo },
        { name: 'HealthFirst', logo: healthfirstLogo },
        { name: 'Medimpact', logo: medimpactLogo },
    ],
    retail: [
        { name: 'Walmart', logo: walmartlogo },
        { name: 'Publix Supermarkets', logo: publixLogo },
        { name: 'Finish Line', logo: finishlineLogo },
        { name: 'Meijer', logo: meijerLogo },
        { name: 'C&S Wholesale', logo: cswholesaleLogo },
    ],
    other: [
        { name: 'ADP', logo: adpLogo },
        { name: 'CenterPoint', logo: centerpointlogo },
        { name: 'UMG', logo: umglogo },
        { name: 'BHE GT&S', logo: bheLogo },
        { name: 'SWA', logo: swaLogo },
        { name: 'AAA', logo: aaaLogo },
        { name: 'ION', logo: ionLogo },
        { name: 'Eco Lab', logo: ecolabLogo },
        { name: 'Lipman Family Farms', logo: lipmanLogo },
        { name: 'Stellantis', logo: stellantisLogo },
        { name: 'Cricket Wireless', logo: cricketLogo },
        { name: 'UPS', logo: upsLogo },
        { name: 'Cox', logo: coxLogo },
        { name: 'T&T', logo: ttLogo },
        { name: 'Commonwealth Charter Academy', logo: commonwealthLogo },
        { name: 'Boeing', logo: boeingLogo },
    ],
};

const categories = [
    { id: 'all', label: 'All Sectors', icon: Globe },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'financial', label: 'Financial', icon: TrendingUp },
    { id: 'healthcare', label: 'Healthcare', icon: Award },
    { id: 'retail', label: 'Retail & CPG', icon: Building2 },
    { id: 'consulting', label: 'Consulting', icon: Target },
];

const ClientsShowcaseSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const getAllClients = () => Object.values(clients).flat();
    const getFilteredClients = () => activeCategory === 'all' ? getAllClients() : clients[activeCategory] || [];

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const getMarqueeRows = () => {
        const data = activeCategory === 'all' ? getAllClients() : getFilteredClients();
        const shuffled = shuffleArray(data);
        const rowCount = data.length > 20 ? 3 : 1;
        const rowSize = Math.ceil(shuffled.length / rowCount);

        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push(shuffled.slice(i * rowSize, (i + 1) * rowSize));
        }
        return rows;
    };

    return (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
            {/* Background Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-12">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-red-600" />
                        Client Universe
                    </p>
                    <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                        Collaborating with <span className="italic">industry-defining</span> <br />
                        organizations across every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">vertical</span>.
                    </h2>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-4 mb-20">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`group flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === category.id
                                    ? 'bg-slate-900 text-white shadow-xl'
                                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-red-400' : 'text-slate-400 group-hover:text-blue-500'}`} />
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Marquee Track */}
                <div className="space-y-8">
                    <style>{`
            @keyframes marqueeSide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: fit-content;
              animation: marqueeSide linear infinite;
            }
          `}</style>

                    {getMarqueeRows().map((row, idx) => (
                        <div key={idx} className="overflow-hidden">
                            <div
                                className="marquee-track"
                                style={{
                                    animationDuration: `${30 + idx * 10}s`,
                                    animationDirection: idx % 2 === 0 ? 'normal' : 'reverse'
                                }}
                            >
                                {[...row, ...row].map((client, cIdx) => (
                                    <div
                                        key={`${client.name}-${cIdx}`}
                                        className="mx-4 flex-shrink-0 w-48 h-28 p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group"
                                    >
                                        <SkeletonImage
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsShowcaseSection;
