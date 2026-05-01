import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Rocket } from 'lucide-react';
import worldMapBg from '../../../assets/Worlddot.webp';

const commitments = [
    'Fortune 500 scale engineering',
    'Compliance-first industry playbooks',
    'Strategic co-innovation pods',
];

const ClientsCTASection = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-28">
            {/* Dark Mesh Contrast Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-slate-900" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)]"
                />
                {/* World Map Overlay */}
                <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
                    style={{
                        backgroundImage: `url(${worldMapBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-10 md:p-16 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden text-center max-w-5xl mx-auto"
                >
                    {/* Subtle Gradient Accent */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-red-500" />

                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="inline-block mb-8"
                    >
                        <Sparkles className="w-10 h-10 text-red-500" />
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-10 leading-tight">
                        Ready to join the <span className="italic">elite</span> <br />
                        network of global <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">innovators</span>?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto text-left">
                        {commitments.map((item) => (
                            <div key={item} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-4">Value Proposition</span>
                                <p className="text-xs text-white/80 leading-relaxed font-light">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/contact"
                            className="px-8 py-4 rounded-full bg-white text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-500/20 flex items-center gap-3"
                        >
                            Start Your Journey
                            <Rocket className="w-4 h-4 text-blue-600" />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsCTASection;
