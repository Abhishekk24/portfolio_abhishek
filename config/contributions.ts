export interface contributionsInterface {
    repo: string;
    contibutionDescription: string;
    repoOwner: string;
    link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
    {
        repo: "AOH_INNOVISON",
        contibutionDescription:
            "Improved the UI component to showcase the platform and user friendly UX.",
        repoOwner: "INNOVISION",
        link: "https://github.com/NimbalkarSoham/AOH_INNOVISION/pull/3",
    },
    {
        repo: "SUD-Stationary-Supply-Management",
        contibutionDescription:
            "Added reCaptcha to enhance the security of application.",
        repoOwner: "SUD",
        link: "https://github.com/NimbalkarSoham/SUD-Stationary-Supply-Management/pull/60",
    },
    {
        repo: "SUD-Stationary-Supply-Management",
        contibutionDescription:
            "Added 2FA for advanced secure application. ",
        repoOwner: "SUD",
        link: "https://github.com/NimbalkarSoham/SUD-Stationary-Supply-Management/pull/61",
    },
];

export const featuredContributions: contributionsInterface[] =
    contributionsUnsorted.slice(0, 3);
