export interface contributionsInterface {
    repo: string;
    contibutionDescription: string;
    repoOwner: string;
    link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
    {
        repo: "cyrene-web",
        contibutionDescription:
            "Lead development of CyreneAI webapp — decentralized AI agent platform on Solana for interacting with AI agents.",
        repoOwner: "CyreneAI",
        link: "https://github.com/Abhishekk24/cyrene-web",
    },
    {
        repo: "Stories.fun",
        contibutionDescription:
            "Contributed to Web3 storytelling platform — building decentralized narrative experiences.",
        repoOwner: "Stories.fun",
        link: "https://stories.fun",
    },
    {
        repo: "BUGZER",
        contibutionDescription:
            "Developer tool to catch bugs before they catch you. TypeScript-based debugging and error tracking.",
        repoOwner: "Abhishekk24",
        link: "https://github.com/Abhishekk24/BUGZER",
    },
    {
        repo: "food-supply-chain",
        contibutionDescription:
            "Web3-based food supply chain tracker — transparency and traceability for supply chain. Live on Vercel.",
        repoOwner: "Abhishekk24",
        link: "https://github.com/Abhishekk24/food-supply-chain",
    },
    {
        repo: "sky_viewer",
        contibutionDescription:
            "Systems-level Rust project — low-level systems programming and performance-focused tooling.",
        repoOwner: "Abhishekk24",
        link: "https://github.com/Abhishekk24/sky_viewer",
    },
    {
        repo: "Warehouse Connect",
        contibutionDescription:
            "Smart logistics to minimize food wastage — MiniProject with live deployment on Vercel.",
        repoOwner: "Abhishekk24",
        link: "https://github.com/Abhishekk24/MiniProject_Sem5",
    },
];

export const featuredContributions: contributionsInterface[] =
    contributionsUnsorted.slice(0, 3);
