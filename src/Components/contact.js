import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Css/contactSection.css";
import logoicon from "../images/iconlogo.png";
import FooterSection from "./footer";

const EMAIL = "mogilicharlahema24@gmail.com";
const WHATSAPP_URL = "https://wa.me/919494602714";
const LINKEDIN_URL = "https://www.linkedin.com/in/mogilicharla-hema-11089a362";
const GITHUB_URL = "https://github.com/mogilicharlahema";

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;
const FORMSPREE_URL = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

const MAX_MESSAGE = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const validate = (values) => {
    const errors = {};
    if (values.name.trim().length < 2) {
        errors.name = "Please enter your name.";
    }
    if (!EMAIL_PATTERN.test(values.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
        errors.message = "Your message should be at least 10 characters.";
    }
    return errors;
};

const ContactSection = () => {
    const [values, setValues] = useState(EMPTY_FORM);
    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);
    // "idle" | "sending" | "success" | "error"
    const [status, setStatus] = useState("idle");
    const [copied, setCopied] = useState(false);
    const formRef = useRef(null);

    const errors = validate(values);
    const showError = (field) => (touched[field] || submitted) && errors[field];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (status === "success" || status === "error") setStatus("idle");
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === "sending") return;
        setSubmitted(true);

        const firstInvalid = ["name", "email", "message"].find((f) => errors[f]);
        if (firstInvalid) {
            formRef.current?.elements[firstInvalid]?.focus();
            return;
        }

        // Spam honeypot: real visitors never see or fill this field.
        if (formRef.current?.elements._gotcha?.value) return;

        if (!FORMSPREE_URL) {
            setStatus("error");
            return;
        }

        setStatus("sending");
        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: values.name.trim(),
                    email: values.email.trim(),
                    subject: values.subject.trim() || `Portfolio message from ${values.name.trim()}`,
                    message: values.message.trim(),
                }),
            });

            if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);

            setStatus("success");
            setValues(EMPTY_FORM);
            setTouched({});
            setSubmitted(false);
        } catch {
            setStatus("error");
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable; the address is still visible and clickable.
        }
    };

    return (
        <>
            <div className="contact-page">
                <header className="contact-header">
                    <Link to="/" className="contact-logo">
                        <img src={logoicon} alt="H logo" />
                        <span>Hema Mogilicharla</span>
                    </Link>
                    <nav className="contact-nav">
                        <NavLink to="/work">Work</NavLink>
                        <NavLink to="/about">About me</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
                        <NavLink to="/contact">Contact me</NavLink>
                    </nav>
                </header>

                <main className="contact-main">
                    <div className="contact-intro">
                        <h1>Let’s work together</h1>
                        <p>Have a project in mind or just want to say hi? Send me a message and I’ll get back to you.</p>
                    </div>

                    <div className="contact-grid">
                        <aside className="contact-info">
                            <div className="contact-card">
                                <span className="contact-card-label">Email</span>
                                <a className="contact-card-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                <button type="button" className="contact-copy-btn" onClick={handleCopy}>
                                    {copied ? "Copied!" : "Copy email"}
                                </button>
                            </div>

                            <div className="contact-card">
                                <span className="contact-card-label">WhatsApp</span>
                                <a className="contact-card-value" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                    Chat with me
                                </a>
                            </div>

                            <div className="contact-card">
                                <span className="contact-card-label">LinkedIn</span>
                                <a className="contact-card-value" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                                    Connect with me
                                </a>
                            </div>

                            <div className="contact-card">
                                <span className="contact-card-label">GitHub</span>
                                <a className="contact-card-value" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                                    View my code
                                </a>
                            </div>
                        </aside>

                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
                            <div className="contact-field">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(showError("name"))}
                                    aria-describedby={showError("name") ? "contact-name-error" : undefined}
                                    placeholder="Your name"
                                />
                                {showError("name") && <span id="contact-name-error" className="contact-error">{errors.name}</span>}
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(showError("email"))}
                                    aria-describedby={showError("email") ? "contact-email-error" : undefined}
                                    placeholder="you@example.com"
                                />
                                {showError("email") && <span id="contact-email-error" className="contact-error">{errors.email}</span>}
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-subject">Subject <small>(optional)</small></label>
                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    value={values.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-message">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="6"
                                    maxLength={MAX_MESSAGE}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(showError("message"))}
                                    aria-describedby={showError("message") ? "contact-message-error" : undefined}
                                    placeholder="Tell me about your project or idea…"
                                />
                                <div className="contact-field-footer">
                                    {showError("message")
                                        ? <span id="contact-message-error" className="contact-error">{errors.message}</span>
                                        : <span />}
                                    <span className="contact-counter">{values.message.length}/{MAX_MESSAGE}</span>
                                </div>
                            </div>

                            <input
                                type="text"
                                name="_gotcha"
                                tabIndex="-1"
                                autoComplete="off"
                                aria-hidden="true"
                                className="contact-honeypot"
                            />

                            <button type="submit" className="contact-submit" disabled={status === "sending"}>
                                {status === "sending" ? "Sending…" : "Send message"}
                            </button>

                            {status === "success" && (
                                <p className="contact-success" role="status">
                                    Thank you! Your message has been sent. I’ll get back to you soon.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="contact-failure" role="alert">
                                    Sorry, your message couldn’t be sent. Please try again, or email me directly at{" "}
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                                </p>
                            )}
                        </form>
                    </div>
                </main>
            </div>
            <FooterSection />
        </>
    );
};

export default ContactSection;
