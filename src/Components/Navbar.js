// Step 1: Import useState along with React
import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "../Components/Css/navSection.css";
import iconlogo from "../images/iconlogo.png";
import icon from "../images/icon.png";
import girlpic from "../images/girlpic.png";

const HeroSection = () => {
    // Step 1: Create a state variable to track if the menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Step 2: Create a function to toggle the menu's state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="hero-section">
            <header className="hero-navbar">
                <div className="navbar-logo">
                    <img src={iconlogo} alt="H's logo" />
                    <span>Hema Mogilicharla</span>
                </div>

                {/* Step 3: Add the conditional class to the nav element */}
                <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/work" onClick={toggleMenu}>Work</Link>
                    <Link to="/about" onClick={toggleMenu}>About me</Link>
                    <Link to="/resume" onClick={toggleMenu}>Resume</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact me</Link>
                </nav>

                {/* Step 3: Add the onClick handler to the hamburger menu */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            {/* ... rest of your component remains the same ... */}
            <main className="hero-main-content">
                <div className="hero-text-container">
                    <h1 className="hero-title">
                        Hello! <br />
                        I’m <span className="name-highlight">Hema</span>
                    </h1>
                    <h2 className="hero-subtitle">FrontEnd Developer •</h2>
                    <p className="hero-description">— I make web things work beautifully.</p>
                </div>

                <div className="hero-image-container">
                    <img src={girlpic} alt="Line art of a developer" className="hero-line-art" />
                </div>

                <div className="hero-background-tagline">
                    <p>FROM BACKEND LOGIC</p>
                    <p>TO THE FINAL PIXEL</p>
                </div>
            </main>

            <div className="scroll-indicator">
                <img className="tri-icon" src={icon} alt="Scroll icon" />
            </div>
        </section>
    );
};

export default HeroSection;