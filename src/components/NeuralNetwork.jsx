import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const NeuralNetwork = () => {
    // Define the network architecture
    const layers = useMemo(() => [
        // Layer 0: Input (4 nodes)
        [
            { x: 100, y: 350 }, { x: 100, y: 450 }, { x: 100, y: 550 }, { x: 100, y: 650 }
        ],
        // Layer 1: Hidden 1 (6 nodes)
        [
            { x: 400, y: 250 }, { x: 400, y: 350 }, { x: 400, y: 450 }, 
            { x: 400, y: 550 }, { x: 400, y: 650 }, { x: 400, y: 750 }
        ],
        // Layer 2: Hidden 2 (4 nodes)
        [
            { x: 700, y: 350 }, { x: 700, y: 450 }, { x: 700, y: 550 }, { x: 700, y: 650 }
        ],
        // Layer 3: Output (1 node)
        [
            { x: 900, y: 500 }
        ]
    ], []);

    // Generate edges connecting layer i to layer i+1
    const edges = useMemo(() => {
        const allEdges = [];
        for (let l = 0; l < layers.length - 1; l++) {
            const currentLayer = layers[l];
            const nextLayer = layers[l + 1];
            
            for (let i = 0; i < currentLayer.length; i++) {
                for (let j = 0; j < nextLayer.length; j++) {
                    allEdges.push({
                        layerIndex: l,
                        x1: currentLayer[i].x,
                        y1: currentLayer[i].y,
                        x2: nextLayer[j].x,
                        y2: nextLayer[j].y,
                    });
                }
            }
        }
        return allEdges;
    }, [layers]);

    // Animation timings for a 6 second loop
    const DURATION = 6;
    
    const getEdgeAnimation = (layerIndex) => {
        if (layerIndex === 0) {
            return {
                opacity: [0.02, 0.02, 0.4, 0.02, 0.02],
                times: [0, 0.05, 0.15, 0.3, 1]
            };
        } else if (layerIndex === 1) {
            return {
                opacity: [0.02, 0.02, 0.4, 0.02, 0.02],
                times: [0, 0.2, 0.3, 0.45, 1]
            };
        } else {
            return {
                opacity: [0.02, 0.02, 0.6, 0.02, 0.02],
                times: [0, 0.35, 0.45, 0.6, 1]
            };
        }
    };

    const getNodeAnimation = (layerIndex) => {
        if (layerIndex === 0) {
            return {
                opacity: [0.1, 1, 0.1, 0.1],
                scale: [1, 1.2, 1, 1],
                times: [0, 0.1, 0.2, 1]
            };
        } else if (layerIndex === 1) {
            return {
                opacity: [0.1, 0.1, 1, 0.1, 0.1],
                scale: [1, 1, 1.2, 1, 1],
                times: [0, 0.15, 0.25, 0.35, 1]
            };
        } else if (layerIndex === 2) {
            return {
                opacity: [0.1, 0.1, 1, 0.1, 0.1],
                scale: [1, 1, 1.2, 1, 1],
                times: [0, 0.3, 0.4, 0.5, 1]
            };
        } else {
            // Output node
            return {
                opacity: [0.1, 0.1, 1, 0.1, 0.1],
                scale: [1, 1, 1.5, 1, 1],
                times: [0, 0.45, 0.6, 0.8, 1],
                fill: ['var(--color-accent-navy)', 'var(--color-accent-navy)', 'var(--color-accent-ochre)', 'var(--color-accent-navy)', 'var(--color-accent-navy)']
            };
        }
    };

    return (
        <div className="fixed inset-0 z-0 pointer-events-none flex justify-end items-center overflow-hidden opacity-30">
            {/* Shift it slightly to the right so it acts as a subtle watermark on the right half of the screen */}
            <div className="w-[150vw] md:w-[100vw] h-[100vh] transform translate-x-1/4">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
                    
                    {/* Render Edges */}
                    {edges.map((edge, idx) => (
                        <motion.line
                            key={`edge-${idx}`}
                            x1={edge.x1}
                            y1={edge.y1}
                            x2={edge.x2}
                            y2={edge.y2}
                            stroke="var(--color-accent-navy)"
                            strokeWidth={edge.layerIndex === 2 ? 1.5 : 1}
                            initial={{ opacity: 0.02 }}
                            animate={getEdgeAnimation(edge.layerIndex)}
                            transition={{
                                duration: DURATION,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Render Nodes */}
                    {layers.map((layer, lIdx) => (
                        layer.map((node, nIdx) => (
                            <motion.circle
                                key={`node-${lIdx}-${nIdx}`}
                                cx={node.x}
                                cy={node.y}
                                r={lIdx === 3 ? 8 : 4}
                                fill="var(--color-accent-navy)"
                                initial={{ opacity: 0.1, scale: 1 }}
                                animate={getNodeAnimation(lIdx)}
                                transition={{
                                    duration: DURATION,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default NeuralNetwork;
