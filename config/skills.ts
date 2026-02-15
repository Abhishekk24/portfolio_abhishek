export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    iconKey: string;
}

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Next.js",
        description:
            "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
        rating: 5,
        iconKey: "nextjs",
    },
    {
        name: "React",
        description:
            "Craft interactive user interfaces using components, state, props, and virtual DOM.",
        rating: 5,
        iconKey: "react",
    },
    {
        name: "Flask",
        description:
            "Develop lightweight and scalable web applications with Flask, a minimalist Python framework.",
        rating: 5,
        iconKey: "flask",
    },
    {
        name: "Firebase",
        description:
            "Power your apps with Firebase, a comprehensive platform for backend and real-time data solutions.",
        rating: 4,
        iconKey: "firebase",
    },
    {
        name: "express.js",
        description:
            "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
        rating: 5,
        iconKey: "express",
    },
    {
        name: "Node.js",
        description:
            "Run JavaScript on the server side, enabling dynamic and responsive applications.",
        rating: 5,
        iconKey: "nodejs",
    },
    {
        name: "MongoDB",
        description:
            "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
        rating: 5,
        iconKey: "mongodb",
    },
    {
        name: "Typescript",
        description:
            "Enhance JavaScript with static types, making code more understandable and reliable.",
        rating: 5,
        iconKey: "typescript",
    },
    {
        name: "Javascript",
        description:
            "Create interactive and dynamic web experiences with the versatile scripting language.",
        rating: 5,
        iconKey: "javascript",
    },
    {
        name: "TensorFlow",
        description:
            "Build and train machine learning models effortlessly with TensorFlow, a leading open-source framework.",
        rating: 4,
        iconKey: "tensorflow",
    },
    {
        name: "OpenCV",
        description:
            "Empower your projects with OpenCV, a powerful library for computer vision and image processing.",
        rating: 4,
        iconKey: "opencv",
    },
    {
        name: "Streamlit",
        description:
            "Quickly build interactive web apps for data and machine learning with Streamlit.",
        rating: 4,
        iconKey: "streamlit",
    },
    {
        name: "Tailwind CSS",
        description:
            "Design beautiful, modern websites faster with a utility-first CSS framework.",
        rating: 5,
        iconKey: "tailwindcss",
    },
    {
        name: "AWS",
        description:
            "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
        rating: 3,
        iconKey: "amazonaws",
    },
    {
        name: "Bootstrap",
        description:
            "Quickly create responsive and appealing web designs using a popular CSS framework.",
        rating: 2,
        iconKey: "bootstrap",
    },
    {
        name: "MySQL",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 2,
        iconKey: "mysql",
    },
    {
        name: "Google CLoud",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 2,
        iconKey: "gcloud",
    },
    {
        name: "Vercel",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 4,
        iconKey: "vercel",
    },
];

export const skills = skillsUnsorted
    .slice()
    .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
