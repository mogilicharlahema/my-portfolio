import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Css/aboutSection.css';
import hemaPhoto from '../images/hema.png';
import hLogo from '../images/iconlogo.png';
import FooterSection from './footer';
import { Stepper, ReasonCards } from './aboutInteractive';

const quickFacts = [
  { label: 'Location', value: 'Eluru, India' },
  { label: 'Languages', value: 'Telugu · Hindi · English' },
  { label: 'Education', value: 'B.Tech (Agriculture)' },
  { label: 'Certified in', value: 'Full Web Development' },
];

const journey = [
  {
    label: 'Diploma',
    when: '2017 – 2020',
    title: 'Diploma in Agricultural Engineering',
    text: 'My journey began in agriculture. In my Diploma in Agricultural Engineering I studied the engineering side of farming, learning how land, water, machinery and crops work together to produce food.',
    meta: 'Palakol · CGPA 9.0',
  },
  {
    label: 'B.Tech',
    when: '2020 – 2023',
    title: 'B.Tech in Agriculture',
    text: 'I continued with a B.Tech in Agriculture and went deeper into agricultural science and technology. Towards the end of my degree, I became curious about IT and how software is built.',
    meta: 'Divili, Kakinada · CGPA 7.8',
  },
  {
    label: 'The spark',
    when: 'The turning point',
    title: 'Discovering IT and coding',
    text: 'That curiosity turned into passion. I found IT and coding, and building something with logic and seeing it come alive on screen was a feeling I wanted to chase.',
  },
  {
    label: 'Course',
    when: 'Learning phase',
    title: 'Complete Web Development Course',
    text: 'I joined an institute, learned web development from the ground up and earned my course certificate.',
  },
  {
    label: 'Career',
    when: '2024 – Present',
    title: 'Building real products',
    text: 'From my internship at Survey Heart and my work at LKR Technology to my current role at B2Y Infy Solutions, I now build interfaces that real users depend on.',
  },
];

const whyFrontend = [
  {
    title: 'I see my work grow',
    text: 'In agriculture you plant a seed and watch it grow. In frontend, I write code and watch it turn into a screen people use, and I see the result right away.',
  },
  {
    title: 'Logic meets design',
    text: 'I enjoy the mix of problem solving and visual detail: clean logic underneath, a smooth and good-looking experience on top.',
  },
  {
    title: 'It is built for people',
    text: 'Every button, form and layout is something a real person touches. Making it clear and easy to use is what motivates me.',
  },
  {
    title: 'There is always something new',
    text: 'Frameworks, tools and browsers keep evolving, and that suits my love of learning new things.',
  },
];

const whatsNext = [
  {
    label: 'Now',
    when: 'Right now',
    title: 'Growing at B2Y Infy Solutions',
    text: 'Building ERP/CRM, e-commerce and real estate interfaces with React, and learning how real products are shaped by real users.',
  },
  {
    label: 'Next',
    when: 'Next up',
    title: 'Going full-stack',
    text: 'Going deeper into React and strengthening Node.js, Express and MongoDB so I can build features end to end.',
  },
  {
    label: 'Goal',
    when: 'The bigger goal',
    title: 'Building bigger products',
    text: 'Taking on larger, scalable products where clean code and a great user experience make a real difference.',
  },
];

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
            <Link to="/work">Work</Link>

            <Link to="/about" className="active">About me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact me</Link>
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
              Currently crafting clean ERP/CRM and e-commerce interfaces at{' '}
              <span className="highlight-purple">B2Y Infy Solutions</span>
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
        </section>

        <section className="about-section about-story">
          <h3>My Story</h3>
          <p>
            I grew up in a small village and studied agriculture, first a Diploma in Agricultural
            Engineering and then a B.Tech in Agriculture. Somewhere along the way I realised what I
            was truly passionate about: IT and coding.
          </p>
          <p>
            So I changed direction. I joined an institute, completed a full web development course
            and earned my certificate. Since then I have been building real products, from client
            websites to ERP/CRM platforms.
          </p>
        </section>

        <section className="about-section">
          <h3>Quick Facts</h3>
          <div className="facts-grid">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="fact-card">
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h3>From Agriculture to Code</h3>
          <p className="about-hint">Click each step to follow my journey.</p>
          <Stepper steps={journey} label="My journey from agriculture to code" />
        </section>

        <section className="about-section">
          <h3>Why Frontend?</h3>
          <p className="about-hint">Tap a card to read more.</p>
          <ReasonCards reasons={whyFrontend} />
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

        <section className="about-section about-story">
          <h3>Beyond the Code</h3>
          <div className="philosophy-tags">
            <span className="tag-button">Learning new things</span>
            <span className="tag-button">Exploring new technologies</span>
            <span className="tag-button">Solving problems</span>
          </div>
          <p>
            I am happiest when I am learning something new: a tool, a framework, or a better way to
            solve an old problem. Moving from agriculture into tech taught me that curiosity matters
            more than where you start.
          </p>
        </section>

        <section className="about-section">
          <h3>What’s Next</h3>
          <p className="about-hint">Click to see where I am heading.</p>
          <Stepper steps={whatsNext} label="My roadmap" />
        </section>

      </main>
      <FooterSection />
    </div>

  );
};

export default AboutPage;
