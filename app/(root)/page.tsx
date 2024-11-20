"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import abhiImg from "@/public/Abhi.png";
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

export default function IndexPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
                    <Image
                        src={abhiImg}
                        height={100}
                        width={100}
                        sizes="100vw"
                        className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[14rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="abhishek-img"
                    />
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Abhishek Jadhav
                    </h1>
                    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
                        Software Developer Engineer
                    </h3>
                    <Accordion
                        type="single"
                        collapsible
                        className="flex items-center w-full max-w-[35rem]"
                    >
                        <AccordionItem value="main-ques" className="flex-1">
                            <AccordionTrigger>
                                <p className="flex items-center">
                                    Can you guess my favorite coding problem?
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                &ldquo; 2Sum &rdquo;
                                <Icons.laughEmoji className="w-4 h-5 md:w-5 ml-2" />
                            </AccordionContent>
                        </AccordionItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                asChild
                                className="cursor-pointer"
                            >
                                <Icons.questionMark className="w-5 h-5 ml-3 text-muted-foreground " />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel className="flex items-center text-muted-foreground">
                                    <Icons.infoMark className="w-4 h-4 mr-2" />
                                    Hint: Abhishek
                                </DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Accordion>

                    <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
                        <Link
                            href={"https://github.com/Abhishekk24"}
                            target="_blank"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
                        </Link>
                        <Link
                            href={"/contact"}
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            <Icons.contact className="w-4 h-4 mr-2" /> Contact
                        </Link>
                        <button
                            onClick={handleOpenModal}
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.folder className="w-4 h-4 mr-2" /> Resume
                        </button>
                    </div>
                    <Icons.chevronDown className="h-6 w-6 mt-10" />
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
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.skills.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.skills.description}
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>
            <section
                id="experience"
                className="container space-y-6 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.experience.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.experience.description}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
                    {featuredExperiences.map((exp) => (
                        <ProjectCard key={exp.id} project={exp} />
                    ))}
                </div>
                <Link href="/experience" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>
            <section
                id="contributions"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.contributions.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.contributions.description}
                    </p>
                </div>
                <div className="mx-auto justify-center gap-4  md:w-full lg:grid-cols-3">
                    <ContributionCard contributions={featuredContributions} />
                </div>
                <Link href="/contributions" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>
        </>
    );
}
