import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center relative border-t border-[var(--color-border-subtle)]">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Section Header / Input */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="lg:col-span-3"
                >
                    <h2 className="text-sm font-mono text-[var(--color-text-secondary)] tracking-tight">
                        <span className="text-[var(--color-accent-navy)]">In [1]:</span> About
                    </h2>
                </motion.div>

                {/* Content / Output */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    className="lg:col-span-9 flex flex-col gap-10"
                >
                    <div className="flex flex-col gap-6">
                        <div className="text-[var(--color-text-primary)] text-lg leading-relaxed flex flex-col gap-4 max-w-3xl">
                            <p>
                                I'm a Data Science and Machine Learning engineer with about 1.3 years of experience mixing AI research, full-stack development, and business intelligence. I'm currently at TPF Engineering, where I build production-ready applications and data pipelines that turn complex, messy data into actual actionable insights.
                            </p>
                            <p>
                                I love taking ownership of the entire process. Whether it's training and fine-tuning deep learning models in PyTorch, spinning up secure REST APIs with FastAPI, or building offline-first interfaces in React and TypeScript, I enjoy building things from end to end. I also have a background as a published researcher in medical imaging, which sparked my passion for using strict data engineering and model optimization to solve tough, real-world problems.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
