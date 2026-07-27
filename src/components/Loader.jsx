import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useTransform, useMotionValue, animate } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const progress = useMotionValue(0);

    // X moves from 0 to 50 (where the minimum is in the center of the U)
    const x = useTransform(progress, [0, 1], [0, 50]);
    
    // Parabola equation (U-shape centered at 50): y = 90 - ((x - 50)/50)^2 * 80
    // At x=0, y=10. At x=50, y=90. At x=100, y=10.
    const y = useTransform(x, (currX) => 90 - Math.pow((currX - 50) / 50, 2) * 80);

    // Tangent Line (Slope)
    const tangentX1 = useTransform(x, (currX) => {
        const slope = -3.2 * ((currX - 50) / 50);
        const theta = Math.atan(slope);
        return currX - 12 * Math.cos(theta);
    });
    const tangentY1 = useTransform(x, (currX) => {
        const slope = -3.2 * ((currX - 50) / 50);
        const theta = Math.atan(slope);
        const currY = 90 - Math.pow((currX - 50) / 50, 2) * 80;
        return currY - 12 * Math.sin(theta);
    });
    const tangentX2 = useTransform(x, (currX) => {
        const slope = -3.2 * ((currX - 50) / 50);
        const theta = Math.atan(slope);
        return currX + 12 * Math.cos(theta);
    });
    const tangentY2 = useTransform(x, (currX) => {
        const slope = -3.2 * ((currX - 50) / 50);
        const theta = Math.atan(slope);
        const currY = 90 - Math.pow((currX - 50) / 50, 2) * 80;
        return currY + 12 * Math.sin(theta);
    });

    const lossValue = useTransform(x, (currX) => {
        const rawLoss = Math.pow((currX - 50) / 50, 2); // normalize 1 to 0
        return rawLoss.toFixed(4);
    });

    const lossRef = useRef(null);
    useEffect(() => {
        const unsubscribe = lossValue.onChange((v) => {
            if (lossRef.current) lossRef.current.textContent = v;
        });
        return () => unsubscribe();
    }, [lossValue]);

    useEffect(() => {
        // Total animation = 1.1s (roll) + 0.2s (hold) + 0.2s (fade) = 1.5s exact.
        const controls = animate(progress, 1, {
            duration: 1.1,
            ease: "easeOut",
            onComplete: () => {
                setTimeout(() => {
                    setIsVisible(false);
                    setTimeout(onComplete, 200); 
                }, 200); 
            }
        });
        return () => controls.stop();
    }, [progress, onComplete]);

    const parabolaPath = useMemo(() => {
        let p = `M 0 10 `;
        for(let i=0; i<=100; i+=2) {
            const py = 90 - Math.pow((i - 50) / 50, 2) * 80;
            p += `L ${i} ${py} `;
        }
        return p;
    }, []);

    const handleSkip = () => {
        setIsVisible(false);
        onComplete();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="fixed inset-0 z-[100] cursor-pointer bg-[var(--color-bg-paper)] flex items-center justify-center px-6"
                    onClick={handleSkip}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    <div className="w-full max-w-lg aspect-video relative flex flex-col justify-end gap-2 border-l border-b border-[var(--color-border-subtle)] p-4">
                        
                        {/* Axes labels */}
                        <div className="absolute -left-12 top-0 h-full flex flex-col justify-between py-4 text-[10px] font-mono text-[var(--color-text-secondary)]">
                            <span>High</span>
                            <span>Low</span>
                        </div>
                        <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] font-mono text-[var(--color-text-secondary)]">
                            <span>Start</span>
                            <span>Global Minimum</span>
                        </div>

                        {/* Chart Area */}
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Grid lines */}
                            <line x1="0" y1="10" x2="100" y2="10" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="2 2" />
                            <line x1="0" y1="50" x2="100" y2="50" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="2 2" />
                            <line x1="0" y1="90" x2="100" y2="90" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="2 2" />
                            
                            <line x1="50" y1="0" x2="50" y2="100" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="2 2" />

                            {/* Parabola Curve */}
                            <path 
                                d={parabolaPath}
                                fill="none"
                                stroke="var(--color-border-subtle)"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />

                            {/* Tangent Line (Slope) */}
                            <motion.line 
                                x1={tangentX1}
                                y1={tangentY1}
                                x2={tangentX2}
                                y2={tangentY2}
                                stroke="var(--color-accent-ochre)"
                                strokeWidth="1.5"
                                vectorEffect="non-scaling-stroke"
                            />

                            {/* Gradient Descent Ball */}
                            <motion.circle 
                                cx={x}
                                cy={y}
                                r="2.5"
                                fill="var(--color-accent-navy)"
                            />

                            {/* Target Minimum Reticle */}
                            <circle cx="50" cy="90" r="3.5" fill="none" stroke="var(--color-accent-navy)" strokeWidth="0.5" strokeDasharray="1 1" />
                        </svg>

                        {/* Loss Metric Annotation */}
                        <motion.div 
                            className="absolute top-4 right-4 flex flex-col gap-1 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] p-2 rounded-sm text-[10px] font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-text-secondary)]">Optimizing (SGD)...</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-text-primary)]">
                                    Loss: <span ref={lossRef}>1.0000</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
