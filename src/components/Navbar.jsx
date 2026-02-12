import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Lightbulb, Briefcase, Mail, FileText, Flag, Award } from "lucide-react";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const tabs = [
        { id: "home", label: "Home", icon: Home, href: "#" },
        { id: "about", label: "About", icon: User, href: "#about" },
        { id: "experience", label: "Experience", icon: Flag, href: "#experience" },
        { id: "skills", label: "Skills", icon: Lightbulb, href: "#skills" },
        { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
        { id: "accomplishments", label: "Awards", icon: Award, href: "#accomplishments" },
        { id: "resume", label: "Resume", icon: FileText, href: "/SahilChukkaResume.pdf", external: true, download: true },
        { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = tabs
                .filter(tab => !tab.external && tab.href.startsWith("#"))
                .map(tab => {
                    const id = tab.href === "#" ? "home" : tab.href.substring(1);
                    return {
                        id: tab.label,
                        href: tab.href,
                        element: document.getElementById(id)
                    };
                })
                .filter(section => section.element);

            const scrollPosition = window.scrollY + 100; 

            const currentSection = sections.find(section => {
                const { offsetTop, offsetHeight } = section.element;
                return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
            });

            if (currentSection) {
                setActiveTab(currentSection.id);

                const newHash = currentSection.href === "#" ? "#home" : currentSection.href;
                if (window.location.hash !== newHash && !window.location.hash.includes("?")) {
                    window.history.replaceState(null, null, newHash);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-fit">
            <nav className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 rounded-full p-1 shadow-lg shadow-cyan-500/10">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.label;
                    return (
                        <a
                            key={tab.id}
                            href={tab.href}
                            onClick={() => !tab.external && setActiveTab(tab.label)}
                            target={tab.external && !tab.download ? "_blank" : undefined}
                            rel={tab.external ? "noopener noreferrer" : undefined}
                            download={tab.download ? "Sahil_Resume.pdf" : undefined}
                            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <tab.icon className={`w-4 h-4 relative z-10 ${isActive ? "text-white" : ""}`} />
                            <span className="relative z-10 hidden md:inline">{tab.label}</span>
                        </a>
                    );
                })}
            </nav>
        </div>
    );
};

export default Navbar;