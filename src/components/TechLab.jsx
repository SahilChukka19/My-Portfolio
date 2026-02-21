import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Terminal, Sparkles, RefreshCw, FlaskConical
} from "lucide-react";

const SKILLS = [
    { id: "python", name: "Python", icon: "/icons/python.svg", color: "text-yellow-400" },
    { id: "typescript", name: "TypeScript", icon: "/icons/ts.svg", color: "text-blue-500" },
    { id: "react", name: "React", icon: "/icons/react.svg", color: "text-cyan-400" },
    { id: "fastapi", name: "FastAPI", icon: "/icons/fastapi.svg", color: "text-teal-400" },
    { id: "pytorch", name: "PyTorch", icon: "/icons/pytorch.svg", color: "text-orange-500" },
    { id: "sql", name: "SQL", icon: "/icons/sql.svg", color: "text-gray-300" },
    { id: "azure", name: "Azure", icon: "/icons/Azure.svg", color: "text-blue-400" },
    { id: "langchain", name: "LangChain", icon: "/icons/langchain.svg", color: "text-green-400" },
    { id: "bi", name: "Power BI", icon: "/icons/powerbi.svg", color: "text-yellow-500" },
    { id: "rag", name: "RAG", icon: "/icons/rag.svg", color: "text-purple-400" },
    { id: "rest", name: "REST API", icon: "/icons/restapi.svg", color: "text-indigo-400" },
    { id: "git", name: "Git", icon: "/icons/git.svg", color: "text-red-400" },
    { id: "scikit", name: "Scikit-Learn", icon: "/icons/scikitlearn.svg", color: "text-orange-300" },
    { id: "javascript", name: "JavaScript", icon: "/icons/js.svg", color: "text-yellow-300" },
    { id: "flask", name: "Flask", icon: "/icons/flask.svg", color: "text-gray-400" },
    { id: "crewai", name: "CrewAI", icon: "/icons/crewai.svg", color: "text-red-500" },
    { id: "huggingface", name: "Hugging Face", icon: "/icons/huggingface.svg", color: "text-yellow-600" },
    { id: "keras", name: "Keras", icon: "/icons/keras.svg", color: "text-red-600" },
    { id: "pwa", name: "PWA", icon: "/icons/pwa.svg", color: "text-purple-500" },
    { id: "postman", name: "Postman", icon: "/icons/postman.svg", color: "text-orange-500" },
];

