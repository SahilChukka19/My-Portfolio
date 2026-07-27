import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";

const PROJECTS = [
    {
        id: 101,
        title: "ultFMT – AI Developer Utilities",
        desc: "A suite of modern, fast, and privacy-friendly tools tailored specifically for AI engineers and researchers.",
        tech: ["Next.js", "React", "FastAPI", "Python", "Pandas"],
        metricLabel: "Privacy Standard",
        metric: "Zero Data Retention",
        link: "https://ultfmt.com",
        details: {
            problem: "AI engineers deal with highly sensitive data daily (proprietary prompts, confidential datasets). Existing web utilities store this data, require sign-ups, or run opaque tracking scripts.",
            solution: [
                "Architected a full-stack Next.js/FastAPI application with absolutely no database storage.",
                "Engineered processing pipelines so that all uploaded datasets and prompts are processed entirely in RAM and immediately garbage-collected.",
                "Built specific tools like ML Studio (Dataset Health), Prompt Token Estimators, and MCP Studio for secure AI development."
            ]
        }
    },
    {
        id: 102,
        title: "tool.ultFMT – Client-Side Toolkit",
        desc: "A lightning-fast, client-side, all-in-one utility belt for modern developers to format, encode, and parse payloads.",
        tech: ["React 19", "TypeScript", "Vite", "Tailwind v4"],
        metricLabel: "Execution",
        metric: "100% Client-Side",
        link: "https://tools.ultfmt.com",
        details: {
            problem: "Developers rely on multiple fragmented, slow web tools to encode, decode, and parse data, risking sensitive payloads like JWTs or API configurations leaking to remote servers.",
            solution: [
                "Engineered a lightning-fast React 19 application that centralizes critical developer utilities so sensitive data never leaves the browser.",
                "Implemented complex parsers (JWT, Cron, JSON-to-Code, Markdown) entirely client-side using Web Workers for performance.",
                "Designed a global command palette (Cmd+K) for instant navigation between 10+ developer tools."
            ]
        }
    },
    {
        id: 1,
        title: "MBIU Pro – Bridge Inspection",
        desc: "A full-stack Progressive Web Application (PWA) designed to standardize bridge and culvert inspection workflows with offline data collection.",
        tech: ["React", "TypeScript", "FastAPI", "SQLite"],
        metricLabel: "Architecture",
        metric: "Offline-first PWA",
        link: null,
        details: {
            problem: "Field engineers lacked a reliable, standardized way to record bridge inspection data in remote areas without internet connectivity, leading to data loss and manual entry errors.",
            solution: [
                "Built an offline-first PWA using React and TypeScript for cross-platform tablet usage.",
                "Implemented local SQLite sync logic that automatically pushes cached data to the FastAPI backend when connectivity is restored.",
                "Standardized the inspection schema to strictly adhere to civil engineering compliance protocols."
            ]
        }
    },
    {
        id: 2,
        title: "Garnet Prediction Analysis",
        desc: "An end-to-end predictive pipeline regression to model manganese concentration in garnet samples.",
        tech: ["Python", "XGBoost", "Optuna", "AWS"],
        metricLabel: "Evaluation",
        metric: "MAE-evaluated",
        link: null,
        details: {
            problem: "Engineers at Coherent needed a fast, non-destructive way to estimate the manganese (Mn) concentration in garnet samples used in chip manufacturing, without relying on expensive and slow chemical assays.",
            solution: [
                "Engineered a regression pipeline using XGBoost on historical materials and manufacturing datasets.",
                "Utilized Optuna for hyperparameter tuning to minimize the Mean Absolute Error (MAE).",
                "Deployed the inference endpoint on AWS to allow real-time predictions for the engineering team."
            ]
        }
    },
    {
        id: 3,
        title: "SalesBot – Conversational AI",
        desc: "A conversational AI assistant built with Retrieval-Augmented Generation to answer internal sales queries using product manuals.",
        tech: ["Python", "Flask", "OpenAI", "ChromaDB", "AWS"],
        metricLabel: "Core pattern",
        metric: "RAG + Embeddings",
        link: null,
        details: {
            problem: "Sales representatives spent excessive time manually searching through hundreds of dense PDF product manuals to answer technical customer queries during live calls.",
            solution: [
                "Developed a Retrieval-Augmented Generation (RAG) system using OpenAI embeddings and ChromaDB.",
                "Built a Flask backend that instantly retrieves relevant manual excerpts and synthesizes accurate, conversational answers.",
                "Hosted the microservice on AWS, drastically reducing query resolution time for the sales team."
            ]
        }
    },
    {
        id: 4,
        title: "Detecting CNV Using Deep Learning",
        desc: "A clinical decision support tool utilizing CNNs to analyze OCT scans, providing a prioritized list of scans for human review.",
        tech: ["Keras", "TensorFlow", "CNN"],
        metricLabel: "Output Metric",
        metric: "Accuracy: 95.2%",
        link: "https://github.com/SahilChukka19/Detection-of-Choroidal-Neovasculariation-Using-Deep-Learning-Models",
        github: true,
        details: {
            problem: "Ophthalmologists were bottlenecked by the high volume of Optical Coherence Tomography (OCT) scans, delaying the diagnosis of Choroidal Neovascularization (CNV).",
            solution: [
                "Trained a custom Convolutional Neural Network (CNN) using Keras and TensorFlow on a large dataset of annotated OCT scans.",
                "Achieved 95.2% accuracy in classifying scans into normal vs. pathological.",
                "Designed the tool to act as a triage system, pushing high-risk scans to the top of the queue for immediate human review."
            ]
        }
    },
    {
        id: 5,
        title: "Virtual Assistant using NLP",
        desc: "A custom-built virtual assistant using a neural network for intent classification with speech-to-text and text-to-speech interaction.",
        tech: ["Python", "PyTorch", "NLP", "Speech"],
        metricLabel: "Core technique",
        metric: "Intent Classification",
        link: "https://github.com/SahilChukka19/jaadu",
        github: true,
        details: {
            problem: "Existing virtual assistants were locked into proprietary ecosystems, making it difficult to add custom, highly specific offline commands for personal workflow automation.",
            solution: [
                "Built a lightweight NLP pipeline in PyTorch to classify custom intents locally.",
                "Integrated SpeechRecognition for STT and pyttsx3 for TTS, ensuring the assistant could run without constant API calls.",
                "Created a modular architecture allowing new commands (like local script execution) to be added effortlessly."
            ]
        }
    }
];

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative border-t border-[var(--color-border-subtle)]">
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
                        <span className="text-[var(--color-accent-navy)]">In [3]:</span> Projects
                    </h2>
                </motion.div>

                {/* Output Content */}
                <motion.div className="lg:col-span-9 flex flex-col gap-6">
                    {PROJECTS.map((project, idx) => {
                        const isExpanded = expandedId === project.id;
                        
                        return (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ layout: { duration: 0.3, type: "spring", bounce: 0.2 }, opacity: { duration: 0.4, delay: Math.min(idx * 0.1, 0.4) }, ease: "easeOut" }}
                            className={`group p-6 border bg-[var(--color-surface)] flex flex-col gap-4 transition-colors duration-300 ${isExpanded ? 'border-[var(--color-accent-navy)]' : 'border-[var(--color-border-subtle)] hover:border-[var(--color-accent-navy)]'} cursor-pointer`}
                            onClick={() => toggleExpand(project.id)}
                        >
                            <motion.div layout className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                                <div>
                                    <h3 className="text-xl font-display font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-navy)] transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-4 text-right">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1 text-sm font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent-navy)] transition-colors z-10 relative"
                                        >
                                            {project.github ? <Github className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                                            {project.github ? "Source" : "View"}
                                        </a>
                                    )}
                                    <ChevronDown className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </div>
                            </motion.div>
                            
                            <motion.p layout className="text-[var(--color-text-primary)] leading-relaxed">
                                {project.desc}
                            </motion.p>

                            <motion.div layout className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-2">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-[var(--color-bg-paper)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-xs font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.metric && (
                                    <div className="text-right whitespace-nowrap mt-4 sm:mt-0">
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] block mb-1">
                                            {project.metricLabel}
                                        </span>
                                        <span className="font-mono text-sm text-[var(--color-accent-navy)] tabular-nums font-medium">
                                            {project.metric}
                                        </span>
                                    </div>
                                )}
                            </motion.div>

                            <AnimatePresence>
                                {isExpanded && project.details && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden border-t border-[var(--color-border-subtle)] pt-6"
                                    >
                                        <div className="flex flex-col gap-6 text-[var(--color-text-secondary)]">
                                            <div>
                                                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent-navy)] mb-2">
                                                    Out [3.{project.id}]: Problem
                                                </h4>
                                                <p className="text-sm leading-relaxed">{project.details.problem}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent-navy)] mb-2">
                                                    Solution & Execution
                                                </h4>
                                                <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed">
                                                    {project.details.solution.map((point, i) => (
                                                        <li key={i} className="pl-1 marker:text-[var(--color-accent-ochre)]">{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )})}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
