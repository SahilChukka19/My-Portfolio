import { motion } from "framer-motion";
import {
    Gamepad2, Laptop, Hash, Flag, Music, Code2, Cpu,
    Headphones, Pizza, Rocket, Coffee
} from "lucide-react";

const Hero = () => {
    const HOBBY_ICONS = [
        { icon: Headphones, position: "top-[15%] left-[10%]", rotate: -15, delay: 0, size: "w-16 h-16" },
        { icon: Laptop, position: "bottom-[15%] left-[8%]", rotate: 12, delay: 1, size: "w-24 h-24" },
        { icon: Pizza, position: "bottom-[20%] right-[12%]", rotate: -12, delay: 2, size: "w-20 h-20" },
        { icon: Gamepad2, position: "bottom-[10%] right-[6%]", rotate: 15, delay: 3, size: "w-28 h-28" },
        { icon: Flag, position: "top-[20%] right-[15%]", rotate: 10, delay: 4, size: "w-16 h-16" },
        { icon: Hash, position: "bottom-[40%] left-[5%]", rotate: -20, delay: 5, size: "w-14 h-14" },
        { icon: Cpu, position: "top-[10%] right-[5%]", rotate: 5, delay: 6, size: "w-20 h-20" },
        { icon: Coffee, position: "top-[40%] right-[8%]", rotate: -10, delay: 7, size: "w-12 h-12" }
    ];

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Gradient Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="relative z-10 text-center px-6 w-full opacity-90 transition-all duration-500">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl text-cyan-400 font-mono mb-4"
                >
                    Hi 👋 I'm Sahil
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Engineering Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Intelligence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    AI Engineer & Data Strategist specializing in building intelligent systems that drive business value.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-center">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all text-center">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {HOBBY_ICONS.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                        opacity: [0.05, 0.25, 0.05],
                        scale: [1, 1.1, 1],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                    }}
                    className={`absolute ${item.position} hidden md:block text-cyan-400/40 pointer-events-none`}
                    style={{ rotate: `${item.rotate}deg` }}
                >
                    <item.icon className={`${item.size} stroke-[1px] filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]`} />
                </motion.div>
            ))}
        </section>
    );
};

export default Hero;