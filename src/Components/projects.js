import React from "react";
import suits from "../images/suits.png";
import lkr from "../images/LKR.png";
import leaira from "../images/LEAIRA.png";
import girleye from "../images/girleye.png";
import { Link } from "react-router-dom";
import "../Components/Css/projectSection.css";
import { currentJob, clientProject, internalProjects } from "./workData";

const currentProjects = [clientProject, ...internalProjects];


const featuresData = [
    {
        number: 1,
        title: "Sales report",
        description: "Designed a user-friendly sales report UI with date filters, graphs, sorting, and platform-wise views for Web and Android.",
    },
    {
        number: 2,
        title: "Community",
        description: "Built an interactive community UI with sign-in access for asking, editing, deleting, viewing Q&As, copying links, and viewing verified highlights.",
    },
    {
        number: 3,
        title: "FAQ",
        description: "Built an FAQ feature with an admin panel to add, edit, delete categories and FAQs, with dynamic updates on the webpage.",
    },
];


const internData = [
    {
        "title": "The suits and salon",
        "logo": suits,
        "description": "Developed a responsive website to showcase salon services, pricing, and visual branding."
    },
    {
        "title": "LKR Technology",
        "logo": lkr,
        "description": "Built a scalable corporate website with clean code structure and efficient navigation. Focused on performance, SEO, and maintainability for long-term use."
    },
    {
        "title": "Leaira events",
        "logo": leaira,
        "description": "Developed a dynamic event management site with gallery, inquiry forms, and service pages."
    }
];

const ProjectCard = ({ title, logo, description }) => (
    <div className="project-card">
        <div className="card-content">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="card-logo-wrapper">
                    <img src={logo} alt={`${title} logo`} className="card-logo" />
                </div>
            </div>
            <p className="card-description">{description}</p>
        </div>
    </div>
);

const ProjectSection = () => {
    return (

        <>
        <main>
            <section className="current-work-section">
                <div className="current-work-wrapper">
                    <span className="current-work-tag">Currently Working</span>
                    <div className="current-work-card">
                        <div className="current-work-left">
                            <h2 className="current-work-company">{currentJob.company}</h2>
                            <p className="current-work-role">{currentJob.role}</p>
                            <p className="current-work-period">{currentJob.period}</p>
                            <Link to="/work" className="card-button current-work-button">
                                View full details
                            </Link>
                        </div>
                        <ul className="current-work-list">
                            {currentProjects.map((project) => (
                                <li key={project.title} className="current-work-item">
                                    <h3>{project.title}</h3>
                                    <p>{project.summary}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="other-projects-section">
                <div className="other-projects-container">
                    <div className="section-header">
                        <span className="other-projects-tag">Experience – LKR Technology</span>
                    </div>
                    <div className="projects-grid">
                        {internData.map((project) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                            />
                        ))}
                        <div className="image-column">
                            <img
                                src={girleye}
                                alt="A woman looking through a magnifying glass with a surprised expression"
                                className="feature-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="internship-section-container">
                <div className="internship-content-wrapper">
                    <div className="internship-tag-container">
                        <span className="internship-tag">Experience – Survey Heart</span>
                    </div>
                    <div className="internship-card">
                        <div className="internship-card-left">
                            <h1 className="internship-title">Survey Heart</h1>
                            <p className="internship-description">
                                Worked on Survey Heart, a multi-platform product that simplifies
                                form creation and quiz building, providing seamless
                                user experiences on Android, iOS, and Web
                            </p>
                        </div>
                        <div className="internship-card-right">
                            <ul className="features-list">
                                {featuresData.map((feature) => (
                                    <li key={feature.number} className="feature-item">
                                        <div className="feature-number-badge">
                                            <span>{feature.number}</span>
                                        </div>
                                        <div className="feature-details">
                                            <h3 className="feature-title">{feature.title}</h3>
                                            <p className="feature-description">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </main>



        </>
    );
};

export default ProjectSection;