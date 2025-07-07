import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./Components/Navbar";
import AboutPage from "./Components/about";
import ProjectSection from "./Components/projects";
import FooterSection from "./Components/footer";
import ScrollToTop from "./Components/scrollTop";
import ScrollToHash from "./Components/scroll"
import ResumeSection from "./Components/resume";

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
              <div id="work">
                <ProjectSection />

              </div>
              {/* <div id="resume"><ResumeSection/></div> */}
              <FooterSection />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumeSection />} />

      </Routes>
    </Router>
  );
}

export default App;
