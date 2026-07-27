import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-bg-dark)] py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-[var(--color-border-subtle)] pt-8">
                    
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-display font-medium text-[var(--color-text-primary)]">
                            Sahil Chukka
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-sm">
                            AI/ML Engineer & Web Developer
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/SahilChukka19" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/sahil-chukka/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:sahil.chukka@gmail.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-[var(--color-text-secondary)]">
                    <p>© {currentYear} Sahil Chukka. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 hover:text-[var(--color-text-primary)] transition-colors uppercase tracking-widest"
                    >
                        Top <ArrowUp className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
