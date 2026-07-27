import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
    {
        id: 1,
        role: "Asst. Manager - BI (Development)",
        previousRole: "BI Executive",
        company: "TPF Engineering Pvt. Ltd.",
        date: "Sept 2025 — Present",
        desc: "Creating data-driven solutions through web applications, ML inference pipelines, interactive Power BI dashboards, and intelligent automations.",
        tech: ["React", "Node.js", "Python", "SQL", "FastAPI", "PowerBI"],
        metricLabel: "Status",
        metric: "Active"
    },
    {
        id: 2,
        role: "Data Science Intern",
        company: "Finisar Technology India Pvt Ltd",
        date: "Apr 2025 — Sept 2025",
        desc: "Focused on building and deploying end-to-end ML pipelines, intelligent APIs, and data-driven systems.",
        tech: ["Python", "Flask", "ML", "RAG", "Gen AI", "OpenAI", "Postman"],
        metricLabel: "Status",
        metric: "Completed"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative border-t border-[var(--color-border-subtle)]">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Input Label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="lg:col-span-3"
                >
                    <h2 className="text-sm font-mono text-[var(--color-text-secondary)] tracking-tight">
                        <span className="text-[var(--color-accent-navy)]">In [2]:</span> Experience
                    </h2>
                </motion.div>

                {/* Output Content */}
                <motion.div className="lg:col-span-9 flex flex-col gap-6">
                    {EXPERIENCES.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                            className="group p-6 border border-[var(--color-border-subtle)] bg-[var(--color-surface)] flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-navy)]"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                                <div>
                                    <h3 className="text-xl font-display font-medium text-[var(--color-text-primary)]">
                                        {exp.role}
                                    </h3>
                                    {exp.previousRole && (
                                        <div className="flex items-center gap-2 mt-1 mb-2">
                                            <span className="px-2 py-0.5 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] font-mono rounded-[2px]">
                                                Promoted from: {exp.previousRole}
                                            </span>
                                        </div>
                                    )}
                                    <span className="text-[var(--color-text-secondary)] text-base">
                                        {exp.company}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="font-mono text-sm text-[var(--color-text-secondary)] tabular-nums block">
                                        {exp.date}
                                    </span>
                                </div>
                            </div>
                            
                            <p className="text-[var(--color-text-primary)] leading-relaxed">
                                {exp.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-2">
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-[var(--color-bg-paper)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-xs font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {exp.metric && (
                                    <div className="text-right whitespace-nowrap mt-4 sm:mt-0">
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] block mb-1">
                                            {exp.metricLabel}
                                        </span>
                                        <span className="font-mono text-sm text-[var(--color-accent-navy)] tabular-nums">
                                            {exp.metric}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
