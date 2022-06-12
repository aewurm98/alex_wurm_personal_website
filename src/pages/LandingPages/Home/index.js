// React Components
import { useRef, useEffect, useState, useCallback } from "react";
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

function Home() {

// Used to troubleshoot bugs in navigation

useEffect(() => {

  function handleClick(event) {
    console.log(event);
    console.log(window.location);
  }
  
  window.addEventListener("click", handleClick);

  return () => window.removeEventListener("click", handleClick);

}, [])  

// const [currentSection, setCurrentSection] = useState("home");

// const sectionRef = useCallback(n => {
//   setCurrentSection(n)
// },[])

// const currentSection = useRef(1);

// // const [,setForceUpdate] = useState(Date.now());

// function handleSectionChange(n) {
//   currentSection.current = n;
// }

// useEffect(() => {
//   setTimeout(() =>{
//     setForceUpdate();
//     console.log(currentSection)
//   }, 500)
//   })

// const firstTier = document.documentElement.childNodes;
// console.log(firstTier)

// const [currentSection, setCurrentSection] = useState(null)

//   const HeroRef = useRef(null);
//   const BioRef = useRef(null);
//   const WorkRef = useRef(null);
//   const ProjectRef = useRef(null);
//   const LearnRef = useRef(null);

// const sectionRef = useRef(1);

// function handleSectionChange(n) {
//   sectionRef.current = n;
// }

// // For troubleshooting
// useEffect(() => {
//   function handleScroll(evt) {
//     sectionRef.current++;
//     console.log({sectionRef})
//     console.log(evt.target)
//   }
  
//   window.addEventListener("scroll", handleScroll)

//   sectionRef = 1

//   return () => window.removeEventListener("resize", handleScroll);
  
//   }, [])

  return (
    <>
      {/* TODO: Find alternative to Waypoints that allows changing Navbar elements on scroll 
      and allows locking position for when navigating back to site from external link 
      https://www.smashingmagazine.com/2020/11/react-useref-hook/ */}
      <Navbar currentSection={"placeholder"}/>

      {/* <Waypoint onEnter={handleSectionChange(1)}> */}
        <div className="home" 
        // ref={HeroRef}
        // ref = {sectionRef}
        >
          <HeroSection />
        </div>
      {/* </Waypoint>   */}
      {/* <Waypoint onEnter={handleSectionChange(2)}> */}
        <div className="about" 
        // ref={BioRef}
        // ref={sectionRef}
        >
          <Bio />
        </div>
        {/* </Waypoint>   */}
        {/* <Waypoint onEnter={handleSectionChange(3)}> */}
        <div className="work-experience" 
        // ref={WorkRef}
        // ref={sectionRef}
        >
          <WorkExperience />
        </div>
      {/* </Waypoint>   */}
      {/* <Waypoint onEnter={handleSectionChange(4)}> */}
        <div className="projects" 
        // ref={ProjectRef}
        // ref={sectionRef}
        >
          <Projects />
        </div>
        {/* </Waypoint> */}
        {/* <Waypoint onEnter={handleSectionChange(5)}>   */}
        <div className="learn-more" 
        // ref={LearnRef}
        // ref={sectionRef}
        >
          <LearnMore />
        </div>
        {/* </Waypoint>   */}
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
