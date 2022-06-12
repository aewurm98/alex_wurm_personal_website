// React Components
import { useRef, useEffect, useState} from 'react';
// import { useInView } from 'react-intersection-observer';

// My Components
import Navbar from "components/my-components/Navbar.js";
import Footer from "components/my-components/Footer.js";

import HeroSection from "pages/LandingPages/HeroSection";
import Bio from "pages/LandingPages/Bio";
import WorkExperience from "pages/LandingPages/WorkExperience";
import Projects from "pages/LandingPages/Projects";
import LearnMore from "pages/LandingPages/LearnMore";

// Used to troubleshoot bugs in navigation
function handleClick(event) {
  console.log(event)
  console.log(window.location)
}

window.addEventListener("click", handleClick);

function Home() {
  return (
    <>
      <Navbar currentSection="about"/>
      <div className="home">
        <HeroSection />
      </div>
      <div className="about">
        <Bio />
      </div>
      <div className="work-experience">
        <WorkExperience />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="learn-more">
        <LearnMore />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
