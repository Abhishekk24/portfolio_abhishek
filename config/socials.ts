import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@Abhishekk24",
        icon: Icons.gitHub,
        link: "https://github.com/Abhishekk24",
    },
    {
        name: "LinkedIn",
        username: "Abhishek Jadhav",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/abhishekkjadhav/",
    },
    {
        name: "Gmail",
        username: "heyyabhishekjadhav",
        icon: Icons.gmail,
        link: "mailto:heyyabhishekjadhav@gmail.com",
    },
];
