import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, User, MapPin, Calendar, Award, BookOpen, Music, Camera, Hash, ChevronDown, MessageSquare, Gamepad2, Target, Cpu } from 'lucide-react';

const About = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const STATS = [
        { label: "Role", value: "AI/ML Engineer, Web Developer, BI Executive" },
        { label: "Team", value: "TPFEPL" },
        { label: "Base", value: "India" },
        { label: "Exp", value: "10 Months" },
    ];

    const EDUCATION = [
        {
            degree: "B.Tech in Information Technology",
            school: "University of Mumbai",
            year: "2020 - 2024",
            grade: "8.2 CGPA",
            color: "text-cyan-400"
        },
    ];

    const HOBBIES = [
        { icon: Music, label: "Music", level: 85, color: "bg-purple-500" },
        { icon: Gamepad2, label: "Gaming", level: 70, color: "bg-red-500" },
        { icon: Flag, label: "F1 Enthusiast", level: 100, color: "bg-yellow-500" },
        { icon: Hash, label: "Chess", level: 90, color: "bg-blue-500" },
    ];

    const PRESS_CONFERENCE = [
        {
            id: 1,
            q: "What drives your passion for coding?",
            a: "It's the perfect mix of logic and creativity. Building something from scratch that solves real problems gives me a rush similar to a perfect qualifying lap."
        },
        {
            id: 2,
            q: "What's your preferred tech stack?",
            a: "My core focus is entirely driven by Python, specializing in data science and machine learning. I rely heavily on frameworks like PyTorch and scikit-learn for building intelligent predictive models, and use FastAPI or Flask to architect robust backend systems and deploy ML pipelines. I choose my tools specifically to optimize for data processing, model accuracy, and scalable AI-centric solutions."
        },
        {
            id: 3,
            q: "How do you handle pressure?",
            a: "Just like in a race, I stay calm and focus on the next corner. Breaking down complex problems into manageable turns helps me navigate through high-pressure situations."
        }
    ];

    return (
        <section id="about" className="min-h-screen pt-10 pb-10 px-6 max-w-7xl mx-auto flex flex-col justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <User className="w-8 h-8 text-cyan-500" />
                    <span className="text-sm font-mono text-cyan-500 tracking-widest uppercase">Driver Profile</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">Me</span>
                </h2>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-4"
                >
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-800 mb-6 border-2 border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                            <img
                                src="/icons/me.jpg"
                                alt="Sahil Chukka"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-3xl font-black text-white italic uppercase leading-none">Sahil</h3>
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500 italic uppercase leading-none">Chukka</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {STATS.map((stat, i) => (
                                <div key={i} className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
                                    <div className="text-xs text-slate-500 uppercase font-mono mb-1">{stat.label}</div>
                                    <div className="text-sm font-bold text-white leading-tight">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="lg:col-span-8 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-cyan-400" /> Season History <span className="text-xs font-normal text-slate-500 ml-auto font-mono">EDUCATION</span>
                        </h3>

                        <div className="space-y-6">
                            {EDUCATION.map((edu, i) => (
                                <div key={i} className="relative pl-6 border-l-2 border-slate-800 hover:border-cyan-500/50 transition-colors group">
                                    <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${edu.color} group-hover:scale-150 transition-transform`} />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                        <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">{edu.year}</span>
                                    </div>
                                    <div className="text-slate-400 text-sm mb-2">{edu.school}</div>
                                    <div className={`text-sm font-mono font-bold ${edu.color}`}>{edu.grade}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Hobbies / Music Column */}
                        <div className="flex flex-col gap-8">
                            {/* Hobbies */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm"
                            >
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-yellow-400" /> Off-Track Activities
                                </h3>
                                <div className="space-y-4">
                                    {HOBBIES.map((hobby, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-300 flex items-center gap-2">
                                                    <hobby.icon className="w-4 h-4" /> {hobby.label}
                                                </span>
                                                <span className="text-slate-500 font-mono">{hobby.level}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${hobby.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className={`h-full ${hobby.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Spotify Favorite */}
                            <motion.a
                                href="https://open.spotify.com/track/6nDAs3PRe37fgqLfx51lBB"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm flex flex-col gap-4 group hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-widest">
                                            <Music className="w-4 h-4 text-cyan-500" /> On Repeat
                                        </h3>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-1 h-3 bg-cyan-500 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src="/icons/imagine_dragons.svg" alt="Radioactive Remix" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform delay-75">
                                                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-white font-bold truncate group-hover:text-cyan-400 transition-colors">Radioactive</h4>
                                            </div>
                                            <p className="text-slate-400 text-xs truncate uppercase font-mono tracking-tighter">Imagine Dragons • Kendrick Lamar</p>
                                            <div className="mt-1 flex items-center gap-1.5">
                                                <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest bg-cyan-500/10 px-1.5 py-0.5 rounded">Listen on Spotify</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        </div>

                        <div className="flex flex-col gap-8">
                            {/* Press Conference / FAQ */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm flex flex-col"
                            >
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-emerald-400" /> Press Conference
                                </h3>
                                <div className="space-y-2">
                                    {PRESS_CONFERENCE.map((item) => (
                                        <div key={item.id} className="border border-slate-800 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => setActiveQuestion(activeQuestion === item.id ? null : item.id)}
                                                className={`w-full text-left p-3 text-sm font-medium flex items-center justify-between transition-colors ${activeQuestion === item.id ? 'bg-slate-800 text-white' : 'bg-slate-900/50 text-slate-400 hover:text-white'}`}
                                            >
                                                {item.q}
                                                <ChevronDown className={`w-4 h-4 transition-transform ${activeQuestion === item.id ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeQuestion === item.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="bg-slate-950/50 overflow-hidden"
                                                    >
                                                        <div className="p-3 text-xs text-slate-300 leading-relaxed font-mono border-t border-slate-800">
                                                            <span className="text-emerald-500 mr-2">DRIVER:</span>
                                                            {item.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Current Focus Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Target className="w-16 h-16 text-cyan-500" />
                                </div>
                                <div className="relative z-10 flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                            <Cpu className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest leading-none">Current Focus</h3>
                                            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-tighter">Active Development</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            Currently masterminding <span className="text-white font-bold">Advanced AI Agents</span> and <span className="text-cyan-400 font-bold">Autonomous Workflows</span> using the latest LLM frameworks.
                                        </p>

                                        <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase">
                                            <span className="bg-slate-950/80 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded">Next.js 14</span>
                                            <span className="bg-slate-950/80 text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded">LangChain</span>
                                            <span className="bg-slate-950/80 text-purple-400 border border-purple-500/30 px-2 py-1 rounded">Python AI</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
