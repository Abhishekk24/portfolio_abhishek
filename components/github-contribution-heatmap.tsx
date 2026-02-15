"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    {
        ssr: false,
        loading: () => (
            <div className="rounded-md border border-border bg-card p-6 min-h-[280px] flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading contribution graph...</p>
            </div>
        ),
    }
);

const GITHUB_USERNAME = "Abhishekk24";

export default function GitHubContributionHeatmap() {
    const githubUrl = siteConfig.links?.github ?? `https://github.com/${GITHUB_USERNAME}`;

    return (
        <div className="mx-auto w-full max-w-[64rem] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                    Contribution activity
                </h3>
                <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline"
                >
                    View full profile on GitHub →
                </Link>
            </div>
            <div className="rounded-md border border-border bg-card p-4 md:p-6 overflow-x-auto">
                <GitHubCalendar
                    username={GITHUB_USERNAME}
                    year="last"
                    errorMessage="Unable to load contribution graph."
                    theme={{
                        light: ["#1a1a1a", "hsl(38 92% 35%)", "hsl(38 92% 45%)", "hsl(38 92% 55%)", "hsl(38 92% 65%)"],
                        dark: ["#0d1117", "hsl(38 92% 30%)", "hsl(38 92% 45%)", "hsl(38 92% 55%)", "hsl(38 92% 65%)"],
                    }}
                    labels={{
                        totalCount: "{{count}} contributions in the last year",
                        legend: {
                            less: "Less",
                            more: "More",
                        },
                    }}
                />
            </div>
        </div>
    );
}
