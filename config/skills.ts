import { Icons } from "@/components/icons";


export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Next.js",
        description:
            "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
        rating: 5,
        icon: Icons.nextjs,
    },
    {
        name: "React",
        description:
            "Craft interactive user interfaces using components, state, props, and virtual DOM.",
        rating: 5,
        icon: Icons.react,
    },
    {
        name: "Flask",
        description:
            "Develop lightweight and scalable web applications with Flask, a minimalist Python framework.",
        rating: 5,
        icon: Icons.flask,
    },

    {
        name: "Firebase",
        description:
            "Power your apps with Firebase, a comprehensive platform for backend and real-time data solutions.",
        rating: 4,
        icon: Icons.firebase,
    },
    {
        name: "express.js",
        description:
            "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
        rating: 5,
        icon: Icons.express,
    },
    {
        name: "Node.js",
        description:
            "Run JavaScript on the server side, enabling dynamic and responsive applications.",
        rating: 5,
        icon: Icons.nodejs,
    },
    {
        name: "MongoDB",
        description:
            "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
        rating: 5,
        icon: Icons.mongodb,
    },
    {
        name: "Typescript",
        description:
            "Enhance JavaScript with static types, making code more understandable and reliable.",
        rating: 5,
        icon: Icons.typescript,
    },
    {
        name: "Javascript",
        description:
            "Create interactive and dynamic web experiences with the versatile scripting language.",
        rating: 5,
        icon: Icons.javascript,
    },

    {
        name: "TensorFlow",
        description:
            "Build and train machine learning models effortlessly with TensorFlow, a leading open-source framework.",
        rating: 4,
        icon: Icons.tensorflow,
    },
    {
        name: "OpenCV",
        description:
            "Empower your projects with OpenCV, a powerful library for computer vision and image processing.",
        rating: 4,
        icon: Icons.opencv,
    },
    {
        name: "Streamlit",
        description:
            "Quickly build interactive web apps for data and machine learning with Streamlit.",
        rating: 4,
        icon: Icons.streamlit,
    },
    {
        name: "Tailwind CSS",
        description:
            "Design beautiful, modern websites faster with a utility-first CSS framework.",
        rating: 5,
        icon: Icons.tailwindcss,
    },
    {
        name: "AWS",
        description:
            "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
        rating: 3,
        icon: Icons.amazonaws,
    },
    {
        name: "Bootstrap",
        description:
            "Quickly create responsive and appealing web designs using a popular CSS framework.",
        rating: 2,
        icon: Icons.bootstrap,
    },
    {
        name: "MySQL",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 2,
        icon: Icons.mysql,
    },
    {
        name: "Google CLoud",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 2,
        icon: Icons.gcloud,
    },
    {
        name: "Vercel",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 4,
        icon: Icons.vercel,
    },
];

export const skills = skillsUnsorted
    .slice()
    .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
