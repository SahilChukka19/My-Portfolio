import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Cpu, GraduationCap, Award, ExternalLink } from "lucide-react";

const ACCOMPLISHMENTS = [
    {
        id: "01",
        title: "Evaluation of Deep Learning Approaches",
        organization: "IJIGSP, Aug 2025",
        desc: "Published research on CNN architectures for medical OCT image analysis.",
        icon: BookOpen,
        color: "from-cyan-500 to-blue-500",
        link: "https://www.mecs-press.org/ijigsp/ijigsp-v17-n4/v17n4-7.html",
        yOffset: "lg:-translate-y-12"
    },
    {
        id: "02",
        title: "CNV Detection Web Application",
        organization: "Govt of India, 2024",
        desc: "ROC Registration for intellectual property in medical diagnostic software.",
        icon: ShieldCheck,
        color: "from-emerald-500 to-teal-500",
        link: "https://copyright.gov.in/SearchRoc.aspx",
        yOffset: "lg:translate-y-12"
    },
    {
        id: "03",
        title: "Azure AI Fundamentals",
        organization: "Microsoft, Aug 2025",
        desc: "Certified expertise in Cloud AI services and fundamental ML concepts.",
        icon: Cpu,
        color: "from-cyan-400 to-emerald-400",
        link: "https://learn.microsoft.com/en-us/users/sahilchukka-5583/credentials/71af6c160a7c4f84?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        yOffset: "lg:-translate-y-12"
    },
    {
        id: "04",
        title: "Large Language Models Mastery",
        organization: "May 2025",
        desc: "Advanced certification in LangChain, RAG pipelines, and Hugging Face.",
        icon: GraduationCap,
        color: "from-emerald-400 to-cyan-400",
        link: "https://www.udemy.com/certificate/UC-7da8a79b-d7ff-475d-99bf-124c267ccfed/",
        yOffset: "lg:translate-y-12"
    },
];

const Accomplishments = () => {
    return (
        <section id="accomplishments" className="py-32 px-6 relative overflow-hidden bg-slate-950">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(90deg, transparent 49%, #06b6d4 50%, transparent 51%)', backgroundSize: '40px 100%' }} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-xs font-mono text-cyan-500 uppercase tracking-[0.4em] bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
                            Professional Milestones
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
                    >
                        Hall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Excellence</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 min-h-[600px] items-center">
                    {ACCOMPLISHMENTS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className={`relative group ${item.yOffset}`}
                        >
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl rotate-45 blur-xl animate-pulse" />
                            </div>

                            <div className="flex flex-col items-center mb-8 relative">
                                <div className="hidden lg:block text-6xl font-black text-slate-800/50 absolute -top-20 left-1/2 -translate-x-1/2 select-none group-hover:text-cyan-500/20 transition-colors duration-500 font-mono italic">
                                    {item.id}
                                </div>

                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                    className="relative z-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500"
                                >
                                    <div className="absolute -inset-4 border border-cyan-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-[2px]" />
                                    <item.icon className="w-10 h-10 text-white group-hover:text-cyan-400 transition-colors" />
                                </motion.div>

                                <div className="mt-6 h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                                    {item.organization}
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {item.desc}
                                </p>

                                {item.link && (
                                    <motion.a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-6 inline-flex items-center gap-2 text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest cursor-pointer hover:text-cyan-400 transition-colors bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-500/20 hover:border-cyan-500/50"
                                    >
                                        <span>Verify Certificate</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </section>
    );
};

export default Accomplishments;
