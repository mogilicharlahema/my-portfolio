import React from 'react';
import '../Components/Css/resume.css';
import logoicon from "../images/iconlogo.png";
import resume from '../images/resume.jpg';
import { NavLink } from 'react-router-dom'; 
import resumePdf from '../HemaCV.pdf';
import FooterSection from './footer';
import { Link } from 'react-router-dom';

const ResumeSection = () => {
    return (
        <>
            <div className="resume-page-container">
                <header className="page-header">
                    <div className="logo-container">
                      <Link to="/" className="logo-link"> 
                            <img className='logo' src={logoicon} alt="Logo" />
                        <span className="logo-name">Hema Mogilicharla</span></Link>
                    </div>
                   
                    <nav className="main-nav">
                       
                        <NavLink to="/#work">Work</NavLink>
                        <NavLink to="/about">About me</NavLink>
                      
                        <NavLink to="/resume">Resume</NavLink>
                    </nav>
                </header>

                <main className="page-main-content">
                    <div className="resume-intro-section">
                        <h1>My Resume</h1>
                        <p>A quick overview of my skills, education, experience & tech expertise.</p>
                        <div className="background-text-container">
                            <span className="background-text-top">HEMA</span>
                            <span className="background-text-bottom">MOGILICHARLA</span>
                        </div>
                    </div>

                    <div className="resume-image-wrapper">
                        <img src={resume} alt="My Resume" className="resume-image" />
                    </div>
                </main>

                <div className="download-button-container">
                    <a
                        href={resumePdf}
                        download="HemaCV.pdf"
                        className="download-btn"
                    >
                        Download Pdf
                    </a>
                </div>

            </div>
            <FooterSection />
        </>
    );
};

export default ResumeSection;