const RECIPES = {
    "react+typescript": { title: "Frontend Architect", desc: "Type-safe, scalable UI development.", color: "from-blue-500 to-cyan-400" },
    "fastapi+react": { title: "Modern Full Stack", desc: "High-performance apps with Python backends.", color: "from-teal-400 to-cyan-400" },
    "python+pytorch": { title: "Deep Learning Engineer", desc: "Neural networks & predictive models.", color: "from-yellow-400 to-orange-500" },
    "azure+langchain": { title: "Enterprise AI Agent", desc: "Scalable LLM solutions in the cloud.", color: "from-blue-400 to-green-400" },
    "python+sql": { title: "Data Scientist", desc: "Extracting insights from complex datasets.", color: "from-yellow-400 to-gray-400" },
    "bi+sql": { title: "Business Intelligence", desc: "Visualizing insights for strategic decisions.", color: "from-yellow-500 to-gray-300" },
    "fastapi+sql": { title: "Backend Specialist", desc: "Efficient APIs & robust data modeling.", color: "from-teal-400 to-gray-300" },
    "langchain+python": { title: "AI Agent Architect", desc: "Designing autonomous cognitive systems.", color: "from-green-400 to-yellow-400" },
    "langchain+rag": { title: "Knowledge Engine", desc: "Context-aware AI systems with retrieval.", color: "from-purple-400 to-green-400" },
    "fastapi+rest": { title: "API Architect", desc: "Standardized, high-speed communication layers.", color: "from-indigo-400 to-teal-400" },
    "azure+git": { title: "DevOps Pipeline", desc: "Continuous integration & cloud deployment.", color: "from-red-400 to-blue-400" },
    "python+scikit": { title: "ML Practitioner", desc: "Classic machine learning & statistical analysis.", color: "from-orange-300 to-yellow-400" },
    "react+rest": { title: "SPA Developer", desc: "Dynamic frontends consuming resilient APIs.", color: "from-cyan-400 to-indigo-400" },
    "pytorch+scikit": { title: "AI Researcher", desc: "Advanced modeling & statistical validation.", color: "from-orange-500 to-orange-300" },
    "crewai+langchain": { title: "Autonomous Agents", desc: "Orchestrating multi-agent AI swarms.", color: "from-green-400 to-red-500" },
    "keras+python": { title: "Deep Learning Pro", desc: "Rapid prototyping of neural networks.", color: "from-yellow-400 to-red-600" },
    "huggingface+pytorch": { title: "Transformer Specialist", desc: "Fine-tuning state-of-the-art LLMs.", color: "from-yellow-600 to-orange-500" },
    "javascript+react": { title: "JS Ecosystem Expert", desc: "Mastery of modern web primitives.", color: "from-yellow-300 to-cyan-400" },
    "fastapi+scikit": { title: "ML API Deployment", desc: "Serving predictive models at scale.", color: "from-gray-400 to-orange-300" },
    "flask+scikit": { title: "ML API Deployment", desc: "Serving predictive models at scale.", color: "from-gray-400 to-orange-300" },
    "pwa+react": { title: "Offline-First Architect", desc: "Building app-like web experiences.", color: "from-purple-500 to-cyan-400" },
    "fastapi+postman": { title: "API Tester", desc: "Verifying endpoints & ensuring reliability.", color: "from-orange-500 to-teal-400" },
    "postman+python": { title: "Automated QA", desc: "Scripting API tests & monitoring collections.", color: "from-orange-500 to-yellow-400" },
    "flask+postman": { title: "API Developer", desc: "Building & debugging RESTful services.", color: "from-gray-400 to-orange-500" },
    "javascript+postman": { title: "Newman Automation", desc: "CI/CD integration for API test suites.", color: "from-yellow-300 to-orange-500" },
    "postman+rest": { title: "API Specialist", desc: "Designing & documenting robust interfaces.", color: "from-indigo-400 to-orange-500" },
};
const getMixKey = (id1, id2) => [id1, id2].sort().join("+");

const generateGenericCombo = (skill1, skill2) => {
    return {
        title: "Integrated Stack",
        desc: `Combining power of ${skill1.name} & ${skill2.name}.`,
        color: "from-slate-700 to-slate-500",
        isGeneric: true
    };
};

