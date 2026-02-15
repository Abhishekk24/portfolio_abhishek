"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";

const KONAMI_SEQUENCE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
];

export default function EasterEggs() {
    const [clickCount, setClickCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [konamiCode, setKonamiCode] = useState<string[]>([]);

    useEffect(() => {
        // Konami Code
        const handleKeyDown = (e: KeyboardEvent) => {
            setKonamiCode((prev) => {
                const newCode = [...prev, e.code];
                if (newCode.length > KONAMI_SEQUENCE.length) {
                    newCode.shift();
                }

                if (
                    newCode.length === KONAMI_SEQUENCE.length &&
                    newCode.every((key, index) => key === KONAMI_SEQUENCE[index])
                ) {
                    setShowMessage(true);
                    setTimeout(() => setShowMessage(false), 5000);
                    return [];
                }

                return newCode;
            });
        };

        // Click counter easter egg
        const handleClick = () => {
            setClickCount((prev) => {
                const newCount = prev + 1;
                if (newCount === 10) {
                    console.log(
                        "%c🎉 You clicked 10 times! You're persistent! 🎉",
                        "color: #3b82f6; font-size: 20px; font-weight: bold;"
                    );
                } else if (newCount === 50) {
                    console.log(
                        "%c🔥 50 clicks! Are you testing my patience? 😄",
                        "color: #ef4444; font-size: 20px; font-weight: bold;"
                    );
                } else if (newCount === 100) {
                    console.log(
                        "%c💎 100 CLICKS! You're a legend! Here's a secret: I appreciate your dedication! 💎",
                        "color: #10b981; font-size: 24px; font-weight: bold;"
                    );
                }
                return newCount;
            });
        };

        // Console message
        console.log(
            "%c👋 Hey there, curious developer! 👋\n\n" +
                "You found the console! 🎉\n\n" +
                "Try these easter eggs:\n" +
                "• Click anywhere 10, 50, or 100 times\n" +
                "• Type the Konami code: ↑↑↓↓←→←→BA\n" +
                "• Look for hidden interactions on the page\n\n" +
                "Built with ❤️ by Abhishek",
            "color: #3b82f6; font-size: 14px; font-weight: bold;"
        );

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClick);
        };
    }, []);

    if (!showMessage) return null;

    return (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] animate-bounce">
            <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
                <Icons.laughEmoji className="w-6 h-6" />
                <span className="font-bold text-lg">
                    🎮 Konami Code Activated! You&apos;re awesome! 🎮
                </span>
            </div>
        </div>
    );
}


