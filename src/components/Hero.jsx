import React, { useMemo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const InteractiveNeuralNetwork = ({ mouseX, mouseY, svgRef }) => {
    // Neural Network Architecture mapped to 2000x1000 viewBox (wide screen)
    // Nodes stretched to the very edges and corners for full-bleed coverage
    const layers = useMemo(() => [
        [{ x: 0, y: 0 }, { x: 100, y: 333 }, { x: 50, y: 666 }, { x: 0, y: 1000 }],
        [{ x: 600, y: 50 }, { x: 750, y: 250 }, { x: 650, y: 450 }, { x: 750, y: 650 }, { x: 600, y: 850 }, { x: 750, y: 1050 }],
        [{ x: 1300, y: -50 }, { x: 1450, y: 300 }, { x: 1350, y: 600 }, { x: 1450, y: 1050 }],
        [{ x: 2000, y: 0 }, { x: 1950, y: 500 }, { x: 2000, y: 1000 }]
    ], []);

    const edges = useMemo(() => {
        const allEdges = [];
        for (let l = 0; l < layers.length - 1; l++) {
            for (let i = 0; i < layers[l].length; i++) {
                for (let j = 0; j < layers[l + 1].length; j++) {
                    allEdges.push({
                        x1: layers[l][i].x, y1: layers[l][i].y,
                        x2: layers[l + 1][j].x, y2: layers[l + 1][j].y,
                        layerIndex: l
                    });
                }
            }
        }
        return allEdges;
    }, [layers]);

    const renderNetwork = (isHoverLayer) => (
        <g>
            {edges.map((edge, idx) => (
                <line
                    key={`edge-${idx}`}
                    x1={edge.x1} y1={edge.y1}
                    x2={edge.x2} y2={edge.y2}
                    stroke={isHoverLayer ? "var(--color-accent-ochre)" : "var(--color-accent-navy)"}
                    strokeWidth={isHoverLayer ? 2 : 1}
                    opacity={isHoverLayer ? 0.6 : 0.05}
                />
            ))}
            {layers.map((layer, lIdx) => (
                layer.map((node, nIdx) => (
                    <circle
                        key={`node-${lIdx}-${nIdx}`}
                        cx={node.x} cy={node.y}
                        r={lIdx === 3 ? 32 : 16}
                        fill={isHoverLayer ? "var(--color-accent-ochre)" : "transparent"}
                        stroke={isHoverLayer ? "none" : "var(--color-accent-navy)"}
                        strokeWidth={isHoverLayer ? 0 : 1.5}
                        opacity={isHoverLayer ? 0.8 : 0.15}
                    />
                ))
            ))}
        </g>
    );

    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <svg ref={svgRef} className="w-full h-full overflow-visible" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="hover-mask-gradient">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="30%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="black" stopOpacity="0" />
                    </radialGradient>
                    <mask id="hover-mask">
                        <rect x="-500" y="-500" width="3000" height="2000" fill="black" />
                        <motion.circle cx={mouseX} cy={mouseY} r={450} fill="url(#hover-mask-gradient)" />
                    </mask>
                </defs>

                {/* Base Network (Dim) */}
                {renderNetwork(false)}

                {/* Interactive Hover Network (Bright & Masked) */}
                <g mask="url(#hover-mask)">
                    {renderNetwork(true)}
                </g>
            </svg>
        </div>
    );
};

const Hero = () => {
    const svgRef = useRef(null);
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    const handleMouseMove = (e) => {
        if (!svgRef.current) return;
        const svg = svgRef.current;
        let pt = svg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
        mouseX.set(svgP.x);
        mouseY.set(svgP.y);
    };

    const handleMouseLeave = () => {
        mouseX.set(-1000);
        mouseY.set(-1000);
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--color-bg-paper)] cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <InteractiveNeuralNetwork mouseX={mouseX} mouseY={mouseY} svgRef={svgRef} />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center pointer-events-none">

                {/* Content Column */}
                <div className="flex flex-col gap-8 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-1"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
                            Sahil Chukka
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-display text-[var(--color-text-primary)] leading-[1.1] tracking-tight"
                        style={{ textShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)' }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    >
                        AI/ML Engineer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-xl"
                    >
                        Architecting predictive models and scalable data systems at TPF Engineering. Specializing in Python, PyTorch, and interactive data visualization.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-row gap-4 items-center pt-4 pointer-events-auto"
                    >
                        <a href="#projects" className="px-6 py-3 bg-[var(--color-text-primary)] text-white font-medium text-sm border border-[var(--color-text-primary)] transition-colors hover:bg-transparent hover:text-[var(--color-text-primary)] rounded-[2px] cursor-pointer">
                            View Projects
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-transparent text-[var(--color-text-primary)] font-medium text-sm transition-colors border border-[var(--color-border-subtle)] hover:border-[var(--color-text-primary)] rounded-[2px] cursor-pointer">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;