const TechLab = () => {
    const [slot1, setSlot1] = useState(null);
    const [slot2, setSlot2] = useState(null);
    const [result, setResult] = useState(null);
    const [isCrafting, setIsCrafting] = useState(false);

    useEffect(() => {
        if (slot1 && slot2) {
            const key = getMixKey(slot1.id, slot2.id);
            const recipe = RECIPES[key] || generateGenericCombo(slot1, slot2);

            setIsCrafting(true);

            setTimeout(() => {
                setResult(recipe);
                setIsCrafting(false);
            }, 800);
        }
    }, [slot1, slot2]);

    const handleSelect = (skill) => {
        if (result) handleReset();
        if (!slot1) setSlot1(skill);
        else if (!slot2) setSlot2(skill);
    };

    const handleReset = () => {
        setSlot1(null);
        setSlot2(null);
        setResult(null);
        setIsCrafting(false);
    };

    return (
        <section id="skills" className="min-h-screen bg-slate-950 py-32 px-6 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 inline-flex items-center gap-3">
                        <FlaskConical className="w-10 h-10 text-emerald-400" /> Tech Lab
                    </h2>
                    <p className="text-gray-400 text-lg">Combine my skills to discover my specialized roles.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

                    {/* INVENTORY SIDEBAR */}
                    <div className="md:col-span-2 lg:col-span-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl font-mono text-cyan-300 mb-6 flex items-center gap-2">
                            <Terminal className="w-5 h-5" /> Inventory
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
                            {SKILLS.map((skill) => (
                                <motion.button
                                    key={skill.id}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleSelect(skill)}
                                    disabled={slot1?.id === skill.id || slot2?.id === skill.id}
                                    className={`aspect-square rounded-xl bg-slate-800 flex flex-col items-center justify-center p-2 border border-slate-700 transition-all ${(slot1?.id === skill.id || slot2?.id === skill.id) ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                                        }`}
                                >
                                    <div className="flex flex-col items-center justify-center gap-1">
                                        <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-300 text-center leading-tight break-words w-full px-1 line-clamp-2">{skill.name}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* WORKBENCH AREA */}
                    <div className="md:col-span-2 lg:col-span-8 flex flex-col items-center justify-center min-h-[400px]">

                        {/* THE SLOTS */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12">
                            {/* Slot 1 */}
                            <SlotBox skill={slot1} label="Input A" onClear={() => setSlot1(null)} />

                            <div className="text-4xl text-slate-700 font-light md:rotate-0 rotate-90">+</div>

                            {/* Slot 2 */}
                            <SlotBox skill={slot2} label="Input B" onClear={() => setSlot2(null)} />
                        </div>

                        {/* STATUS INDICATOR / RESULT ACTION */}
                        <div className="h-48 w-full max-w-md flex items-center justify-center relative">
                            <AnimatePresence mode="wait">
                                {isCrafting ? (
                                    <motion.div
                                        key="crafting"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.2 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-24 h-24 border-4 border-t-cyan-500 border-r-emerald-500 border-b-purple-500 border-l-yellow-500 rounded-full animate-spin blur-md" />
                                        <div className="w-16 h-16 bg-white rounded-full absolute mix-blend-overlay animate-pulse" />
                                    </motion.div>
                                ) : result ? (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, y: 20, rotateX: 90 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        className={`w-full bg-gradient-to-br ${result.color} p-[1px] rounded-2xl shadow-2xl skew-y-1`}
                                    >
                                        <div className="bg-slate-950/90 backdrop-blur-xl rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                                            {!result.isError && <Sparkles className="absolute top-4 right-4 text-yellow-300 w-6 h-6 animate-ping" />}
                                            <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${result.color} mb-2`}>
                                                {result.title}
                                            </h3>
                                            <p className="text-gray-400">{result.desc}</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-gray-600 font-mono text-sm text-center"
                                    >
                                        Select two technologies to combine...
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={handleReset}
                            disabled={!slot1 && !slot2}
                            className={`mt-12 group flex items-center gap-2 px-6 py-2 rounded-full border border-slate-700 font-mono text-sm transition-all ${(slot1 || slot2)
                                ? 'bg-slate-900/50 text-slate-400 hover:text-white hover:border-cyan-500/50 cursor-pointer'
                                : 'bg-slate-900/20 text-slate-700 cursor-not-allowed opacity-50'
                                }`}
                        >
                            <RefreshCw className={`w-4 h-4 transition-transform duration-500 ${(slot1 || slot2) ? 'group-hover:rotate-180' : ''}`} /> Reset Workbench
                        </motion.button>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-component for a Slot
const SlotBox = ({ skill, label, onClear }) => {
    return (
        <div className="relative group">
            <motion.div
                layout
                className={`w-28 h-28 md:w-36 md:h-36 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-colors ${skill
                    ? 'bg-slate-800/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-900/30 border-dashed border-slate-700'
                    }`}
            >
                {skill ? (
                    <>
                        <img src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <span className="text-xs md:text-sm font-semibold text-white">{skill.name}</span>
                        {/* Clear Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); onClear(); }}
                            className="absolute -top-3 -right-3 w-8 h-8 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center text-lg transition-all border border-red-500/50"
                        >
                            &times;
                        </button>
                    </>
                ) : (
                    <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">{label}</span>
                )}
            </motion.div>
        </div>
    );
};

export default TechLab;
