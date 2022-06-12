// React Components
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Waypoint } from "react-waypoint";

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
  console.log(event);
  console.log(window.location);
}

window.addEventListener("click", handleClick);

function Home() {

// const [currentSection, setCurrentSection] = useState(null)

//   const HeroRef = useRef(null);
//   const BioRef = useRef(null);
//   const WorkRef = useRef(null);
//   const ProjectRef = useRef(null);
//   const LearnRef = useRef(null);

  return (
    <>
      {/* TODO: Find alternative to Waypoints that allows changing Navbar elements on scroll 
      and allows locking position for when navigating back to site from external link */}
      <Navbar currentSection="placeholder"/>

        <div className="home" 
        // ref={HeroRef}
        >
          <HeroSection />
        </div>

        <div className="about" 
        // ref={BioRef}
        >
          <Bio />
        </div>
        <div className="work-experience" 
        // ref={WorkRef}
        >
          <WorkExperience />
        </div>

        <div className="projects" 
        // ref={ProjectRef}
        >
          <Projects />
        </div>

        <div className="learn-more" 
        // ref={LearnRef}
        >
          <LearnMore />
        </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
