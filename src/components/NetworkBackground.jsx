import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        canvas.width = width;
        canvas.height = height;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        const spacing = 60;
        const connectionDistance = 120;
        const baseOpacity = 0.15;
        const activeOpacity = 0.8;
        const accentColor = '201, 122, 61';
        const baseColor = '255, 255, 255';
        
        let nodes = [];
        
        const initNodes = () => {
            nodes = [];
            const cols = Math.floor(width / spacing) + 2;
            const rows = Math.floor(height / spacing) + 2;
            
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    nodes.push({
                        x: i * spacing,
                        y: j * spacing,
                        active: 0
                    });
                }
            }
        };

        initNodes();

        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            if (prefersReducedMotion) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initNodes();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            nodes.forEach(node => {
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance && !prefersReducedMotion) {
                    node.active = 1 - (distance / connectionDistance);
                } else {
                    node.active = Math.max(0, node.active - 0.05);
                }

                ctx.beginPath();
                ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
                if (node.active > 0) {
                    ctx.fillStyle = `rgba(${accentColor}, ${baseOpacity + (activeOpacity - baseOpacity) * node.active})`;
                } else {
                    ctx.fillStyle = `rgba(${baseColor}, ${baseOpacity})`;
                }
                ctx.fill();
            });

            if (!prefersReducedMotion) {
                for (let i = 0; i < nodes.length; i++) {
                    const n1 = nodes[i];
                    if (n1.active > 0) {
                        for (let j = i + 1; j < nodes.length; j++) {
                            const n2 = nodes[j];
                            if (n2.active > 0) {
                                const dist = Math.sqrt(Math.pow(n1.x - n2.x, 2) + Math.pow(n1.y - n2.y, 2));
                                if (dist < spacing * 1.5) {
                                    const lineOpacity = Math.min(n1.active, n2.active) * 0.5;
                                    ctx.beginPath();
                                    ctx.moveTo(n1.x, n1.y);
                                    ctx.lineTo(n2.x, n2.y);
                                    ctx.strokeStyle = `rgba(${accentColor}, ${lineOpacity})`;
                                    ctx.lineWidth = 1;
                                    ctx.stroke();
                                }
                            }
                        }
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};

export default NetworkBackground;
