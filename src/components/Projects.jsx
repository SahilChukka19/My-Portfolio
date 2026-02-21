import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Globe, Cpu, BarChart3, ExternalLink, Github, Code2,
    Database, ChevronRight, ArrowLeft, Terminal,
    Layers, Zap, Shield, CheckCircle2, Camera, Image,
    Target, Activity, Trophy, Cloud, Server, Rocket, Workflow
} from "lucide-react";

const PROJECTS = [
    {
        id: 1,
        title: "MBIU Pro – Bridge Inspection Mobile Application",
        category: "Web Dev",
        desc: "A full-stack Progressive Web Application (PWA) designed to standardize bridge and culvert inspection workflows with offline data collection and ML-based crack detection.",
        longDesc: "MBIU Pro is a mission-critical digital platform that replaces manual, paper-based inspection methods. It focuses on reliability in field conditions, enabling engineers to capture structured data, high-resolution imagery, and GPS coordinates even without internet connectivity.",
        caseStudy: {
            problem: "Traditional paper-based inspections suffered from incomplete data, inconsistent formats, and delayed reporting. Poor data quality and the inability to link photos directly to structural sections often compromised the reliability of inspection records.",
            objective: "To develop an offline-first mobile platform that standardizes inspection workflows, integrates AI for automated crack analysis, and automates report generation to reduce reporting cycles and improve infrastructure safety records.",
            architecture: {
                frontend: ["React + TypeScript PWA", "Offline storage using IndexedDB", "Multi-step validation forms", "GPS-based location tagging"],
                backend: ["FastAPI REST APIs", "SQLAlchemy ORM", "Microsoft SSO Authentication", "Automated PDF Report Engine"],
                ml: ["Crack detection inference API", "Base64 image processing", "Severity overlay on images"],
                rag: ["RAG based chatbot for inspection guidance and troubleshooting", "Contextual retrieval from inspection manuals and historical data", "LLM-based response generation for field support"]
            },
            approach: [
                "Built a robust bi-directional sync engine using IndexedDB to track local changes and resolve conflicts using timestamps.",
                "Implemented schema-driven forms that dynamically adapt UI sections based on structure type (Major/Minor bridge, Flyover, etc.).",
                "Optimized image handling for low-bandwidth environments, storing raw data locally until a stable connection is verified.",
                "Integrated an ML-based vision pipeline to detect structural cracks and overlay severity analysis in real-time."
            ],
            results: [
                "Eliminated data mismatch and incomplete fields via mandatory schema validation.",
                "Reduced reporting cycles from days to minutes through automated PDF generation.",
                "Enabled 100% field uptime in zero-connectivity environments."
            ],
            impact: [
                "Improved safety oversight through consistent, high-fidelity inspection data.",
                "Empowered engineers with AI-driven diagnostic assistance.",
                "Reduced operational overhead by removing manual data entry and report compilation layers."
            ],
            future: [
                "Real-time distance measurement using camera sensors.",
                "Advanced ML models for defect classification using predictive maintenance analytics.",
                "Bi-directional GIS system integration for spatial infrastructure tracking."
            ]
        },
        tech: ["React", "TypeScript", "FastAPI", "ML", "PWA", "SQLAlchemy"],
        features: [
            "Offline-first sync via Service Workers",
            "ML-based structural crack detection",
            "Auto-generated PDF inspection reports",
            "Geospatial asset mapping & tracking"
        ],
        challenges: "Developing a reliable synchronization mechanism for large binary data (images) over intermittent field connections while maintaining data integrity.",
        images: ["https://images.unsplash.com/photo-1541888941293-2580ad4bd781?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800"],
        color: "from-blue-500 to-cyan-400"
    },
    {
        id: 2,
        title: "Employee Performance Dashboard – KPI Reporting",
        category: "BI",
        desc: "An interactive KPI dashboard for tracking employee productivity, task completion efficiency, and performance trends.",
        longDesc: "The Employee Performance Dashboard is a data analytics solution designed to consolidate task-level data from multiple sources into a unified performance evaluation system. The project involved data cleaning, modeling, and metric definition, followed by the creation of interactive Power BI dashboards to visualize productivity trends and support management decision-making.",
        caseStudy: {
            problem: "Performance data was scattered across different sources, making it difficult for management to track productivity, evaluate employee performance, and identify trends across teams.",
            objective: "To create a unified performance evaluation workflow that consolidates task-level data and provides clear, interactive KPI dashboards for tracking productivity and efficiency.",
            architecture: {
                frontend: ["Interactive Power BI dashboards"],
                backend: [
                    "SQL-based data consolidation",
                    "Data cleaning and transformation pipeline",
                    "KPI calculation and modeling layer"
                ]
            },
            approach: [
                "Collected and consolidated task-level data from multiple management sources.",
                "Performed data cleaning and transformation to create a reliable dataset.",
                "Defined key performance metrics and KPI calculation logic.",
                "Built interactive Power BI dashboards for monitoring productivity and task efficiency.",
                "Enabled filtering and drill-down views for team and individual performance analysis."
            ],
            results: [
                "Created a unified performance tracking system.",
                "Improved visibility into employee productivity trends.",
                "Enabled faster and more consistent performance evaluations."
            ],
            impact: [
                "Supported data-driven performance management decisions.",
                "Reduced manual effort in compiling performance reports.",
                "Improved transparency in task completion and efficiency metrics."
            ],
            future: [
                "Integration with real-time task management systems.",
                "Predictive performance analytics using historical data.",
                "Automated alerting for performance anomalies."
            ]
        },
        tech: ["SQL", "Power BI", "Data Modeling", "KPI Analytics"],
        features: [
            "Interactive KPI dashboards",
            "Unified task-level data consolidation",
            "Productivity trend analysis",
            "Drill-down performance insights"
        ],
        challenges: "Consolidating and standardizing task-level data from multiple sources while defining consistent and reliable KPI metrics.",
        images: [
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-sky-500 to-blue-500"
    },

    {
        id: 3,
        title: "NSV Dashboard – Road Condition Analytics",
        category: "BI",
        desc: "An analytics dashboard for monitoring road conditions and identifying critical stretches using structured NSV field data.",
        longDesc: "The NSV Dashboard is a data analytics solution built to transform raw Network Survey Vehicle (NSV) field data into actionable insights. The project involved cleaning, structuring, and modeling large volumes of survey data, followed by the creation of interactive dashboards to monitor road conditions, detect critical segments, and support infrastructure planning decisions.",
        caseStudy: {
            problem: "Raw NSV field data was unstructured and difficult to interpret, making it challenging for teams to identify critical road segments and make timely maintenance decisions.",
            objective: "To build a structured analytics workflow and interactive dashboard that transforms raw NSV data into clear, actionable insights for monitoring road conditions and prioritizing maintenance.",
            architecture: {
                frontend: ["Interactive Power BI dashboards"],
                backend: [
                    "SQL-based data modeling and validation",
                    "Data transformation and cleaning pipeline"
                ],
            },
            approach: [
                "Cleaned and transformed raw NSV field data into a structured analytics dataset.",
                "Designed a data modeling layer using SQL for validation and aggregation.",
                "Built interactive Power BI dashboards for monitoring road conditions.",
                "Implemented geospatial visualizations to highlight critical road stretches.",
                "Enabled filtering and drill-down analysis for decision-makers."
            ],
            results: [
                "Converted unstructured survey data into a reliable analytics pipeline.",
                "Enabled quick identification of high-risk road segments.",
                "Improved visibility into overall network condition metrics."
            ],
            impact: [
                "Supported data-driven road maintenance decisions.",
                "Reduced time required to analyze survey data.",
                "Improved prioritization of infrastructure repairs."
            ],
            future: [
                "Integration with real-time survey data streams.",
                "Predictive maintenance modeling using historical trends.",
                "Mobile-friendly dashboard access for field teams."
            ]
        },
        tech: ["SQL", "Power BI", "Data Modeling", "Geospatial Analytics"],
        features: [
            "Interactive road condition dashboards",
            "SQL-based data transformation pipeline",
            "Geospatial visualization of road segments",
            "Critical stretch identification"
        ],
        challenges: "Transforming large volumes of raw, unstructured survey data into a clean, validated dataset suitable for reliable analytics and geospatial visualization.",
        images: [
            "https://images.unsplash.com/photo-1502920917128-1aa500764b2f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-amber-500 to-orange-500"
    },

    {
        id: 4,
        title: "Automated CAD Workflow API",
        category: "AI-ML",
        desc: "An agent-based API system that automates CAD modeling workflows by extracting dimensions from images and generating structured CAD outputs.",
        longDesc: "The Automated CAD Workflow API is an internal engineering tool designed to streamline manual CAD modeling processes. It integrates agent-based services that extract dimensions from engineering drawings and process CAD-related queries, exposing them through secure RESTful endpoints. The system handles image inputs, structured JSON parsing, and automated CAD file generation, enabling faster and more consistent modeling workflows.",
        caseStudy: {
            problem: "Manual CAD modeling from engineering drawings was time-consuming, error-prone, and dependent on individual expertise. Engineers had to manually interpret dimensions, input them into CAD software, and generate models, which led to inconsistent outputs and longer turnaround times.",
            objective: "To build an automated API-driven system that extracts dimensions from drawings, processes CAD queries, and generates CAD files programmatically, reducing manual effort and ensuring consistent modeling workflows.",
            architecture: {
                frontend: ["Internal API consumers", "Postman-based testing workflows"],
                backend: [
                    "Flask REST APIs",
                    "Agent-based dimension extraction service",
                    "CAD query processing engine",
                    "Secure file upload and validation pipeline"
                ],
                agentic_ai: [
                    "Image-based dimension extraction agent",
                    "Base64 image preprocessing",
                    "Structured JSON output for CAD generation"
                ]
            },
            approach: [
                "Developed agent-based services to extract dimensions from images and process CAD-related queries.",
                "Exposed functionality through Flask REST APIs with secure file upload, validation, and structured JSON responses.",
                "Implemented automated CAD file generation based on extracted parameters.",
                "Designed consistent response schemas and error handling to ensure reliability across multiple failure scenarios.",
                "Deployed the end-to-end pipeline internally on AWS for scalable and controlled access."
            ],
            results: [
                "Reduced manual CAD modeling time by automating dimension extraction and file generation.",
                "Standardized CAD outputs through consistent API-driven workflows.",
                "Improved reliability with structured error handling and validated inputs."
            ],
            impact: [
                "Accelerated internal engineering workflows.",
                "Reduced dependency on manual interpretation of drawings.",
                "Enabled scalable, API-driven CAD automation across teams."
            ],
            future: [
                "Support for additional CAD formats and complex assemblies.",
                "Integration with enterprise CAD systems.",
                "Enhanced AI agents for full drawing-to-model automation."
            ]
        },
        tech: ["Flask", "Python", "AWS", "REST API", "AI Agents", "Postman"],
        features: [
            "Agent-based dimension extraction from images",
            "Automated CAD file generation",
            "Secure file upload and validation",
            "Consistent API response and error handling"
        ],
        challenges: "Designing reliable agent-based services that could accurately extract dimensions from varied image inputs while maintaining consistent API responses and automated CAD outputs.",
        images: [
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1581091870627-3b5e4f0b9e0d?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-gray-600 to-slate-500"
    },

    {
        id: 5,
        title: "Garnet Prediction Analysis",
        category: "AI-ML",
        desc: "An end-to-end predictive pipeline using XGBoost regression to model manganese concentration in garnet samples.",
        longDesc: "The Garnet Prediction Analysis project is a machine learning pipeline designed to predict manganese (Mn) concentration in garnet using structured mineralogical data. The system includes data preprocessing, feature engineering, hyperparameter optimization, and deployment on AWS to enable reliable and reproducible predictions for domain users.",
        caseStudy: {
            problem: "Manual analysis of mineral composition required significant time and expertise, with inconsistent results across datasets. There was a need for a reliable predictive system to estimate manganese concentration in garnet samples using historical data.",
            objective: "To develop an end-to-end machine learning pipeline that accurately predicts Mn concentration in garnet using regression techniques, with robust preprocessing, optimized model performance, and deployable inference workflows.",
            architecture: {
                frontend: ["Internal user access interface"],
                backend: [
                    "Python-based ML pipeline",
                    "Data preprocessing and feature scaling modules",
                    "AWS-based deployment environment"
                ],
                ml: [
                    "XGBoost regression model",
                    "Skewness correction and feature scaling",
                    "Optuna-based hyperparameter tuning",
                    "MAE-based evaluation pipeline"
                ]
            },
            approach: [
                "Performed rigorous data preprocessing, including skewness correction and feature scaling.",
                "Trained an XGBoost regression model to predict manganese concentration.",
                "Used Optuna for automated hyperparameter tuning with Bayesian optimization.",
                "Evaluated model performance using Mean Absolute Error (MAE) to ensure prediction reliability.",
                "Deployed the trained model and inference workflow internally on AWS for reproducible analysis."
            ],
            results: [
                "Achieved reliable prediction accuracy validated through MAE-based evaluation.",
                "Automated the analysis workflow, reducing manual computation and interpretation.",
                "Enabled reproducible and consistent predictions across datasets."
            ],
            impact: [
                "Improved efficiency of mineral analysis workflows.",
                "Provided domain users with a reliable predictive tool.",
                "Reduced dependency on manual estimation processes."
            ],
            future: [
                "Integration of additional mineralogical features for improved accuracy.",
                "Support for multi-target predictions across different elements.",
                "Deployment as a user-facing web interface for broader accessibility."
            ]
        },
        tech: ["Python", "XGBoost", "Optuna", "AWS", "Scikit-learn"],
        features: [
            "End-to-end regression pipeline",
            "Automated hyperparameter tuning",
            "Skewness correction and feature scaling",
            "AWS-based inference deployment"
        ],
        challenges: "Handling skewed feature distributions and optimizing model performance across varied datasets while maintaining reproducibility and reliability.",
        images: [
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1581093458791-9d2e15f23c16?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-emerald-500 to-teal-400"
    },
    {
        id: 6,
        title: "SalesBot – Conversational AI with Retrieval-Augmented Generation (RAG)",
        category: "AI-ML",
        desc: "A conversational AI assistant built with Retrieval-Augmented Generation to answer internal sales queries using product manuals.",
        longDesc: "SalesBot is an internal conversational AI system designed to assist sales teams by providing accurate, context-aware answers from company product manuals. The system uses a Retrieval-Augmented Generation (RAG) pipeline, where product PDFs are processed into vector embeddings and stored in a semantic database. The bot retrieves relevant context and generates responses through a scalable API deployed on AWS.",
        caseStudy: {
            problem: "Sales teams relied on manual searches through lengthy product manuals to answer customer queries. This process was slow, inconsistent, and dependent on individual familiarity with the documentation.",
            objective: "To build a conversational AI assistant that can retrieve relevant information from product manuals and generate accurate, context-aware responses for internal sales queries.",
            architecture: {
                frontend: ["Internal chat interface for sales teams"],
                backend: [
                    "Flask-based REST API",
                    "RAG orchestration pipeline",
                    "Secure AWS deployment"
                ],
                gen_ai: [
                    "OpenAI embedding model for vector generation",
                    "ChromaDB vector database",
                    "Semantic search and similarity matching",
                    "LLM-based response generation"
                ]
            },
            approach: [
                "Processed and indexed product manuals (PDFs) into vector embeddings for semantic retrieval.",
                "Stored embeddings in ChromaDB to enable fast similarity-based search.",
                "Implemented a Retrieval-Augmented Generation pipeline to combine retrieved context with LLM-generated responses.",
                "Built a Flask-based REST API to handle user queries and return context-aware answers.",
                "Deployed the system internally on AWS to ensure secure and scalable access for enterprise users."
            ],
            results: [
                "Reduced time required to answer product-related queries.",
                "Improved response consistency across the sales team.",
                "Enabled semantic search across large product documentation sets."
            ],
            impact: [
                "Increased efficiency of internal sales operations.",
                "Reduced dependency on manual document searches.",
                "Provided a scalable AI-driven knowledge assistant for enterprise users."
            ],
            future: [
                "Integration with CRM systems for contextual customer data.",
                "Multi-language support for global sales teams.",
                "Fine-tuned domain-specific language models for improved accuracy."
            ]
        },
        tech: ["Python", "Flask", "OpenAI", "ChromaDB", "AWS", "RAG"],
        features: [
            "Conversational AI for sales queries",
            "Semantic search over product manuals",
            "Vector embedding-based retrieval",
            "Scalable REST API deployment"
        ],
        challenges: "Designing a reliable retrieval pipeline that returns highly relevant context from large, unstructured product manuals while maintaining fast response times and consistent answer quality.",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-indigo-500 to-purple-500"
    },

    {
        id: 7,
        title: "Detecting CNV Using Deep Learning",
        category: "AI-ML",
        longDesc: "A clinical decision support tool designed to assist ophthalmologists. This project utilizes state-of-the-art Convolutional Neural Networks to analyze Optical Coherence Tomography (OCT) scans, providing a prioritized list of scans for human review based on detected pathologies.",
        caseStudy: {
            problem: "Choroidal Neovascularization (CNV) is a critical retinal condition that can lead to severe vision loss if not detected early. Manual analysis of OCT scans is time-consuming and highly dependent on expert interpretation, creating a need for an accurate, automated diagnostic support system.",
            objective: "To design and evaluate deep learning models capable of accurately detecting CNV from OCT scans, while comparing multiple CNN architectures to balance performance, computational efficiency, and deployment feasibility.",
            approach: [
                "Implemented and trained multiple state-of-the-art CNN architectures including VGG16, ResNet50, DenseNet121, InceptionV3, and EfficientNet using a large-scale OCT imaging dataset.",
                "Performed extensive data preprocessing, augmentation, and normalization to improve generalization and reduce overfitting.",
                "Conducted model benchmarking and comparative analysis to evaluate trade-offs between accuracy, inference speed, and model complexity.",
                "Assessed model performance using classification accuracy, ROC-AUC, and confusion matrices to ensure reliable medical predictions."
            ],
            results: [
                "Achieved 95%+ classification accuracy with strong ROC-AUC scores across top-performing models.",
                "Identified the optimal architecture based on both predictive performance and computational efficiency for real-time usage.",
                "Demonstrated consistent and robust detection of CNV across unseen OCT scans."
            ],
            deployment: [
                "Built and deployed the best-performing model as a Flask-based web application.",
                "Enabled real-time OCT scan uploads with automated CNV prediction, making the system accessible for practical use and experimentation.",
                "Designed the application to simulate a clinical decision-support workflow."
            ],
            impact: [
                "Showcased the application of deep learning in medical imaging and early disease detection.",
                "Highlighted how AI-driven diagnostic tools can support ophthalmologists by improving screening speed and consistency.",
                "Demonstrated end-to-end ownership, from model research and evaluation to deployment and user interaction."
            ]
        },
        tech: ["Keras", "TensorFlow", "CNN", "Med-Imaging"],
        features: [
            "Pathology-specific image augmenting",
            "Transfer learning (ResNet/DenseNet)",
            "Clinical-grade accuracy (95%+)",
            "Web interface for medical uploads"
        ],
        challenges: "Training models on imbalanced medical datasets without losing sensitivity to rare pathological features.",
        links: { code: "#" },
        images: ["https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"],
        color: "from-emerald-400 to-teal-500"
    },
    {
        id: 8,
        title: "Virtual Assistant using NLP and Neural Networks",
        category: "AI-ML",
        desc: "A custom-built virtual assistant using a neural network for intent classification with speech-to-text and text-to-speech interaction.",
        longDesc: "This project involved building a virtual assistant from scratch using natural language processing and neural networks. A multi-layer feedforward model was implemented in PyTorch for intent recognition, supported by a full NLP pipeline including tokenization, bag-of-words vectorization, and embeddings. The assistant enabled hands-free interaction through integrated speech-to-text and text-to-speech modules, providing real-time conversational responses.",
        caseStudy: {
            problem: "Traditional rule-based assistants struggled to handle varied user inputs and required extensive manual rule creation. There was a need for a more flexible system capable of understanding user intent through machine learning.",
            objective: "To design and implement a neural network–based virtual assistant capable of classifying user intents and responding through a conversational interface with voice interaction.",
            architecture: {
                frontend: ["Voice-enabled conversational interface"],
                backend: [
                    "Python-based assistant logic",
                    "Intent classification engine",
                    "Speech-to-text and text-to-speech modules"
                ],
                ml: [
                    "Custom multi-layer feedforward neural network",
                    "Tokenization and bag-of-words vectorization",
                    "Embedding generation for intent classification"
                ]
            },
            approach: [
                "Designed and trained a custom multi-layer neural network in PyTorch for intent recognition.",
                "Built a full NLP pipeline including tokenization, bag-of-words vectorization, and embedding generation.",
                "Integrated speech-to-text for voice input and text-to-speech for response output.",
                "Implemented confidence-based intent filtering with a defined prediction threshold.",
                "Saved and reloaded trained models for real-time inference."
            ],
            results: [
                "Achieved high-confidence intent predictions using a 75% threshold.",
                "Enabled real-time conversational interaction through voice input and output.",
                "Reduced dependency on rigid rule-based response systems."
            ],
            impact: [
                "Demonstrated practical application of neural networks in conversational systems.",
                "Improved flexibility and scalability compared to rule-based assistants.",
                "Provided a foundation for more advanced NLP-driven assistants."
            ],
            future: [
                "Integration with external APIs for task automation.",
                "Transition to transformer-based language models.",
                "Deployment as a cross-platform mobile or web assistant."
            ]
        },
        tech: ["Python", "PyTorch", "NLP", "Speech-to-Text", "Text-to-Speech"],
        features: [
            "Neural network–based intent classification",
            "Custom NLP preprocessing pipeline",
            "Voice-enabled conversational interface",
            "Real-time model inference"
        ],
        challenges: "Designing an intent classification model that generalizes well across varied user inputs while maintaining real-time inference performance.",
        links: { code: "#" },
        images: [
            "https://images.unsplash.com/photo-1581090700227-4c4f50d47c4c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-violet-500 to-fuchsia-500"
    },

    {
        id: 9,
        title: "Portfolio Website",
        category: "Web Dev",
        desc: "A premium, motion-heavy portfolio platform where I mirror the precision of an F1 dashboard using complex layout-id transitions.",
        longDesc: "My Portfolio Website is a high-performance, responsive showcase designed to highlight my technical expertise through immersive UI/UX. Inspired by F1 race engineering aesthetics, I used advanced web technologies like Framer Motion for shared element transitions and Tailwind CSS for a sophisticated glassmorphism design system. The project serves as both my personal brand identity and a demonstration of modern frontend engineering capabilities.",
        caseStudy: {
            problem: "Standard portfolio templates often lack the visual impact and performance needed to showcase advanced engineering work. I needed a bespoke, high-fidelity platform that could handle complex animations and large amounts of project data without compromising load speed or user experience.",
            objective: "To design and build an immersive, F1-inspired portfolio that demonstrates my proficiency in React, complex animations, and responsive design, while maintaining a 'Mission Control' dashboard aesthetic.",
            architecture: {
                frontend: [
                    "React 18 with Functional Components",
                    "Framer Motion for layout-id shared transitions",
                    "Tailwind CSS for a scalable design system",
                    "Lucide React for consistent iconography"
                ],
                backend: [
                    "Vite for high-speed build and HMR",
                    "Modular component architecture",
                    "Centralized project and experience data modeling"
                ],
                ui_ux: [
                    "Glassmorphism and frosted-glass effects",
                    "F1-inspired typography and color palette",
                    "Dynamic, interactive project detail modals"
                ]
            },
            approach: [
                "Defined a consistent design language based on dark-mode glassmorphism and high-contrast telemetry accents.",
                "Implemented a 'Grid-to-Dashboard' transition using Framer Motion's layoutId for seamless content expansion.",
                "Developed a modular data structure for projects to allow automatic case study generation and layout adaptation.",
                "Optimized rendering performance using React.useMemo for filtering and efficient animation management.",
                "Integrated Lucide React for telemetry-inspired icons to enhance the technical aesthetic."
            ],
            results: [
                "Achieved ultra-smooth layout transitions and shared element animations.",
                "Successfully showcased 10+ complex project case studies in a unified dashboard.",
                "Maintained strong lighthouse performance scores through optimized asset loading and build configurations."
            ],
            impact: [
                "Established a professional and cohesive digital presence.",
                "Demonstrated my ability to bridge high-end UI design with complex frontend logic.",
                "Created a scalable platform for future professional growth and documentation."
            ],
            future: [
                "Integration of a CMS for dynamic project updates.",
                "Enhanced 3D background elements using Three.js or React Three Fiber.",
                "Dark/Light mode telemetry switching and custom color themes."
            ]
        },
        tech: ["React", "Framer Motion", "Tailwind", "Lucide", "Vite"],
        features: [
            "F1 'Mission Control' dashboard aesthetic",
            "Advanced layout-id shared element transitions",
            "High-performance glassmorphism design system",
            "Responsive, mobile-first technical layout"
        ],
        challenges: "Orchestrating complex shared-element transitions between grid and detail views while managing scroll state and data persistence across the modal lifecycle.",
        links: { code: "https://github.com/SahilChukka19/My-Portfolio" },
        images: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        ],
        color: "from-indigo-500 to-purple-600"
    }

];

const CATEGORIES = ["All", "Web Dev", "AI-ML", "BI"];

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        return activeCategory === "All"
            ? PROJECTS
            : PROJECTS.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    const activeProject = useMemo(() => {
        return PROJECTS.find(p => p.id === selectedId);
    }, [selectedId]);

    const openedFromGridId = useRef(null);

    const openProject = (id) => {
        openedFromGridId.current = id;
        setSelectedId(id);
        const el = document.getElementById("projects");
        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    };

    // Switch between projects from inside the detail view — does NOT change the originating card
    const switchProject = (id) => {
        setSelectedId(id);
    };

    const closeProject = () => {
        const originId = openedFromGridId.current;
        setSelectedId(null);
        // Wait for grid to fully re-render and layout to settle, then scroll to the original card
        setTimeout(() => {
            const card = document.querySelector(`[data-project-id="${originId}"]`);
            if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 400);
    };

    // Grid View Component
    const GridView = () => (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 px-4 sm:px-0">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6" />
                <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm tracking-wide uppercase">
                    Telemetrics of Innovation // End-to-End Solutions
                </p>
            </motion.div>

            <div className="flex justify-center gap-4 mb-16 flex-wrap">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-8 py-2 rounded-full font-bold transition-all border relative overflow-hidden group ${activeCategory === cat
                            ? "text-slate-950 border-cyan-400"
                            : "text-gray-400 border-slate-800 hover:border-cyan-500/50"
                            }`}
                    >
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="activeCategory"
                                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 uppercase tracking-widest text-xs">{cat}</span>
                    </button>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layoutId={`project-container-${project.id}`}
                            key={project.id}
                            data-project-id={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => openProject(project.id)}
                            className="group relative bg-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all cursor-pointer backdrop-blur-sm"
                        >
                            <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <motion.div
                                        layoutId={`project-icon-${project.id}`}
                                        className={`p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white`}
                                    >
                                        {project.category === "Web Dev" && <Globe className="w-6 h-6" />}
                                        {project.category === "AI-ML" && <Cpu className="w-6 h-6" />}
                                        {project.category === "BI" && <BarChart3 className="w-6 h-6" />}
                                    </motion.div>
                                    <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 uppercase">
                                        {project.category}
                                    </span>
                                </div>

                                <motion.h3
                                    layoutId={`project-title-${project.id}`}
                                    className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase italic"
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[10px] font-mono px-2 py-1 text-cyan-500">
                                            +{project.tech.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                    Know More <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );

    // Detail View Component
    const DetailView = () => (
        <div className="max-w-[1500px] mx-auto lg:h-[85vh] flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar Nav */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="hidden lg:flex w-80 flex-col gap-3 overflow-y-auto pr-4 scrollbar-hide"
            >
                <div className="mb-6">
                    <button
                        onClick={() => closeProject()}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors uppercase text-xs font-bold font-mono py-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Return to Grid
                    </button>
                    <div className="h-px bg-slate-800 mt-4" />
                </div>

                {filteredProjects.map((p) => (
                    <motion.div
                        key={p.id}
                        onClick={() => switchProject(p.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 group ${p.id === selectedId
                            ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                            : "bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                            }`}
                    >
                        <div className={`p-2 rounded-lg bg-slate-950 border ${p.id === selectedId ? 'border-cyan-500/50 text-cyan-400' : 'border-slate-800 text-slate-500'}`}>
                            {p.category === "Web Dev" && <Globe className="w-4 h-4" />}
                            {p.category === "AI-ML" && <Cpu className="w-4 h-4" />}
                            {p.category === "BI" && <BarChart3 className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className={`text-xs font-bold truncate ${p.id === selectedId ? 'text-white' : 'text-slate-400'}`}>
                                {p.title}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-mono italic">
                                S.{p.id.toString().padStart(2, '0')}
                            </p>
                        </div>
                        {p.id === selectedId && (
                            <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile Return Link */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => closeProject()}
                    className="flex items-center gap-2 text-cyan-500 uppercase text-xs font-bold font-mono py-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to projects
                </button>
            </div>

            {/* Main Content Area */}
            <motion.div
                layoutId={`project-container-${selectedId}`}
                className="flex-1 bg-slate-900/40 border border-slate-800/50 rounded-2xl lg:rounded-3xl overflow-hidden backdrop-blur-md flex flex-col"
            >
                <div className={`h-2 w-full bg-gradient-to-r ${activeProject.color}`} />

                <div className="flex-1 overflow-y-auto p-8 lg:p-10 scrollbar-thin scrollbar-thumb-slate-800 hover:scrollbar-thumb-slate-700">
                    <div className="flex flex-col xl:flex-row gap-12">
                        {/* Header Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    layoutId={`project-icon-${selectedId}`}
                                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400"
                                >
                                    {activeProject.category === "Web Dev" && <Globe className="w-8 h-8" />}
                                    {activeProject.category === "AI-ML" && <Cpu className="w-8 h-8" />}
                                    {activeProject.category === "BI" && <BarChart3 className="w-8 h-8" />}
                                </motion.div>
                                <div>
                                    <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-tighter">Project Study // 2024</span>
                                    <motion.h3
                                        layoutId={`project-title-${selectedId}`}
                                        className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase italic tracking-tight"
                                    >
                                        {activeProject.title}
                                    </motion.h3>
                                </div>
                            </div>

                            <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-cyan-500/50 pl-6 bg-slate-800/20 py-4 rounded-r-xl">
                                {activeProject.longDesc}
                            </p>

                            {/* Tech Stack Expanded */}
                            <div className="mb-8">
                                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" /> Integrated Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.tech.map((t) => (
                                        <span key={t} className="px-4 py-2 rounded-xl bg-slate-950 text-cyan-400 border border-cyan-500/20 text-sm font-bold flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Features */}
                                <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-2xl">
                                    <h4 className="text-sm font-bold text-white uppercase mb-6 flex items-center gap-2">
                                        <Layers className="w-5 h-5 text-emerald-400" /> Core Features
                                    </h4>
                                    <ul className="space-y-4">
                                        {activeProject.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Challenges */}
                                <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-2xl">
                                    <h4 className="text-sm font-bold text-white uppercase mb-6 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-orange-400" /> Key Challenge
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed italic">
                                        "{activeProject.challenges}"
                                    </p>
                                </div>
                            </div>

                            {/* Deep Dive Case Study */}
                            {activeProject.caseStudy && (
                                <div className="space-y-12 mb-16">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-px flex-1 bg-slate-800" />
                                        <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-[0.3em]">Case Study Deep Dive</h4>
                                        <div className="h-px flex-1 bg-slate-800" />
                                    </div>

                                    <div className="space-y-10">
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                            {/* Problem */}
                                            <div className="lg:col-span-7 relative pl-8 border-l border-emerald-500/30">
                                                <div className="absolute -left-3 top-0 p-1.5 rounded-full bg-slate-950 border border-emerald-500/50">
                                                    <Zap className="w-3 h-3 text-emerald-500" />
                                                </div>
                                                <h5 className="text-sm font-black text-white uppercase italic tracking-wider mb-4">Problem Statement</h5>
                                                <p className="text-slate-300 text-base leading-relaxed text-justify">{activeProject.caseStudy.problem}</p>
                                            </div>

                                            {/* Objective */}
                                            <div className="lg:col-span-5 relative pl-8 border-l border-cyan-500/30">
                                                <div className="absolute -left-3 top-0 p-1.5 rounded-full bg-slate-950 border border-cyan-500/50">
                                                    <Target className="w-3 h-3 text-cyan-500" />
                                                </div>
                                                <h5 className="text-sm font-black text-white uppercase italic tracking-wider mb-4">Core Objective</h5>
                                                <p className="text-slate-300 text-base leading-relaxed">{activeProject.caseStudy.objective}</p>
                                            </div>
                                        </div>

                                        {/* Approach - Full Width */}
                                        <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-3xl">
                                            <h5 className="text-base font-black text-white uppercase italic tracking-wider mb-6 flex items-center gap-3">
                                                <Activity className="w-5 h-5 text-cyan-400" /> Technical Approach // Project Methodology
                                            </h5>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                {activeProject.caseStudy.approach.map((step, i) => (
                                                    <div key={i} className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed group">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform shrink-0" />
                                                        {step}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Architecture - Optional */}
                                        {activeProject.caseStudy.architecture && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                {Object.entries(activeProject.caseStudy.architecture).map(([key, list]) => (
                                                    <div key={key} className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
                                                        <h5 className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                            <Server className="w-3 h-3" /> {key.replace('_', ' ')}
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {list.map((item, i) => (
                                                                <li key={i} className="text-slate-400 text-[11px] leading-relaxed flex gap-2">
                                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-700 shrink-0" /> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {/* Results */}
                                        {activeProject.caseStudy.results && (
                                            <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl group hover:border-emerald-500/30 transition-colors">
                                                <h5 className="text-[11px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2 text-emerald-400">
                                                    <Trophy className="w-4 h-4" /> Key Results
                                                </h5>
                                                <ul className="space-y-3">
                                                    {activeProject.caseStudy.results.map((r, i) => (
                                                        <li key={i} className="text-slate-400 text-[11px] leading-relaxed flex gap-2">
                                                            <span className="text-emerald-500">→</span> {r}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Deployment */}
                                        {activeProject.caseStudy.deployment && (
                                            <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl group hover:border-cyan-500/30 transition-colors">
                                                <h5 className="text-[11px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2 text-cyan-400">
                                                    <Cloud className="w-4 h-4" /> Deployment
                                                </h5>
                                                <ul className="space-y-3">
                                                    {activeProject.caseStudy.deployment.map((d, i) => (
                                                        <li key={i} className="text-slate-400 text-[11px] leading-relaxed flex gap-2">
                                                            <span className="text-cyan-500">→</span> {d}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Impact */}
                                        {activeProject.caseStudy.impact && (
                                            <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl group hover:border-blue-500/30 transition-colors">
                                                <h5 className="text-[11px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2 text-blue-400">
                                                    <CheckCircle2 className="w-4 h-4" /> Impact
                                                </h5>
                                                <ul className="space-y-3">
                                                    {activeProject.caseStudy.impact.map((imp, i) => (
                                                        <li key={i} className="text-slate-400 text-[11px] leading-relaxed flex gap-2">
                                                            <span className="text-blue-500">→</span> {imp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Future Improvements - Optional */}
                                        {activeProject.caseStudy.future && (
                                            <div className="md:col-span-3 bg-gradient-to-br from-indigo-500/5 to-transparent border border-indigo-500/20 p-8 rounded-3xl">
                                                <h5 className="text-sm font-black text-white uppercase italic tracking-wider mb-6 flex items-center gap-3">
                                                    <Rocket className="w-5 h-5 text-indigo-400" /> Roadmap // Future Improvements
                                                </h5>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                    {activeProject.caseStudy.future.map((f, i) => (
                                                        <div key={i} className="text-slate-400 text-xs leading-relaxed flex gap-3 p-4 bg-slate-950/40 rounded-xl border border-slate-800">
                                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                            {f}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Visual Showcase / Image Gallery */}

                        </div>

                        {/* Action Column */}
                        <div className="lg:w-80 space-y-6">
                            <div className="bg-slate-950 shadow-2xl p-6 rounded-2xl border border-slate-800">
                                <div className="flex flex-col gap-4">
                                    {activeProject.links?.demo && (
                                        <a
                                            href={activeProject.links.demo}
                                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white py-4 rounded-xl font-black uppercase italic tracking-wider transition-all shadow-[0_0_20px_#0891b244] hover:shadow-[0_0_30px_#0891b266]"
                                        >
                                            Live Deployment <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                    {activeProject.links?.code && (
                                        <a
                                            href={activeProject.links.code}
                                            className="flex items-center justify-center gap-3 w-full bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-xl font-black uppercase italic tracking-wider transition-all border border-slate-700"
                                        >
                                            Source Code <Github className="w-5 h-5" />
                                        </a>
                                    )}

                                    {!activeProject.links && (
                                        <div className="py-8 px-4 text-center border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/40">
                                            <Shield className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                                            <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed">
                                                Restricted Access // Company Project Data
                                            </h5>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-800">
                                    <h5 className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-4">Security Verification</h5>
                                    <div className="flex items-center gap-2 text-emerald-500/80 text-[10px] font-mono">
                                        <Shield className="w-3 h-3" /> SECURE HANDSHAKE VERIFIED
                                    </div>
                                </div>
                            </div>

                            {/* Status Metadata */}
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                                        <span className="text-slate-500">Status</span>
                                        <span className="text-emerald-400">Completed // Prod</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                                        <span className="text-slate-500">Category</span>
                                        <span className="text-white">{activeProject.category}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                                        <span className="text-slate-500">Project UUID</span>
                                        <span className="text-slate-400">{selectedId}-PX-99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    return (
        <section id="projects" className="min-h-screen bg-slate-950 py-28 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] rounded-full" />

            <motion.div
                layout
                className="relative z-10"
            >
                <AnimatePresence mode="wait">
                    {!selectedId ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <GridView />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <DetailView />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
