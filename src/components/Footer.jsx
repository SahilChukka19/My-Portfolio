import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-6 overflow-hidden">
            {/* Subtle Gradient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
                {/* Brand / Logo */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">
                        Sahil <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">Chukka</span>
                    </h2>
                    <p className="text-slate-500 text-xs font-mono mt-1 tracking-[0.2em] uppercase">
                        AI/ML Engineer • Web Developer
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    {[
                        { icon: Github, href: "https://github.com/SahilChukka19", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-chukka/", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:sahil.chukka@gmail.com", label: "Email" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Navigation Links (Quick Access) */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-mono uppercase tracking-widest text-slate-500">
                    {['About', 'Experience', 'Skills', 'Projects'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-8 mt-4 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-slate-600 text-[10px] font-mono uppercase tracking-tighter">
                        © 2024 Sahil Chukka. All rights reserved. <span className="mx-2">|</span> V1.0.2 telemetry
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest hover:text-cyan-400 transition-colors"
                    >
                        Back to top <ChevronUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Visual Decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;
