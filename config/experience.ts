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
        id: "RakshaNetra",
        companyName: "RakshaNetra",
        type: "Professional",
        category: ["IOT", "Full Stack", "AI-ML"],
        shortDescription:
            "RakshaNetra is an IoT-based accident detection and alert system designed to address emergencies like fires, gas leaks, and road accidents. It integrates advanced sensors and machine learning to ensure real-time detection, predictive analysis, and automated alerts for quick response. The system enhances safety while being scalable and reliable in diverse environments.",
              websiteLink: "https://rakshanetra.in",
        techStack: [
            "React",
            "MongoDB",
            "Firebase",
            "clerk",
            "Flask",
        ],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-10-15"),
        companyLogoImg: "/experience/rakshanetra/logo.png",
        pagesInfoArr: [
            {
                title: "User Page",
                description: "",
                mediaArr: [
                    {type: "image" , url : "/experience/rakshanetra/u1.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/u2.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/u3.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/u4.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/u5.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/u6.jpeg"},
                    
                ],
            },
           
            {
                title: "Admin Dashboard",
                description: "Realtime dashboard with user location, current situations graphs and feedback form.",
                mediaArr: [
                    {type: "image" , url : "/experience/rakshanetra/a1.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/a2.jpeg"},
                    {type: "image" , url : "/experience/rakshanetra/a3.jpeg"},
                    
                    ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "RakshaNetra: IoT-Based Accident Detection, Prevention, and Alert System",
                "RakshaNetra is an advanced IoT-based system designed to detect, prevent, and respond to critical emergencies such as fires, gas leaks, and road accidents. The system integrates multiple sensors, including the DS18B20 temperature sensor for fire detection, the MQ2 gas sensor for smoke and gas leaks, and the MPU6050 accelerometer for accident impact detection. These sensors continuously monitor environmental parameters, providing real-time data to the ESP32 microcontroller, which processes the information and triggers alerts when thresholds are exceeded.",
                "The core of RakshaNetra's efficiency lies in its use of machine learning algorithms, such as Random Forest Regressor and Linear Regression, to analyze sensor data for anomaly detection and predictive maintenance. This enables the system to forecast potential hazards and alert users before emergencies escalate. In areas with limited internet connectivity, the ESP32 ensures seamless communication between components, maintaining system reliability.",
                "Key features of RakshaNetra include:"],
            bullets: [
                "Real-Time Detection and Alerts: Immediate detection of fires, gas leaks, or accidents, with automated alerts sent to emergency responders and authorities via email or other communication channels.",
                "Predictive Maintenance: Machine learning-powered analysis of sensor data to predict potential system failures and anomalies.",
                "Remote Monitoring: Cloud-based storage and visualization of real-time sensor data, accessible via a user-friendly web interface.",
                "Versatility and Scalability: Suitable for homes, offices, industrial facilities, and public spaces, with the ability to integrate into existing emergency frameworks.",
                "Robust Communication: Operates efficiently in remote areas with poor internet connectivity, ensuring uninterrupted safety monitoring."
            ],
        },
    },
    {
        id: "Warehouse-Connect",
        companyName: "Warehouse Connect",
        type: "Personal Project",
        category: ["Supply Chain Management ", "Logistics"],
        shortDescription:
            "Warehouse Connect is an online platform that optimizes food supply chain management by connecting organizations with available warehouse spaces to minimize food wastage. It features real-time availability, advanced search algorithms, and integration with regulatory authorities for seamless storage solutions",
             websiteLink:
            "https://warehouse-connectt.vercel.app/",
        techStack: ["Next.js", "Node.js","express.js", "MongoDB", "Javascript"],
        startDate: new Date("2023-09-10"),
        endDate: new Date("2023-11-05"),
        companyLogoImg: "/experience/warehouse/logo.png",
        pagesInfoArr: [
            {
                title: "Warehouse Connet",
                description: "Live Warehouse Status - Online Payment - Logistics",
                mediaArr: [
                    {type: "image" , url : "/experience/warehouse/18.png"},
                    {type: "image" , url : "/experience/warehouse/19.png"},
                    {type: "image" , url : "/experience/warehouse/20.png"},
                    {type: "image" , url : "/experience/warehouse/21.png"},
                    {type: "image" , url : "/experience/warehouse/22.png"},
                    
                    
                ],
            },
           
        ],
        descriptionDetails: {
            paragraphs: [
                `
Warehouse Connect is a transformative web-based platform that addresses inefficiencies in the food supply chain by enabling effective sharing and utilization of vacant warehouse spaces. This platform connects food suppliers, government agencies, and warehouse owners, streamlining storage processes and reducing food wastage. It ensures real-time availability, user-friendly navigation, and robust analytics to improve food distribution efficiency. By integrating modern technologies, Warehouse Connect aligns with sustainability goals and promotes resource optimization.`
,
"Key Features:"            
],
            bullets: [
                "User Registration and Profiles: Register and maintain detailed profiles for warehouse owners and organizations, fostering transparency and trust.",
                "Warehouse Listings: Easily list and explore available storage spaces with comprehensive details, including capacity and amenities.",
                "Map-Based Search: Locate nearby warehouses using geolocation services and map integration.",
                "Real-Time Availability: Display and book available warehouse spaces instantly.",
                "Inventory Management: Efficiently manage stored supplies through intuitive tools.",
                "Communication Tools: Engage with warehouse owners or users through in-app messaging and notifications.",
                "Data Analytics and Reports: Gain valuable insights into storage trends and warehouse utilization through advanced data visualization.",
            ],
        },
    },
    {
        id: "vid-craft",
        companyName: "VidCraft",
        type: "Personal Project",
        category: ["Smart Automation in AI/ML"],
        shortDescription:
            "Developing an AI/ML-powered solution to transform Press Information Bureau (PIB) press releases into engaging videos in 14 languages, enhancing accessibility and reader engagement.",
            websiteLink: "https://drive.google.com/drive/folders/1VSzNhJzul2p3rNIfiYBaxJP8G9le9Us1",
        techStack: [
            "python",
            "MongoDB",
        ],
        startDate: new Date("2023-09-01"),
        endDate: new Date("2023-10-01"),
        companyLogoImg: "/experience/vidcraft/logo.png",
        pagesInfoArr: [
            {
                title: "Working of VidCraft",
                mediaArr: [{ type: "video", url: "/experience/vidcraft/SIH.mp4" },],
            },
           
        ],
        descriptionDetails: {
            paragraphs: [
                `VidCrafters aims to transform PIB Press Releases into engaging videos using AI/ML technologies. This solution addresses the declining attention span of readers by converting text-based press releases into visually appealing videos in English and 13 Indian regional languages. The process ensures the videos are reviewed and approved by PIB officers before publication and shared on social media for wider reach.`,
                'Features/Unique Selling Points (USPs):'
                ],
            bullets: [
                "Automated Text-to-Video Conversion: Utilizes AI/ML tools to convert press releases into videos.",
                "Multilingual Support: Generates content in English and 13 regional languages (Hindi, Urdu, Punjabi, etc.)",
                "Copyright-Free Visuals: Sources relevant, copyright-free images using the Unsplash API.",
                "Social Media Integration: Enables automatic sharing of videos on PIB’s social media handles.",
                "User Feedback: Incorporates a rating system for published videos to gauge user engagement and quality.",
                "Manual Review Process: Ensures quality control through PIB officer approval before video publication.",
                "Audio Integration: Leverages Google Text-to-Speech for generating voiceovers in multiple languages.",
            ],
        },
    },
    {
        id: "vinr-enterprises",
        companyName: "Vinr Enterprises",
        type: "Professional",
        category: ["Web Dev", "Full Stack", "UI/UX"],
        shortDescription:
            "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
        websiteLink: "https://vinrenterprises.com",
        techStack: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Typescript",
        ],
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
                    { type: "image", url: "/experience/vinrenterprises/vinr_4.png" },
                    { type: "image", url: "/experience/vinrenterprises/vinr_5.png" },
                 

                ],
            },
            
            {
                title: "Partners",
                description: "Authorised Dealers",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_6.png" },
                ],
            },
            {
                title: "Contact",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_7.png" },
                ],
            },
            {
                title: "Career",
                description: "Authorised Dealers",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_9.png" },
                ],
            },
            {
                title: "Blogs",
                description: "Automated Service to update daily blogs",
                mediaArr: [
                    { type: "image", url: "/experience/vinrenterprises/vinr_10.png" },
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                'At VINR Enterprises, I designed, developed, and maintained professional websites using Next.js and Firebase, ensuring high performance, scalability, and a seamless user experience. I created dynamic, responsive user interfaces with React.js and Tailwind CSS, enhancing design aesthetics and functionality. Leveraging Firebase Firestore and Firebase Authentication, I implemented real-time data handling features and secure authentication systems. By utilizing server-side rendering (SSR) and static site generation (SSG) capabilities of Next.js, I optimized page load speeds and significantly improved SEO performance.',
                'Regular updates and upgrades were implemented to incorporate the latest technologies, keeping the websites aligned with industry trends and business needs. I collaborated closely with cross-functional teams, including designers, content creators, and stakeholders, to gather requirements and deliver solutions that met organizational goals. Rigorous testing, debugging, and routine maintenance were conducted to ensure website stability, security, and an exceptional user experience across all devices. I also automated deployment processes using GitHub Actions and Vercel, streamlining CI/CD pipelines for faster iterations. Additionally, I monitored website analytics and user feedback to identify opportunities for improvement, applying insights to enhance user engagement and satisfaction. This work resulted in a robust online presence that boosted brand visibility and trust for VINR Enterprises.'
                ],
            bullets: [
                ],
        },
    },
    {
        id: "graphai",
        companyName: "GraphAI",
        type: "Personal Project",
        category: ["AI-ML", "Business Intelligence (BI) Tools"],
        shortDescription:
            "Graph_AI is an AI-powered tool that transforms natural language instructions into dynamic data visualizations, providing actionable insights and trend analysis. It combines NLP, predictive analytics, and interactive features for seamless data exploration.",
        techStack: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Typescript",
        ],
        startDate: new Date("2024-11-01"),
        endDate: new Date("2024-11-06"),
        companyLogoImg: "/experience/graphai/logo.png",
        pagesInfoArr: [
            {
                title: "Landing Page",
                mediaArr: [
                    { type: "image", url: "/experience/graphai/logo.png" },
                    // { type: "image", url: "/experience/vinrenterprises/vinr_2.png" },
                    // { type: "image", url: "/experience/vinrenterprises/vinr_3.png" },
                    // { type: "image", url: "/experience/vinrenterprises/vinr_4.png" },
                    // { type: "image", url: "/experience/vinrenterprises/vinr_5.png" },
                 

                ],
            },
            
        ],
        descriptionDetails: {
            paragraphs: [
            'Graph_AI is an AI-powered application that enables users to create, customize, and analyze data visualizations with ease. By simply providing natural language instructions or data, users can generate interactive graphs, explore trends, and gain insights into their datasets. Built with advanced language models and powered by Groq, Graph_AI streamlines the process of data analysis and visualization, making it accessible to both technical and non-technical users.'    
            ],
            bullets: [
                "Natural Language Data Analysis: Users can ask questions like What trends do we see over time? or What is the average sales per month? to receive detailed insights from the dataset.",
                "Auto-Suggested Visualizations: Based on the data structure, the app suggests the top three graph types best suited to represent the data (e.g., line charts, histograms).",
                "AI-Driven Annotations: Automatically identifies and marks key points on graphs, such as peaks, troughs, or significant changes, providing contextual insights.",    
                "Forecasting and Prediction: Generates data simulations and forecasts future trends using historical data, overlaying predictions on graphs for comparison.",
                "Enables real-time data exploration with filters for dynamic updates to visualizations, such as date ranges or category selections.",
                "Users can modify chart styles (colors, markers, etc.) using voice commands like Change the line to red or Add gridlines.",
            ],
        },
    },


];

export const featuredExperiences = Experiences.slice(0, 3);
