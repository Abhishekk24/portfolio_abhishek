"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import ChipContainer from "@/components/chip-container";
import { ExperienceInterface } from "@/config/experience";
import TiltEffect from "@/components/tilt-effect";

interface ProjectCardProps {
    project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <TiltEffect intensity={10}>
            <div className="relative p-6 max-w-sm bg-card border border-border rounded-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:shadow-none">
            <div className="relative w-full h-[200px] overflow-hidden rounded-md bg-muted flex items-center justify-center p-4">
                <Image
                    className="object-contain"
                    src={project.companyLogoImg}
                    alt=""
                    fill
                    sizes="(max-width: 384px) 100vw, 384px"
                />
            </div>
            <div className="pt-5 space-y-3">
                <h5 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.companyName}
                </h5>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {project.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap">
                    <ChipContainer textArr={project.category} />
                </div>
                <Link href={`/experience/${project.id}`}>
                    <Button variant="default" size="sm" className="mt-2 rounded-md">
                        Read more
                        <Icons.chevronRight className="w-4 ml-1" />
                    </Button>
                </Link>
            </div>
            <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-muted border border-border">
                {project.type === "Personal Project" ? (
                    <Icons.userFill className="h-4 w-4 text-muted-foreground" />
                ) : (
                    <Icons.work className="h-4 w-4 text-muted-foreground" />
                )}
            </div>
        </div>
        </TiltEffect>
    );
}
