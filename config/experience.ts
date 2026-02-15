import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    description?: string;
    mediaArr: { type: "image" | "video"; url: string }[];
}

interface DescriptionDetailsInterface {
    paragraphs: string[];
    bullets: string[];
}

export interface ExperienceInterface {
    id: string;
    type: ValidExpType;
    companyName: string;
    category: ValidCategory[];
    shortDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack: ValidSkills[];
    startDate: Date;
    endDate: Date;
    companyLogoImg: any;
    descriptionDetails: DescriptionDetailsInterface;
    pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
    {
        id: "cyreneai",
        companyName: "CyreneAI",
        type: "Professional",
        category: ["Full Stack", "Web3", "AI-ML"],
        shortDescription:
            "Lead Software Developer building decentralized AI agent infrastructure on Solana — working across DePIN, tokenization, and autonomous agent systems. CyreneAI webapp for interacting with AI agents.",
        websiteLink: "https://cyreneai.com",
        githubLink: "https://github.com/Abhishekk24/cyrene-web",
        techStack: ["Next.js", "React", "Typescript", "Node.js", "Firebase"],
        startDate: new Date("2024-06-01"),
        endDate: new Date("2025-12-31"),
        companyLogoImg: "/CyreneAI_logo_square.png",
        pagesInfoArr: [
            {
                title: "CyreneAI",
                description: "Decentralized AI agent platform on Solana",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_1.png" },
                    { type: "image", url: "/experience/vinrenterprises/vinr_2.png" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Lead Software Developer at CyreneAI, building decentralized AI agent infrastructure on Solana. Working across DePIN, tokenization, and autonomous agent systems.",
                "Building the CyreneAI webapp for interacting with AI agents — TypeScript, React, Next.js, and Solana.",
            ],
            bullets: [
                "Decentralized AI agent platform on Solana",
                "DePIN, tokenization, and autonomous agent systems",
                "Webapp for interacting with AI agents",
            ],
        },
    },
    {
        id: "star-union-dai-ichi",
        companyName: "Star Union Dai-Ichi Life Insurance",
        type: "Professional",
        category: ["Full Stack", "AI-ML", "Web Dev"],
        shortDescription:
            "Lead SDE Intern — built AI-powered avatars and enterprise web solutions. Worked on full-stack applications and AI/ML integrations for insurance and internal tools.",
        techStack: ["React", "Next.js", "Node.js", "Typescript", "MongoDB", "python"],
        startDate: new Date("2023-06-01"),
        endDate: new Date("2024-05-01"),
        companyLogoImg: "/experience/rakshanetra/logo.png",
        pagesInfoArr: [
            {
                title: "Enterprise & AI Solutions",
                description: "AI-powered avatars and web solutions",
                mediaArr: [
                    { type: "image", url: "/experience/rakshanetra/a1.jpeg" },
                    { type: "image", url: "/experience/rakshanetra/a2.jpeg" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Lead SDE Intern at Star Union Dai-Ichi Life Insurance. Built AI-powered avatars and enterprise web solutions, working on full-stack applications and AI/ML integrations.",
            ],
            bullets: [
                "AI-powered avatars and enterprise web solutions",
                "Full-stack development and internal tools",
                "Collaboration with cross-functional teams",
            ],
        },
    },
    {
        id: "stories-fun",
        companyName: "Stories.fun",
        type: "Professional",
        category: ["Web3", "Full Stack", "Web Dev"],
        shortDescription:
            "Contributed to Stories.fun — a Web3 storytelling platform. Building decentralized narrative experiences and community-driven content.",
        websiteLink: "https://stories.fun",
        techStack: ["React", "Next.js", "Typescript", "Node.js"],
        startDate: new Date("2024-01-01"),
        endDate: new Date("2024-12-01"),
        companyLogoImg: "/stories.png",
        pagesInfoArr: [
            {
                title: "Stories.fun",
                description: "Web3 storytelling platform",
                mediaArr: [
                    { type: "image", url: "/experience/warehouse/18.png" },
                    { type: "image", url: "/experience/warehouse/19.png" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Contributed to Stories.fun, a Web3 storytelling platform. Building decentralized narrative experiences and community-driven content.",
            ],
            bullets: [
                "Web3 storytelling platform (contributor)",
                "Decentralized narrative experiences",
            ],
        },
    },
    {
        id: "Warehouse-Connect",
        companyName: "Warehouse Connect",
        type: "Personal Project",
        category: ["Supply Chain Management ", "Logistics", "Full Stack"],
        shortDescription:
            "Smart logistics platform to minimize food wastage — connects organizations with available warehouse spaces. Real-time availability, map-based search, and analytics. Live on Vercel.",
        websiteLink: "https://warehouse-connect.vercel.app",
        githubLink: "https://github.com/Abhishekk24/MiniProject_Sem5",
        techStack: ["Next.js", "Node.js", "express.js", "MongoDB", "Javascript"],
        startDate: new Date("2023-09-10"),
        endDate: new Date("2023-11-05"),
        companyLogoImg: "/experience/warehouse/logo.png",
        pagesInfoArr: [
            {
                title: "Warehouse Connect",
                description: "Live Warehouse Status · Online Payment · Logistics",
                mediaArr: [
                    { type: "image", url: "/experience/warehouse/18.png" },
                    { type: "image", url: "/experience/warehouse/19.png" },
                    { type: "image", url: "/experience/warehouse/20.png" },
                    { type: "image", url: "/experience/warehouse/21.png" },
                    { type: "image", url: "/experience/warehouse/22.png" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Warehouse Connect is a web-based platform that addresses inefficiencies in the food supply chain by enabling effective sharing and utilization of vacant warehouse spaces. Connects food suppliers, government agencies, and warehouse owners to reduce food wastage.",
            ],
            bullets: [
                "Real-time availability and warehouse listings",
                "Map-based search and geolocation",
                "Inventory management and analytics",
                "Live at warehouse-connect.vercel.app",
            ],
        },
    },
    {
        id: "BUGZER",
        companyName: "BUGZER",
        type: "Personal Project",
        category: ["Full Stack", "Web Dev"],
        shortDescription:
            "Developer tool to catch bugs before they catch you. TypeScript-based debugging and error-tracking for earlier, reliable bug detection.",
        githubLink: "https://github.com/Abhishekk24/BUGZER",
        techStack: ["Typescript", "Next.js", "React", "Node.js"],
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-01"),
        companyLogoImg: "/experience/graphai/logo.png",
        pagesInfoArr: [
            {
                title: "BUGZER",
                description: "Catch bugs before they catch you",
                mediaArr: [{ type: "image", url: "/experience/graphai/logo.png" }],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "BUGZER is a developer tool built in TypeScript to catch bugs before they catch you — enabling earlier and more reliable bug detection in the development workflow.",
            ],
            bullets: [
                "TypeScript-based debugging tool",
                "Error tracking and early bug detection",
            ],
        },
    },
    {
        id: "food-supply-chain",
        companyName: "food-supply-chain",
        type: "Personal Project",
        category: ["Web3", "Full Stack", "Supply Chain Management "],
        shortDescription:
            "Web3-based food supply chain tracker for transparency and traceability. Live deployment on Vercel for end-to-end supply chain visibility.",
        websiteLink: "https://food-supply-chain-gilt.vercel.app",
        githubLink: "https://github.com/Abhishekk24/food-supply-chain",
        techStack: ["Next.js", "React", "Typescript", "Node.js"],
        startDate: new Date("2024-03-01"),
        endDate: new Date("2024-06-01"),
        companyLogoImg: "/experience/warehouse/logo.png",
        pagesInfoArr: [
            {
                title: "Food Supply Chain",
                description: "Web3 supply chain tracker — Live on Vercel",
                mediaArr: [
                    { type: "image", url: "/experience/warehouse/20.png" },
                    { type: "image", url: "/experience/warehouse/21.png" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Web3-based food supply chain tracker bringing transparency and traceability to supply chains. Live at food-supply-chain-gilt.vercel.app.",
            ],
            bullets: [
                "Web3 transparency and traceability",
                "End-to-end supply chain visibility",
                "Live on Vercel",
            ],
        },
    },
    {
        id: "RakshaNetra",
        companyName: "RakshaNetra",
        type: "Personal Project",
        category: ["IOT", "Full Stack", "AI-ML"],
        shortDescription:
            "IoT-based accident detection and alert system for fires, gas leaks, and road accidents. Integrates sensors and ML for real-time detection and automated alerts.",
        websiteLink: "https://rakshanetra.in",
        techStack: ["React", "MongoDB", "Firebase", "clerk", "Flask", "python"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-10-15"),
        companyLogoImg: "/experience/rakshanetra/logo.png",
        pagesInfoArr: [
            {
                title: "User Page",
                description: "",
                mediaArr: [
                    { type: "image", url: "/experience/rakshanetra/u1.jpeg" },
                    { type: "image", url: "/experience/rakshanetra/u2.jpeg" },
                    { type: "image", url: "/experience/rakshanetra/u3.jpeg" },
                ],
            },
            {
                title: "Admin Dashboard",
                description: "Realtime dashboard with user location and feedback.",
                mediaArr: [
                    { type: "image", url: "/experience/rakshanetra/a1.jpeg" },
                    { type: "image", url: "/experience/rakshanetra/a2.jpeg" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "RakshaNetra is an IoT-based system designed to detect, prevent, and respond to critical emergencies such as fires, gas leaks, and road accidents, with ML-powered analysis and real-time alerts.",
            ],
            bullets: [
                "Real-time detection and alerts",
                "Predictive maintenance with ML",
                "Remote monitoring and cloud storage",
            ],
        },
    },
    {
        id: "vinr-enterprises",
        companyName: "Vinr Enterprises",
        type: "Professional",
        category: ["Web Dev", "Full Stack", "UI/UX"],
        shortDescription:
            "Designed and built professional websites using Next.js and React — high performance, scalability, and seamless UX. Builtdesign's Blogs site with Netlify CMS.",
        websiteLink: "https://vinrenterprises.com",
        techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
        startDate: new Date("2023-12-01"),
        endDate: new Date("2024-06-01"),
        companyLogoImg: "/experience/vinrenterprises/logo.png",
        pagesInfoArr: [
            {
                title: "Landing Page",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_1.png" },
                    { type: "image", url: "/experience/vinrenterprises/vinr_2.png" },
                    { type: "image", url: "/experience/vinrenterprises/vinr_3.png" },
                ],
            },
            {
                title: "Blogs",
                description: "Automated service to update daily blogs",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_10.png" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "At VINR Enterprises, I designed and maintained professional websites using Next.js and React, ensuring high performance, scalability, and a seamless user experience. Automated deployment with GitHub Actions and Vercel.",
            ],
            bullets: [
                "Next.js, React, Tailwind CSS",
                "Firebase Auth and Firestore",
                "CI/CD with GitHub Actions and Vercel",
            ],
        },
    },
];

export const featuredExperiences = Experiences.slice(0, 3);
