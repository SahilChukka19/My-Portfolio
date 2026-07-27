import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative border-t border-[var(--color-border-subtle)] mb-12">
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
                        <span className="text-[var(--color-accent-navy)]">In [5]:</span> Contact
                    </h2>
                </motion.div>

                {/* Output Content */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div className="p-6 border border-[var(--color-border-subtle)] bg-[var(--color-surface)] flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)]">
                                Email
                            </span>
                            <a
                                href="mailto:sahil.chukka@gmail.com"
                                className="text-lg font-display font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-navy)] transition-colors"
                            >
                                sahil.chukka@gmail.com
                            </a>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)]">
                                Location
                            </span>
                            <span className="text-base text-[var(--color-text-primary)]">
                                Mumbai, India
                            </span>
                        </div>
                    </div>

                    <div className="p-6 border border-[var(--color-border-subtle)] bg-[var(--color-surface)] flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)]">
                                Socials
                            </span>
                            <a
                                href="https://www.linkedin.com/in/sahil-chukka/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-between w-full text-[var(--color-text-primary)] hover:text-[var(--color-accent-navy)] transition-colors border-b border-[var(--color-border-subtle)] pb-2"
                            >
                                <span>LinkedIn</span>
                                <ArrowUpRight className="w-4 h-4 text-[var(--color-text-secondary)]" />
                            </a>
                            <a
                                href="https://github.com/SahilChukka19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-between w-full text-[var(--color-text-primary)] hover:text-[var(--color-accent-navy)] transition-colors border-b border-[var(--color-border-subtle)] pb-2"
                            >
                                <span>GitHub</span>
                                <ArrowUpRight className="w-4 h-4 text-[var(--color-text-secondary)]" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
