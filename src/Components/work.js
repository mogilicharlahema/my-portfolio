import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Css/workSection.css";
import logoicon from "../images/iconlogo.png";
import FooterSection from "./footer";
import { currentJob, clientProject, internalProjects, toolbox, softSkills } from "./workData";

const ProjectDetail = ({ project, label }) => (
    <article className="work-card">
        <div className="work-card-top">
            <div>
                {label && <span className="work-card-label">{label}</span>}
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-subtitle">{project.subtitle}</p>
            </div>
        </div>
        <ul className="work-points">
            {project.points.map((point) => (
                <li key={point}>{point}</li>
            ))}
        </ul>
        <div className="work-tags">
            {project.tags.map((tag) => (
                <span key={tag} className="work-tag">{tag}</span>
            ))}
        </div>
    </article>
);

const WorkPage = () => (
    <>
        <div className="work-page">
            <header className="work-header">
                <Link to="/" className="work-logo">
                    <img src={logoicon} alt="H logo" />
                    <span>Hema Mogilicharla</span>
                </Link>
                <nav className="work-nav">
                    <NavLink to="/work">Work</NavLink>
                    <NavLink to="/about">About me</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/contact">Contact me</NavLink>
                </nav>
            </header>

            <main className="work-main">
                <div className="work-intro">
                    <h1>My Work</h1>
                    <p>What I’m building right now.</p>
                </div>

                <section className="work-company">
                    <div>
                        <h2>{currentJob.company}</h2>
                        <p className="work-role">{currentJob.role}</p>
                    </div>
                    <span className="work-period">{currentJob.period}</span>
                </section>

                <h2 className="work-section-title">Client Project</h2>
                <ProjectDetail project={clientProject} />

                <h2 className="work-section-title">Internal Company Projects</h2>
                <div className="work-card-list">
                    {internalProjects.map((project) => (
                        <ProjectDetail key={project.title} project={project} />
                    ))}
                </div>

                <h2 className="work-section-title">My Tech Toolbox</h2>
                <div className="work-toolbox">
                    {toolbox.map((group) => (
                        <div key={group.category} className="work-tool-group">
                            <h3>{group.category}</h3>
                            <ul className="work-tool-grid">
                                {group.items.map((item) => (
                                    <li key={item.name} className="work-tool-card" title={item.name}>
                                        <img src={item.logo} alt={item.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="work-tool-group">
                        <h3>Soft Skills</h3>
                        <div className="work-tags">
                            {softSkills.map((skill) => (
                                <span key={skill} className="work-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="work-earlier">
                    <p>Looking for my earlier experience?</p>
                    <Link to="/#projects" className="work-earlier-btn">See earlier experience</Link>
                </div>
            </main>
        </div>
        <FooterSection />
    </>
);

export default WorkPage;
