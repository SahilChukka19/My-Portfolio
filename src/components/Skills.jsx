import React from "react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: "/icons/python.svg" },
            { name: "TypeScript", icon: "/icons/ts.svg" },
            { name: "JavaScript", icon: "/icons/js.svg" },
            { name: "SQL", icon: "/icons/sql.svg" }
        ]
    },
    {
        title: "ML / AI",
        skills: [
            { name: "PyTorch", icon: "/icons/pytorch.svg" },
            { name: "Scikit-Learn", icon: "/icons/scikitlearn.svg" },
            { name: "LangChain", icon: "/icons/langchain.svg" },
            { name: "Hugging Face", icon: "/icons/huggingface.svg" },
            { name: "CrewAI", icon: "/icons/crewai.svg" },
            { name: "RAG", icon: "/icons/rag.svg" },
            { name: "Keras", icon: "/icons/keras.svg" }
        ]
    },
    {
        title: "Web / Full-Stack",
        skills: [
            { name: "React", icon: "/icons/react.svg" },
            { name: "FastAPI", icon: "/icons/fastapi.svg" },
            { name: "Flask", icon: "/icons/flask.svg" },
            { name: "REST API", icon: "/icons/restapi.svg" },
            { name: "PWA", icon: "/icons/pwa.svg" }
        ]
    },
    {
        title: "Data / Tools",
        skills: [
            { name: "Power BI", icon: "/icons/powerbi.svg" },
            { name: "Azure", icon: "/icons/Azure.svg" },
            { name: "Git", icon: "/icons/git.svg" },
            { name: "Postman", icon: "/icons/postman.svg" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative border-t border-[var(--color-border-subtle)]">
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
                        <span className="text-[var(--color-accent-navy)]">In [3]:</span> Skills
                    </h2>
                </motion.div>

                {/* Output Content */}
                <motion.div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SKILL_GROUPS.map((group, idx) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                                className="flex flex-col gap-6"
                            >
                                <h4 className="text-lg font-display font-medium text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)] pb-2">
                                    {group.title}
                                </h4>
                                <div className="flex flex-col gap-4">
                                    {group.skills.map(skill => (
                                        <div key={skill.name} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-sm bg-[var(--color-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center p-1.5 shrink-0 transition-colors hover:border-[var(--color-accent-navy)] group cursor-default">
                                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all group-hover:scale-110" />
                                            </div>
                                            <span className="text-[var(--color-text-primary)] text-sm font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
