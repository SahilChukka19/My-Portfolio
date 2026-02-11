import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flag, MapPin, Calendar, ArrowRight, Trophy, Activity, Cpu } from "lucide-react";


const EXPERIENCES = [
    {
        id: 1,
        role: "Data Science Intern",
        company: "Finisar Technology India Pvt Ltd",
        date: "Apr 2025 - Sept 2025",
        desc: "Focused on building and deploying end-to-end ML pipelines, intelligent APIs, and data-driven systems.",
        tech: ["Python", "Flask", "ML", "RAG", "Gen AI", "OpenAI", "Postman"],
        type: "AI",
    },
    {
        id: 2,
        role: "BI Executive",
        company: "TPF Engineering Pvt. Ltd.",
        date: "Sept 2025 - Present",
        desc: "Creating data-driven solutions through web applications, ML inference pipelines, interactive Power BI dashboards, and intelligent automations.",
        tech: ["React", "Node.js", "Python", "SQL", "FastAPI", "Postman", "PowerBI", "ML", "RAG", "Gen AI", "OpenAI", "Git"],
        type: "Data",
    },
];

const ExperienceCard = ({ exp }) => {
    return (
        <div className="relative w-[80vw] md:w-[600px] shrink-0 px-8">
            {/* Connection Point to Line (Top Center) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-[2px] h-20 bg-cyan-500/30" />
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_#06b6d4] z-40" />

            <div className="bg-slate-900 border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group shadow-xl shadow-black/50 relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                            <MapPin className="w-4 h-4" /> {exp.company}
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-mono text-slate-400 flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> {exp.date}
                    </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                    {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-slate-950/50 border border-slate-800 rounded text-cyan-500/80 text-xs font-mono">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

const Experience = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    const carX = useTransform(scrollYProgress, [0, 1], ["5%", "90%"]);

    return (
        <section id="experience" ref={targetRef} className="relative h-[300vh] bg-slate-950">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Background Grid (Subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

                {/* THE EXPERIENCE TRACK */}
                <div className="relative w-full h-full">
                    {/* The Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 z-20 -translate-y-1/2" />
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 origin-left z-20 -translate-y-1/2"
                    />

                    {/* The Moving Content */}
                    <motion.div style={{ x }} className="flex gap-20 pl-[20vw] relative z-30 items-start pt-[50vh] mt-20">
                        {/* Start Title */}
                        <div className="shrink-0 pr-20 -translate-y-12">
                            <h2 className="text-6xl font-black text-white italic tracking-tighter uppercase relative">
                                <span className="absolute -inset-1 blur-xl bg-cyan-500/20" />
                                <span className="relative">Experience</span>
                            </h2>
                            <p className="text-slate-500 font-mono mt-4">Scroll to explore journey</p>
                        </div>

                        {EXPERIENCES.map((exp) => (
                            <ExperienceCard key={exp.id} exp={exp} />
                        ))}

                        {/* End Title */}
                        <div className="shrink-0 pl-20 pr-[50vw] translate-y-24">
                            <div className="flex items-center gap-4 text-emerald-400">
                                <Flag className="w-12 h-12" />
                                <span className="text-4xl font-bold uppercase tracking-widest">Current Lap</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* The "Car" (Progress Indicator) */}
                    {/* It stays in view but moves along the line visuals? 
                        Actually, moving the car along the screen width feels good. */}
                    <motion.div
                        className="absolute top-1/2 -translate-y-[90%] z-50 max-w-none w-32 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] mix-blend-screen bg-transparent"
                        style={{ left: carX, x: "-50%" }}
                    >
                        {/* F1 Car Image */}
                        <img
                            src="/f1_car.svg"
                            alt="F1 Car"
                            className="w-full h-auto object-contain"
                        />
                        {/* Exhaust Fume */}
                        <motion.div
                            className="absolute top-1/2 right-3/4 w-40 h-2 bg-gradient-to-l from-red-500/50 to-transparent blur-md"
                            animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 0.9, 0.5] }}
                            transition={{ repeat: Infinity, duration: 0.2 }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
