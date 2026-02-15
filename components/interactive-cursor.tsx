"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
}

export default function InteractiveCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if device supports touch
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        
        // Don't render on touch devices
        if (isTouchDevice) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Create new particles
            for (let i = 0; i < 3; i++) {
                particlesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    size: Math.random() * 3 + 2,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw cursor trail
            const mouse = mouseRef.current;
            ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
            ctx.fill();

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= 0.02;
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                if (particle.life > 0) {
                    const alpha = particle.life;
                    ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                    return true;
                }
                return false;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
            style={{ mixBlendMode: "screen" }}
        />
    );
}

