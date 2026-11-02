import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./Components/Navbar";
import AboutPage from "./Components/about";
import ProjectSection from "./Components/projects";
import FooterSection from "./Components/footer";
import ScrollToTop from "./Components/scrollTop";
import ScrollToHash from "./Components/scroll"
import ResumeSection from "./Components/resume";
import ContactSection from "./Components/contact";
import WorkPage from "./Components/work";
import Snapshot from "./Components/snapshot";

function App() {
  return (
    <Router>
      <ScrollToHash />
        <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Snapshot />
              <div id="projects">
                <ProjectSection />

              </div>
              {/* <div id="resume"><ResumeSection/></div> */}
              <FooterSection />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactSection />} />

      </Routes>
    </Router>
  );
}

export default App;
