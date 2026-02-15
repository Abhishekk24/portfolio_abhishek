"use client";

import React from "react";

import { skillsInterface } from "@/config/skills";
import Rating from "@/components/rating";
import TiltEffect from "@/components/tilt-effect";
import { Icons } from "@/components/icons";

const SKILL_ICON_KEYS = [
    "nextjs", "react", "flask", "firebase", "express", "nodejs", "mongodb",
    "typescript", "javascript", "tensorflow", "opencv", "streamlit", "tailwindcss",
    "amazonaws", "bootstrap", "mysql", "gcloud", "vercel",
] as const;

type SkillIconKey = (typeof SKILL_ICON_KEYS)[number];

const iconMap: Partial<Record<SkillIconKey, React.ComponentType<{ size?: number; className?: string }>>> = {
    nextjs: Icons.nextjs,
    react: Icons.react,
    flask: Icons.flask,
    firebase: Icons.firebase,
    express: Icons.express,
    nodejs: Icons.nodejs,
    mongodb: Icons.mongodb,
    typescript: Icons.typescript,
    javascript: Icons.javascript,
    tensorflow: (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)["tensorflow "] ?? Icons.laptop,
    opencv: (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)["opencv "] ?? Icons.laptop,
    streamlit: (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)["streamlit "] ?? Icons.laptop,
    tailwindcss: Icons.tailwindcss,
    amazonaws: Icons.amazonaws,
    bootstrap: Icons.bootstrap,
    mysql: Icons.mysql,
    gcloud: (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)["gcloud "] ?? Icons.laptop,
    vercel: Icons.vercel,
};

function getSkillIcon(iconKey: string) {
    return iconMap[iconKey as SkillIconKey] ?? Icons.laptop;
}

interface SkillsCardProps {
    skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {skills.map((skill, id) => {
                const IconComponent = getSkillIcon(skill.iconKey);
                return (
                    <TiltEffect key={id} intensity={8}>
                        <div
                            className="relative overflow-hidden rounded-md border border-border bg-card p-2 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                        >
                            <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
                                <IconComponent size={44} className="text-primary/80" />
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {skill.description}
                                    </p>
                                    <Rating stars={skill.rating} />
                                </div>
                            </div>
                        </div>
                    </TiltEffect>
                );
            })}
        </div>
    );
}
