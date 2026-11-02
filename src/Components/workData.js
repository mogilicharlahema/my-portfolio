import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import tailwindLogo from "../images/tailwind.png";
import nodeLogo from "../images/nodejs.png";
import expressLogo from "../images/express.png";
import mongoLogo from "../images/mongo.png";
import postmanLogo from "../images/postman-icon.svg";
import vercelLogo from "../images/vercel.png";
import githubLogo from "../images/git.png";
import netlifyLogo from "../images/netlify.png";
import vscodeLogo from "../images/vs code.png";
import webstormLogo from "../images/WebStorm.svg";

export const toolbox = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", logo: htmlLogo },
            { name: "CSS3", logo: cssLogo },
            { name: "JavaScript", logo: jsLogo },
            { name: "React", logo: reactLogo },
            { name: "Tailwind CSS", logo: tailwindLogo },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", logo: nodeLogo },
            { name: "Express.js", logo: expressLogo },
            { name: "MongoDB", logo: mongoLogo },
            { name: "Postman", logo: postmanLogo },
        ],
    },
    {
        category: "Tools & Deployment",
        items: [
            { name: "Vercel", logo: vercelLogo },
            { name: "GitHub", logo: githubLogo },
            { name: "Netlify", logo: netlifyLogo },
            { name: "VS Code", logo: vscodeLogo },
            { name: "WebStorm", logo: webstormLogo },
        ],
    },
];

export const softSkills = [
    "Problem Solving",
    "Collaboration",
    "Adaptability",
    "Critical Thinking",
    "Time Management",
];

export const currentJob = {
    company: "B2Y Infy Solutions",
    role: "Frontend Developer",
    period: "November 2025 – Present",
};

export const clientProject = {
    title: "Imly Studio",
    subtitle: "Interior Design & Manufacturing ERP/CRM",
    summary: "Multi-tenant ERP/CRM for the interior design and furnishing industry.",
    tags: ["React.js", "REST APIs", "i18n", "Role-based UI"],
    points: [
        "Contributing to the development of a multi-tenant ERP/CRM application for the interior design and furnishing industry using React.js.",
        "Developing reusable UI components and implementing responsive interfaces across multiple business modules.",
        "Enhancing Orders, Dashboard, and other business modules with improved functionality and user experience.",
        "Integrating REST APIs to enable dynamic data handling and seamless frontend-backend communication.",
        "Implementing multilingual support (i18n) and role-based UI functionality.",
        "Resolving frontend bugs, optimizing UI performance, and improving application responsiveness.",
    ],
};

export const internalProjects = [
    {
        title: "ShopNow",
        subtitle: "E-commerce Application",
        summary: "E-commerce app with customer and admin portals.",
        tags: ["React.js", "REST APIs", "Admin portal"],
        points: [
            "Developing customer-facing and admin portals using React.js.",
            "Implementing product listings, product details, shopping cart, checkout, and order management interfaces.",
            "Building admin functionalities for product and order management.",
            "Integrating REST APIs and developing responsive, reusable UI components.",
        ],
    },
    {
        title: "Real Estate Management",
        subtitle: "Real Estate Management Application",
        summary: "Property listings, search and admin management portals.",
        tags: ["React.js", "REST APIs", "Search & filters"],
        points: [
            "Developing customer and admin portals for a real estate management platform.",
            "Implementing property listings, property details, search, and filtering functionalities.",
            "Building administrative interfaces for property management.",
            "Integrating REST APIs and enhancing responsive layouts across devices.",
        ],
    },
];
