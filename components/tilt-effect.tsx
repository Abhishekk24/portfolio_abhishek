"use client";

import { useRef, useEffect, ReactNode } from "react";

interface TiltEffectProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export default function TiltEffect({
    children,
    className = "",
    intensity = 15,
}: TiltEffectProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -intensity;
            const rotateY = ((x - centerX) / centerX) * intensity;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = () => {
            element.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [intensity]);

    return (
        <div
            ref={ref}
            className={`transition-transform duration-300 ease-out ${className}`}
            style={{ transformStyle: "preserve-3d" }}
        >
            {children}
        </div>
    );
}


