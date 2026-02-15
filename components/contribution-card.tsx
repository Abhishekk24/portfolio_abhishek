"use client";

import React from "react";
import Link from "next/link";

import { contributionsInterface } from "@/config/contributions";
import { Icons } from "./icons";
import TiltEffect from "@/components/tilt-effect";

interface ContributionCardProps {
    contributions: contributionsInterface[];
}

export default function ContributionCard({
    contributions,
}: ContributionCardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((contribution, id) => (
                <TiltEffect key={id} intensity={8}>
                    <Link
                        href={contribution.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block h-full"
                    >
                        <div className="relative h-full min-h-[200px] rounded-md border border-border bg-card p-5 hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md flex flex-col">
                            <Icons.externalLink
                                size={20}
                                className="absolute top-4 right-4 text-muted-foreground opacity-70"
                                aria-hidden
                            />
                            <div className="flex flex-1 flex-col gap-4 pr-8">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-semibold text-foreground line-clamp-2 flex items-center gap-2 min-w-0">
                                        <Icons.gitRepoIcon size={18} className="shrink-0 text-muted-foreground" />
                                        <span className="truncate">{contribution.repo}</span>
                                    </h3>
                                    <Icons.gitBranch size={18} className="shrink-0 text-muted-foreground" />
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                                    {contribution.contibutionDescription}
                                </p>
                                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-auto">
                                    <Icons.gitOrgBuilding size={15} className="shrink-0" />
                                    <span className="truncate">{contribution.repoOwner}</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </TiltEffect>
            ))}
        </div>
    );
}
