import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AWARDS = [
    {
        id: "01",
        title: "Evaluation of Deep Learning Approaches",
        organization: "IJIGSP, Aug 2025",
        desc: "Published research on CNN architectures for medical OCT image analysis.",
        link: "https://www.mecs-press.org/ijigsp/ijigsp-v17-n4/v17n4-7.html"
    },
    {
        id: "02",
        title: "CNV Detection Web Application",
        organization: "Govt of India, 2024",
        desc: "ROC Registration for intellectual property in medical diagnostic software.",
        link: "https://copyright.gov.in/SearchRoc.aspx"
    },
    {
        id: "03",
        title: "Azure AI Fundamentals",
        organization: "Microsoft, Aug 2025",
        desc: "Certified expertise in Cloud AI services and fundamental ML concepts.",
        link: "https://learn.microsoft.com/en-us/users/sahilchukka-5583/credentials/71af6c160a7c4f84"
    },
    {
        id: "04",
        title: "Large Language Models Mastery",
        organization: "May 2025",
        desc: "Advanced certification in LangChain, RAG pipelines, and Hugging Face.",
        link: "https://www.udemy.com/certificate/UC-7da8a79b-d7ff-475d-99bf-124c267ccfed/"
    }
];

const Awards = () => {
    return (
        <section id="awards" className="py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative border-t border-[var(--color-border-subtle)]">
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
                        <span className="text-[var(--color-accent-navy)]">In [4]:</span> Recognition
                    </h2>
                </motion.div>

                {/* Output Content */}
                <motion.div className="lg:col-span-9 flex flex-col gap-4">
                    {AWARDS.map((award, idx) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
                            className="group p-6 border border-[var(--color-border-subtle)] bg-[var(--color-surface)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-navy)]"
                        >
                            <div className="flex flex-col gap-1">
                                <h4 className="text-lg font-display font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-navy)] transition-colors">
                                    {award.title}
                                </h4>
                                <span className="text-sm font-mono text-[var(--color-text-secondary)]">
                                    {award.organization}
                                </span>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm mt-1">
                                    {award.desc}
                                </p>
                            </div>
                            
                            {award.link && (
                                <div className="mt-2 sm:mt-0">
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent-navy)] transition-colors"
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                        Verify
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;
