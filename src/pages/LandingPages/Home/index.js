// React Components
import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
// import { Waypoint } from "react-waypoint";

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
  }, []);

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

  // for (let item of sections) {
  //   console.log(item.id)
  // }

  // const [currentSection, setCurrentSection] = useState(1);

  // const getSection = useCallback(() => {
  //   return currentSection;
  // }, [currentSection])

  // const {homeRef, homeInView } = useInView({
  //   fallbackInView: true,
  //   threshold: 0.51,
  // })

  // const {bioRef, bioInView } = useInView({
  //   fallbackInView: true,
  //   threshold: 0.51,
  // })

  // const {workRef, workInView } = useInView({
  //   fallbackInView: true,
  //   threshold: 0.51,
  // })

  // const {projectRef, projectInView } = useInView({
  //   fallbackInView: true,
  //   threshold: 0.51,
  // })

  // const {learnRef, learnInView } = useInView({
  //   fallbackInView: true,
  //   threshold: 0.51,
  // })

  // useEffect(() => {

  //   function handleScroll() {
  //     console.log("scrolling");
  //     // console.log(homeInView)
  //     // console.log(bioInView)
  //     // console.log(workInView)
  //     // console.log(projectInView)
  //     // console.log(learnInView)
  //     // homeInView ? setCurrentSection(currentSection => 1)
  //     //   : bioInView ? setCurrentSection(currentSection => 2)
  //     //   : workInView ? setCurrentSection(currentSection => 3)
  //     //   : projectInView ? setCurrentSection(currentSection => 4)
  //     //   : learnInView ? setCurrentSection(currentSection => 5)
  //     //   : setCurrentSection(currentSection => 6)
  //     // console.log(getSection())
  //     console.log(window.pageYOffset)
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);

  // },)

  // https://stackoverflow.com/questions/43233115/chrome-content-scripts-arent-working-domcontentloaded-listener-does-not-execut

  // if (sections[0].className !== "app") {
  //   console.log(sections[0].children.item(2).className);
  //   console.log(sections[0].children.item(2).offsetTop);
  // }
  // else {
  //   console.log("loading")
  // }

  return (
    <>
      {/* TODO: Find alternative to Waypoints that allows changing Navbar elements on scroll 
      and allows locking position for when navigating back to site from external link 
      https://www.smashingmagazine.com/2020/11/react-useref-hook/ 
      TODO: Consider Framer Motion library*/}

      {/*TODO: Now that DOM rendering order is resolved; fix the ref/state parameters based on window.pageYOffset vs. elements OffsetTop */}

      <Navbar />

      <div
        className="home"
        // onChange = {() => setCurrentSection(currentSection => 1)}
        // ref={homeRef}
      >
        <HeroSection />
      </div>
      <div
        className="about"
        // onChange = {() => setCurrentSection(currentSection => 2)}
        // ref={bioRef}
      >
        <Bio />
      </div>
      <div
        className="work-experience"
        // onChange = {() => setCurrentSection(currentSection => 3)}
        // ref={workRef}
      >
        <WorkExperience />
      </div>
      <div
        className="projects"
        // onChange = {() => setCurrentSection(currentSection => 4)}
        // ref={projectRef}
      >
        <Projects />
      </div>
      <div
        className="learn-more"
        // onChange = {() => setCurrentSection(currentSection => 5)}
        // ref={learnRef}
      >
        <LearnMore />
      </div>
      <div
        className="footer"
        // onChange = {() => setCurrentSection(currentSection => 6)}
      >
        <Footer />
      </div>
    </>
  );
}

export default Home;
