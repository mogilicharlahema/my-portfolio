import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Css/snapshotSection.css";

import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import tailwindLogo from "../images/tailwind.png";
import nodeLogo from "../images/nodejs.png";
import expressLogo from "../images/express.png";
import mongoLogo from "../images/mongo.png";
import gitLogo from "../images/git.png";
import vercelLogo from "../images/vercel.png";
import netlifyLogo from "../images/netlify.png";

const tech = [
    { name: "HTML5", logo: htmlLogo },
    { name: "CSS3", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "Express", logo: expressLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "Git & GitHub", logo: gitLogo },
    { name: "Vercel", logo: vercelLogo },
    { name: "Netlify", logo: netlifyLogo },
];

// c = CSS class suffix, s = text
const t = (c, s) => ({ c, s });

const lines = [
    [t("kw", "const "), t("var", "hema"), t("p", " = {")],
    [t("p", "  "), t("key", "role"), t("p", ": "), t("str", '"Frontend Developer"'), t("p", ",")],
    [t("p", "  "), t("key", "company"), t("p", ": "), t("str", '"B2Y Infy Solutions"'), t("p", ",")],
    [
        t("p", "  "), t("key", "stack"), t("p", ": ["),
        t("str", '"React"'), t("p", ", "), t("str", '"JavaScript"'), t("p", ", "),
        t("str", '"Node.js"'), t("p", ", "), t("str", '"MongoDB"'), t("p", "],"),
    ],
    [t("p", "  "), t("key", "building"), t("p", ": [")],
    [t("p", "    "), t("str", '"Imly Studio ERP/CRM"'), t("p", ",")],
    [t("p", "    "), t("str", '"ShopNow E-commerce"'), t("p", ",")],
    [t("p", "    "), t("str", '"Real Estate Management"'), t("p", ",")],
    [t("p", "  ],")],
    [
        t("p", "  "), t("key", "loves"), t("p", ": ["),
        t("str", '"Clean code"'), t("p", ", "), t("str", '"Responsive UI"'), t("p", ", "),
        t("str", '"Performance"'), t("p", "],"),
    ],
    [t("p", "  "), t("key", "email"), t("p", ": "), t("str", '"mogilicharlahema24@gmail.com"'), t("p", ",")],
    [t("p", "};")],
    [t("p", "")],
    [t("cm", "// Let’s build something great together.")],
];

const tokens = lines.flatMap((line, i) =>
    i < lines.length - 1 ? [...line, t("p", "\n")] : line
);
const TOTAL_CHARS = tokens.reduce((sum, tok) => sum + tok.s.length, 0);

const CodeWindow = ({ count }) => {
    let offset = 0;
    return (
        <div className="snap-window" role="img" aria-label="Developer profile written as a JavaScript object">
            <div className="snap-window-bar" aria-hidden="true">
                <span className="snap-dot snap-dot-red" />
                <span className="snap-dot snap-dot-yellow" />
                <span className="snap-dot snap-dot-green" />
                <span className="snap-filename">hema.js</span>
            </div>
            <pre className="snap-code" aria-hidden="true">
                <code>
                    {tokens.map((tok, i) => {
                        const start = offset;
                        offset += tok.s.length;
                        const raw = count - start;
                        const shown = Math.max(0, Math.min(tok.s.length, raw));
                        const hasCursor = raw >= 0 && raw < tok.s.length;
                        return (
                            <span key={i} className={`snap-${tok.c}`}>
                                {tok.s.slice(0, shown)}
                                {hasCursor && <span className="snap-cursor" />}
                                <span className="snap-ghost">{tok.s.slice(shown)}</span>
                            </span>
                        );
                    })}
                    {count >= TOTAL_CHARS && <span className="snap-cursor" />}
                </code>
            </pre>
        </div>
    );
};

const TechChip = ({ item }) => (
    <li className="snap-chip">
        <img src={item.logo} alt="" />
        <span>{item.name}</span>
    </li>
);

const Snapshot = () => {
    const sectionRef = useRef(null);
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    // Start typing once the section scrolls into view.
    useEffect(() => {
        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion || !("IntersectionObserver" in window)) {
            setCount(TOTAL_CHARS);
            return undefined;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return undefined;
        const timer = setInterval(() => {
            setCount((c) => {
                if (c >= TOTAL_CHARS) {
                    clearInterval(timer);
                    return c;
                }
                return Math.min(TOTAL_CHARS, c + 3);
            });
        }, 22);
        return () => clearInterval(timer);
    }, [started]);

    return (
        <section className="snap-section" ref={sectionRef} aria-label="My dev profile">
            <div className="snap-wrapper">
                <span className="snap-tag">My Dev Profile</span>

                <div className="snap-card">
                    <div className="snap-grid">
                        <div className="snap-text">
                            <h2>
                                Frontend by craft,
                                <br />
                                <span>full-stack by curiosity.</span>
                            </h2>
                            <p>
                                I build responsive, user-first interfaces in React and I’m comfortable
                                with the Node.js, Express and MongoDB side too. Right now I’m building
                                an ERP/CRM, an e-commerce app and a real estate platform at B2Y Infy Solutions.
                            </p>
                            <div className="snap-actions">
                                <Link to="/work" className="snap-btn snap-btn-primary">View my work</Link>
                            </div>
                        </div>

                        <CodeWindow count={count} />
                    </div>

                    <div className="snap-marquee" aria-label="Technologies I work with">
                        <ul className="snap-track">
                            {tech.map((item) => <TechChip key={item.name} item={item} />)}
                            {tech.map((item) => (
                                <TechChip key={`${item.name}-copy`} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Snapshot;
