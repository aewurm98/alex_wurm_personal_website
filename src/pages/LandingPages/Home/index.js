// React Components
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';

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

  // Intersection Observer Functionality
  // const { ref: myRef, inView: sectionIsVisible } = useInView();

  // Determine scroll position for current section
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const HeroRef = useRef(null);
  const BioRef = useRef(null);
  const WorkRef = useRef(null);
  const ProjectsRef = useRef(null);
  const LearnRef = useRef(null);
  const FooterRef = useRef(null);
  
  return (
    <>
      <Navbar currentSection="about"/>
      <div className="home" ref={HeroRef}>
        <HeroSection />
        {/* {console.log(HeroRef.current.offsetTop)} */}
      </div>
      <div className="about" ref={BioRef}>
        <Bio />
        {console.log(BioRef)}
      </div>
      <div className="work-experience" ref={WorkRef}>
        <WorkExperience />
        {console.log(WorkRef)}
      </div>
      <div className="projects" ref={ProjectsRef}>
        <Projects />
        {console.log(ProjectsRef)}
      </div>
      <div className="learn-more" ref={LearnRef}>
        <LearnMore />
        {console.log(LearnRef)}
      </div>
      <div className="footer" ref={FooterRef}>
        <Footer />
        {console.log(FooterRef)}
      </div>
    </>
  );
}

export default Home;
