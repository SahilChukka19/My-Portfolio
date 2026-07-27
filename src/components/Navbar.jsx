import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const tabs = [
        { id: "home", label: "Home", href: "#" },
        { id: "about", label: "About", href: "#about" },
        { id: "experience", label: "Experience", href: "#experience" },
        { id: "skills", label: "Skills", href: "#skills" },
        { id: "projects", label: "Projects", href: "#projects" },
        { id: "awards", label: "Awards", href: "#awards" },
        { id: "resume", label: "Resume", href: "/resume/SahilChukkaResume.pdf", external: true, download: true },
        { id: "contact", label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${isScrolled ? 'bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <a href="#" className="font-display font-bold text-xl tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent-navy)] transition-colors">
                    SC.
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            href={tab.href}
                            target={tab.external && !tab.download ? "_blank" : undefined}
                            rel={tab.external ? "noopener noreferrer" : undefined}
                            download={tab.download ? "Sahil_Resume.pdf" : undefined}
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover-underline pb-1 transition-colors"
                        >
                            {tab.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-[var(--color-text-primary)] p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-20 left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border-subtle)] shadow-xl md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-4">
                            {tabs.map((tab) => (
                                <a
                                    key={tab.id}
                                    href={tab.href}
                                    target={tab.external && !tab.download ? "_blank" : undefined}
                                    rel={tab.external ? "noopener noreferrer" : undefined}
                                    download={tab.download ? "Sahil_Resume.pdf" : undefined}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-navy)] transition-colors w-fit"
                                >
                                    {tab.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;