import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const sendEmail = (e) => {
        e.preventDefault();

        // Basic Security/Validation
        if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus('loading');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };
    return (
        <section id="contact" className="min-h-screen py-20 px-6 max-w-7xl mx-auto flex flex-col justify-center relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-8 h-8 text-cyan-500" />
                    <span className="text-sm font-mono text-cyan-500 tracking-widest uppercase">Connectivity</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">Touch</span>
                </h2>
                <p className="text-slate-400 mt-4 max-w-xl font-light leading-relaxed">
                    Have a technical query, a project proposal, or just want to discuss the latest in AI and Web Dev? My radio is always open.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12">
                {/* --- INFO PANEL (Left) --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 space-y-8"
                >
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:sahilchukka@example.com" className="flex items-center gap-4 group text-slate-400 hover:text-white transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
                                        <Mail className="w-5 h-5 text-cyan-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-slate-500 uppercase">Email</div>
                                        <div className="font-medium text-sm md:text-base">sahil.chukka@gmail.com</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-slate-400">
                                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-cyan-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-slate-500 uppercase">Base</div>
                                        <div className="font-medium text-sm md:text-base">Mumbai, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-800">
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-6">Digital Telemetry</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-chukka/", label: "LinkedIn" },
                                    { icon: Github, href: "https://github.com/SahilChukka19", label: "GitHub" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Status Card */}
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 flex items-center gap-4">
                        <div className="relative">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                            <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-50" />
                        </div>
                        <div className="text-sm font-mono text-emerald-400">
                            SYSTEM STATUS: <span className="font-bold">READY TO RECEIVE</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 relative"
                >
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-md rounded-3xl border border-emerald-500/30 text-center p-8"
                            >
                                <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Transmission Received!</h3>
                                <p className="text-slate-400 font-mono text-sm max-w-xs">
                                    Your message has been successfully broadcast to the server. I'll get back to you shortly.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={`bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm space-y-6 transition-opacity duration-300 ${status === 'success' ? 'opacity-20' : 'opacity-100'}`}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 uppercase ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm md:text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 uppercase ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm md:text-base"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What's this regarding?"
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm md:text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase ml-1">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                placeholder="Transmission details..."
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none text-sm md:text-base"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full group relative overflow-hidden bg-gradient-to-r ${status === 'error' ? 'from-red-600 to-rose-600' : 'from-cyan-600 to-emerald-600'} px-8 py-4 rounded-xl font-bold text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-wait`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {status === 'loading' ? (
                                    <>Processing... <Loader2 className="w-4 h-4 animate-spin" /></>
                                ) : status === 'error' ? (
                                    <>Error! Retry? <AlertCircle className="w-4 h-4" /></>
                                ) : (
                                    <>Send Transmission <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                )}
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-white/10 transition-all duration-300" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
