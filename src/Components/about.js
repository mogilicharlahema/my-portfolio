import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Css/aboutSection.css';
import hemaPhoto from '../images/hema.png';
import hLogo from '../images/iconlogo.png';


import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import jsLogo from '../images/js.png';
import reactLogo from '../images/react.png';
import tailwindLogo from '../images/tailwind.png';
import nodeLogo from '../images/nodejs.png';
import expressLogo from '../images/express.png';
import mongoLogo from '../images/mongo.png';
import vercelLogo from '../images/vercel.png';
import githubLogo from '../images/git.png';
import netlifyLogo from '../images/netlify.png';
import vscode from "../images/vs code.png";
import webstorm from "../images/WebStorm.svg";
import postman from "../images/postman-icon.svg";
import FooterSection from './footer';


const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <header className="about-hero">

        <nav className="about-nav">
          <Link to="/" className="about-logo">
            <img src={hLogo} alt="H logo" />
            <span>Hema Mogilicharla</span>
          </Link>
          <div className="about-nav-links">
            <Link to="/#work">Work</Link>

            <Link to="/about" className="active">About me</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>

        <div className="about-hero-image-container">
          <img src={hemaPhoto} alt="Hema Mogilicharla" />
        </div>

        <div className="about-hero-content-container">
       
          <div className="about-hero-text">
            <h1>
              Hi, <br />
              I am <br />
              Hema Mogilicharla
            </h1>
            <p className="hero-subtitle">
              Currently Building Scalable interfaces and full-stack systems at{' '}
              <span className="highlight-purple">LKR Technology</span>
            </p>
          </div>

          <div className="hero-background-text">
            I ARCHITECT AND ENGINEER<br />MODERN WEB APPLICATIONS.
          </div>
        </div>
      </header>

      <main className="about-main-content">
        <section className="about-tagline">
          <h2 className="highlight-purple">I Thrive At The Intersection Of Product Thinking And Code Craft</h2>
          <p>~Transforming Logic Into Visual Elegance</p>
          <button className="tag-button">Personal Story</button>
        </section>

        <section className="developer-philosophy">
          <h3>My Developer Philosophy</h3>
          <div className="philosophy-tags">
            <span className="tag-button">Clean Code</span>
            <span className="tag-button">Accessibility</span>
            <span className="tag-button">Responsive UI</span>
            <span className="tag-button">Performance</span>
            <span className="tag-button">User-first</span>
          </div>
          <p>
            "As a Web-developer, I love bridging the gap between logic and visual design.
            I don't just code – I design systems that are scalable, elegant, and human-Centred.
            Whether it's backend architecture or UI finesse, my passion lies in making tech feel effortless."
          </p>
        </section>

        <section className="timeline-section">
          <h3>Timeline</h3>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="tag-button date-tag">2025 – Present</span>
              <p className="timeline-role">
                <strong>LKR Technology</strong> - Internship
              </p>
              <p className="timeline-description">
                Effectively collaborated with clients to understand their unique requirements
                and delivered three high-performing,
                user-centric websites with responsive designs and optimized functionality
              </p>
            </div>
          </div>
         
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="tag-button date-tag">2024 – 2025</span>
              <p className="timeline-role">
                <strong>Survey Heart</strong> - Internship
              </p>
              <p className="timeline-description">
                Implemented key features for the Survey Heart platform, including a dynamic Sales Report with filters,
                graphs, and platform-specific views; an interactive Community module
                with Q&A management and sign-in restrictions; and an FAQ section with
                admin controls for real-time category and FAQ updates
              </p>
            </div>
          </div>
        </section>

        
        <section className="skills-section">
          <h3 className="skills-main-title">Skills + Stack Grid</h3>
          <span className="tag-button tech-toolbox-tag">My Tech Tool Box</span>

          <div className="skill-category">
            <h4 className="skill-category-title">Frontend:</h4>
            <div className="skills-grid">
              <div className="skill-card"><img src={htmlLogo} alt="HTML5 Logo" /></div>
              <div className="skill-card"><img src={cssLogo} alt="CSS3 Logo" /></div>
              <div className="skill-card"><img src={jsLogo} alt="JavaScript Logo" /></div>
              <div className="skill-card"><img src={reactLogo} alt="React Logo" /></div>
              <div className="skill-card"><img src={tailwindLogo} alt="Tailwind CSS Logo" /></div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Backend:</h4>
            <div className="skills-grid">
              <div className="skill-card"><img src={nodeLogo} alt="Node.js Logo" /></div>
              <div className="skill-card"><img src={expressLogo} alt="Express.js Logo" /></div>
              <div className="skill-card"><img src={mongoLogo} alt="MongoDB Logo" /></div>
                 <div className="skill-card"><img src={postman} alt="MongoDB Logo" /></div>
            </div>
          </div> 

          <div className="skill-category">
            <h4 className="skill-category-title">Tools & Deployment:</h4>
            <div className="skills-grid">
              <div className="skill-card"><img src={vercelLogo} alt="Vercel Logo" /></div>
              <div className="skill-card"><img src={githubLogo} alt="GitHub Logo" /></div>
              <div className="skill-card"><img src={netlifyLogo} alt="Netlify Logo" /></div>
                <div className="skill-card"><img src={vscode} alt="Netlify Logo" /></div>
                  <div className="skill-card"><img src={webstorm} alt="Netlify Logo" /></div>
               
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Soft Skills:</h4>
            <div className="soft-skills-tags">
              <span className="tag-button">Problem Solving.</span>
              <span className="tag-button">Collaboration</span>
              <span className="tag-button">Adaptability</span>
                <span className="tag-button">Critical Thinking</span>
                  <span className="tag-button">Time Management</span>
            </div>
          </div>
        </section>

      </main>
      <FooterSection />
    </div>

  );
};

export default AboutPage;