import React from 'react';
import '../Components/Css/footerSection.css';
import iconlogo from '../images/iconlogo.png';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="footer-section about">
                    <div className="logo-area">
                        <img src={iconlogo} alt="Hema Mogilicharla Logo" className="footer-logo" />
                        <h2 className="footer-name">Hema Mogilicharla</h2>
                    </div>
                    <h3 className="footer-heading">About Me</h3>
                    <p>
                        From concept to code, I build user-first web apps with practical experience and a keen design eye 
                    </p>
                </div>


                <div className="footer-section links">
                    <h3 className="footer-heading">Site Map</h3>
                    <ul>
                        <li>  <Link to="/#work">Work</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li> <Link to="/resume">Resume</Link></li>
                    </ul>
                </div>


                <div className="footer-section links">
                    <h3 className="footer-heading">Social Media</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/mogilicharla-hema-11089a362" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/mogilicharlahema" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://wa.me/919494602714" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                    </ul>
                </div>


                <div className="footer-section contact">
                    <h3 className="footer-heading">Email ID</h3>
                    <p><a href="mailto:mogilicharlahema24@gmail.com">mogilicharlahema24@gmail.com</a></p>
                </div>
            </div>


            <div className="footer-bottom">
                <p className='text'>Developed by Hema Mogilicharla | copyright 2025</p>
                {/* <p>Designed by Vasavi Devsoth</p> */}
            </div>
        </footer>
    );
};

export default FooterSection;