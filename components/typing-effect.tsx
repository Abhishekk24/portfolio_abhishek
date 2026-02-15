"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
    text: string;
    speed?: number;
    className?: string;
    loop?: boolean;
    delay?: number;
}

export default function TypingEffect({
    text,
    speed = 100,
    className = "",
    loop = false,
    delay = 0,
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (delay > 0 && !hasStarted) {
            const timeout = setTimeout(() => {
                setHasStarted(true);
            }, delay);
            return () => clearTimeout(timeout);
        }
        if (delay === 0) {
            setHasStarted(true);
        }
    }, [delay, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        if (isDeleting) {
            if (currentIndex > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(text.substring(0, currentIndex - 1));
                    setCurrentIndex(currentIndex - 1);
                }, speed / 2);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
            }
        } else {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(text.substring(0, currentIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                // Hide cursor after typing is complete
                setTimeout(() => setShowCursor(false), 500);
                
                if (loop) {
                    // Wait before starting to delete
                    const timeout = setTimeout(() => {
                        setIsDeleting(true);
                        setShowCursor(true);
                    }, 2000);
                    return () => clearTimeout(timeout);
                }
            }
        }
    }, [currentIndex, isDeleting, text, speed, loop, hasStarted]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && <span className="animate-pulse">|</span>}
        </span>
    );
}

