"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SkillsCard from "@/components/skills-card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredSkills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { pagesConfig } from "@/config/pages";
import { featuredExperiences } from "@/config/experience";
import ProjectCard from "@/components/project-card";
import { featuredContributions } from "@/config/contributions";
import ContributionCard from "@/components/contribution-card";
import GitHubContributionHeatmap from "@/components/github-contribution-heatmap";
import Modal from "@/components/ui/modal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import FloatingParticles from "@/components/floating-particles";
import TiltEffect from "@/components/tilt-effect";
import TypingEffect from "@/components/typing-effect";
import EasterEggs from "@/components/easter-eggs";
import ScrollProgress from "@/components/scroll-progress";

export default function IndexPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageClickCount, setImageClickCount] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleImageClick = () => {
        setImageClickCount((prev) => {
            const newCount = prev + 1;
            if (newCount === 5) {
                setIsSpinning(true);
                setTimeout(() => setIsSpinning(false), 1000);
                console.log(
                    "%c🎉 You clicked my photo 5 times! You're really curious! 🎉",
                    "color: #3b82f6; font-size: 18px; font-weight: bold;"
                );
            }
            return newCount;
        });
    };

    return (
        <>
            <ScrollProgress />
            <SmoothCursor />
            <FloatingParticles />
            <EasterEggs />
            {/* Hero – full viewport, void background, Valiente-style */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/voidbg.jpg"
                        alt=""
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
                </div>
                <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-6 text-center px-6">
                    <TiltEffect intensity={8}>
                        <Image
                            src="/profile.jpeg"
                            height={160}
                            width={160}
                            sizes="160px"
                            onClick={handleImageClick}
                            className={`rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-2 border-primary/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary cursor-pointer ${
                                isSpinning ? "animate-spin" : ""
                            }`}
                            alt="Abhishek Jadhav"
                        />
                    </TiltEffect>
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-lg">
                        <TypingEffect text="Abhishek Jadhav" speed={150} loop={false} delay={0} />
                    </h1>
                    <p className="font-heading text-lg sm:text-xl md:text-2xl text-white/90 tracking-wide max-w-xl">
                        <TypingEffect text="Software Developer Engineer" speed={80} loop={false} delay={2500} />
                    </p>
                    <Accordion
                        type="single"
                        collapsible
                        className="flex items-center w-full max-w-[35rem] rounded-lg bg-white/5 border border-white/10 text-white/90 backdrop-blur-sm"
                    >
                        <AccordionItem value="main-ques" className="flex-1 border-white/10">
                            <AccordionTrigger className="text-white/90 hover:text-white hover:no-underline">
                                <p className="flex items-center">
                                    Can you guess my favorite coding problem?
                                </p>
                            </AccordionTrigger>
                            <AccordionContent className="text-white/80">
                                &ldquo; 2Sum &rdquo;
                                <Icons.laughEmoji className="w-4 h-5 md:w-5 ml-2 inline" />
                            </AccordionContent>
                        </AccordionItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                asChild
                                className="cursor-pointer text-white/70 hover:text-white"
                            >
                                <Icons.questionMark className="w-5 h-5 ml-3" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel className="flex items-center text-muted-foreground">
                                    <Icons.infoMark className="w-4 h-4 mr-2" />
                                    Hint: Abhishek
                                </DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Accordion>

                    <div className="flex flex-col mt-8 items-center justify-center sm:flex-row flex-wrap gap-3">
                        <TiltEffect intensity={5}>
                            <Link
                                href="https://github.com/Abhishekk24"
                                target="_blank"
                                rel="noreferrer"
                                className={cn(buttonVariants({ size: "lg" }), "bg-white text-black hover:bg-white/90 border-0 transition-all duration-300 hover:scale-105")}
                            >
                                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
                            </Link>
                        </TiltEffect>
                        <TiltEffect intensity={5}>
                            <Link
                                href="https://x.com/ajxhash"
                                target="_blank"
                                rel="noreferrer"
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/40 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105")}
                            >
                                <Icons.twitter className="w-4 h-4 mr-2" /> X
                            </Link>
                        </TiltEffect>
                        <TiltEffect intensity={5}>
                            <Link
                                href="https://www.linkedin.com/in/abhishekkjadhav/"
                                target="_blank"
                                rel="noreferrer"
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/40 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105")}
                            >
                                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
                            </Link>
                        </TiltEffect>
                        <TiltEffect intensity={5}>
                            <Link
                                href="/contact"
                                rel="noreferrer"
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/40 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105")}
                            >
                                <Icons.contact className="w-4 h-4 mr-2" /> Contact
                            </Link>
                        </TiltEffect>
                        <TiltEffect intensity={5}>
                            <button
                                onClick={handleOpenModal}
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/40 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105")}
                            >
                                <Icons.folder className="w-4 h-4 mr-2" /> Resume
                            </button>
                        </TiltEffect>
                    </div>
                    <a href="#skills" className="mt-12 inline-flex animate-bounce text-white/80 hover:text-white transition-colors">
                        <Icons.chevronDown className="h-8 w-8" />
                    </a>
                </div>
            </section>

            {/* Resume Modal */}
            {isModalOpen && (
                <Modal
                    title="Abhishek Jadhav's Resume"
                    description="View and download Abhishek Jadhav's resume."
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                >
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-[80vh]  rounded-md"
                        frameBorder="0"
                    ></iframe>
                </Modal>
            )}

            <section
                id="skills"
                className="container space-y-10 py-16 md:py-24 border-t border-border/50"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl tracking-tight">
                        {pagesConfig.skills.title}
                    </h2>
                    <p className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg">
                        {pagesConfig.skills.description}
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant="outline" size="lg" className="rounded-md border-border hover:bg-accent">
                        View All <Icons.chevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </section>
            <section
                id="experience"
                className="container space-y-10 py-16 md:py-24 bg-muted/30 dark:bg-muted/20 border-t border-border/50"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl tracking-tight">
                        {pagesConfig.experience.title}
                    </h2>
                    <p className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg">
                        {pagesConfig.experience.description}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3">
                    {featuredExperiences.map((exp) => (
                        <ProjectCard key={exp.id} project={exp} />
                    ))}
                </div>
                <Link href="/experience" className="flex justify-center">
                    <Button variant="outline" size="lg" className="rounded-md border-border hover:bg-accent">
                        View All <Icons.chevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </section>
            <section
                id="contributions"
                className="container space-y-10 py-16 md:py-24 border-t border-border/50"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl tracking-tight">
                        {pagesConfig.contributions.title}
                    </h2>
                    <p className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg">
                        {pagesConfig.contributions.description}
                    </p>
                </div>
                <div className="mx-auto w-full max-w-[64rem] space-y-12">
                    <ContributionCard contributions={featuredContributions} />
                    <GitHubContributionHeatmap />
                </div>
                <Link href="/contributions" className="flex justify-center">
                    <Button variant="outline" size="lg" className="rounded-md border-border hover:bg-accent">
                        View All <Icons.chevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </section>
        </>
    );
}
