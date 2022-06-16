import { useState, useEffect, useRef } from "react";

// react-router components
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// other react library components
import OutsideClickHandler from "react-outside-click-handler";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// My components

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Set website logos
const siteLogo = <i class="fa-solid fa-basketball"></i>;
const navItemLogo1 = <i class="fa-solid fa-circle-user"></i>;
const navItemLogo2 = <i class="fa-solid fa-briefcase"></i>;
const navItemLogo3 = <i class="fa-solid fa-code"></i>;
const navItemLogo4 = <i class="fa-solid fa-comments"></i>;

// Routes
const routeHome = "home";
const routeAbout = "about";
const routeWorkExperience = "work-experience";
const routeProjects = "projects";
const routeLearnMore = "learn-more"

//TODO: Investigate porential to increase span size to make clicking easier
function Navbar({ logo, brand, transparent, light, sticky, relative, center}) {
  
  // Helper Functions

  // Function that updates the visibility state of each section by checking against scroll position
  function checkViews() {
    (window.scrollY > aboutOffset*0.5) && (window.scrollY <= (aboutOffset+workOffset)/2) ?
    setAboutInView(true) : setAboutInView(false);

    (window.scrollY > (aboutOffset+workOffset)/2) && (window.scrollY <= (workOffset+projectsOffset)/2) ?
    setWorkInView(true) : setWorkInView(false);

    (window.scrollY > (workOffset+projectsOffset)/2) && (window.scrollY <= (projectsOffset+learnOffset)/2) ?
    setProjectsInView(true) : setProjectsInView(false);

    (window.scrollY > (projectsOffset+learnOffset)/2) && (window.scrollY <= footerOffset) ?
    setLearnInView(true) : setLearnInView(false);
  }

  // Function that updates visibility of sections as the user scrolls to save in local storage for page refresh

  // function storeView() {

  // }

  // Function that updates the offsets of each section
  function updateOffsets() {
    const sections = document.querySelectorAll("div")[0].children;
    setAboutOffset(sections[0].children[2].offsetTop);
    setWorkOffset(sections[0].children[3].offsetTop);
    setProjectsOffset(sections[0].children[4].offsetTop);
    setLearnOffset(sections[0].children[5].offsetTop);
    setFooterOffset(sections[0].children[6].offsetTop);
    // console.log(sections[0].children[1].className, sections[0].children[1].offsetTop);
    // console.log(sections[0].children[2].className, sections[0].children[2].offsetTop);
    // console.log(sections[0].children[3].className, sections[0].children[3].offsetTop);
    // console.log(sections[0].children[4].className, sections[0].children[4].offsetTop);
    // console.log(sections[0].children[5].className, sections[0].children[5].offsetTop);
    // console.log(sections[0].children[6].className, sections[0].children[6].offsetTop);
    // console.log(`About offset is ${aboutOffset}`)
    // console.log(`Work offset is ${workOffset}`)
    // console.log(`Project offset is ${projectsOffset}`)
    // console.log(`Learn offset is ${learnOffset}`)
    // console.log(`Footer offset is ${footerOffset}`)
  }

  // Hooks

    // States related to Mobile Navbar view
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);
    const closeMobileNavbar = () => setMobileNavbar(false);
  
    // States related to section locations
    const [aboutOffset, setAboutOffset] = useState(765);
    const [workOffset, setWorkOffset] = useState(1530);
    const [projectsOffset, setProjectsOffset] = useState(2295);
    const [learnOffset, setLearnOffset] = useState(3060);
    const [footerOffset, setFooterOffset] = useState(3825);
  
    // States related to section visibility
    const [aboutInView, setAboutInView] = useState(false);
    const [workInView, setWorkInView] = useState(false);
    const [projectsInView, setProjectsInView] = useState(false);
    const [learnInView, setLearnInView] = useState(false);

  // Constants

  // Constants related to local storage TODO: Figure out how to avoid circular logic and fix refresh killing navbar view
  // const aboutInitial = (JSON.parse(window.localStorage.getItem('About_Section_Visibility')) !== null) ? JSON.parse(window.localStorage.getItem('About_Section_Visibility')) : aboutInView;
  // const workInitial = (JSON.parse(window.localStorage.getItem('Work_Section_Visibility')) !== null) ? JSON.parse(window.localStorage.getItem('Work_Section_Visibility')) : workInView;
  // const projectsInitial = (JSON.parse(window.localStorage.getItem('Projects_Section_Visibility')) !== null) ? JSON.parse(window.localStorage.getItem('Projects_Section_Visibility')) : projectsInView;
  // const learnInitial = (JSON.parse(window.localStorage.getItem('Learn_Section_Visibility')) !== null) ? JSON.parse(window.localStorage.getItem('Learn_Section_Visibility')) : learnInView;
  
  // More Hooks

  // A Hook that updates the offsets of each section when the page loads, to account for different window sizes
  useEffect(() => {
    function handleAssetsLoaded() {
      // console.log("Page is loaded");
      // console.log(window.sessionStorage);
      // console.log(window.localStorage);

      const sections = document.querySelectorAll("div")[0].children;
      setAboutOffset(sections[0].children[2].offsetTop);
      setWorkOffset(sections[0].children[3].offsetTop);
      setProjectsOffset(sections[0].children[4].offsetTop);
      setLearnOffset(sections[0].children[5].offsetTop);
      setFooterOffset(sections[0].children[6].offsetTop);
      console.log(window.localStorage);

      // FIXME: Figure out how to get views visibility to check and update on pageload
      checkViews();
    }

    /** 
      The event listener that's calling the handleAssetsLoaded function when 
      loading the window.
    */
    window.addEventListener("load", handleAssetsLoaded);

    // Remove event listener on cleanup
    return () => window.removeEventListener("load", handleAssetsLoaded);
  },);

    // A Hook that retrieves the visibility of each section from local storage when the page loads
    useEffect(() => {
      setAboutInView(prev => JSON.parse(window.localStorage.getItem('About_Section_Visibility')));
      setWorkInView(prev => JSON.parse(window.localStorage.getItem('Work_Section_Visibility')));
      setProjectsInView(prev => JSON.parse(window.localStorage.getItem('Projects_Section_Visibility')));
      setLearnInView(prev => JSON.parse(window.localStorage.getItem('Learn_Section_Visibility')));
    },[])

  // A Hook that sets the display state for the DefaultNavbarMobile.
  useEffect(() => {

    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
       The event listener that's calling the displayMobileNavbar function when 
       resizing the window.
      */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  // A Hook that updates the offsets of each section using the helper function above whenver the window is resized
  useEffect(() => {

    function handleResize() {
      // console.log("resizing");
      updateOffsets();
    }  

    /** 
      The event listener that's calling the handleResize function when 
      resizing the window.
    */
    window.addEventListener("resize",handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  })

  // A Hook that updates the visibility state of each section as the viewer scrolls
  useEffect(() => {

    function handleScroll() {
      // console.log("scrolling");
      // console.log(window.scrollY)
      console.log(`About in view: ${aboutInView}`);
      console.log(`Work in view: ${workInView}`);
      console.log(`Projects in view: ${projectsInView}`);
      console.log(`Learn in view: ${learnInView}`);

      // Helper function defined above
      checkViews();
    }

    /** 
      The event listener that's calling the handleScroll function when 
      scrolling.
    */
    window.addEventListener("scroll", handleScroll);
  
    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  
  },) 

    // A Hook that stores the visibility of each section in local storage whenever the visibility of a section changes
    useEffect(() => {
      window.localStorage.setItem('About_Section_Visibility', JSON.stringify(aboutInView));
      window.localStorage.setItem('Work_Section_Visibility', JSON.stringify(workInView));
      window.localStorage.setItem('Projects_Section_Visibility', JSON.stringify(projectsInView));
      window.localStorage.setItem('Learn_Section_Visibility', JSON.stringify(learnInView));
      // console.log(window.localStorage);
    },[aboutInView, workInView, projectsInView, learnInView])

  return (
      
      //Overall Navbar
      <Container
        sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}
      >
        {/* /Makes sure Navbar closes when clicking out */}
        <OutsideClickHandler onOutsideClick={() => setMobileNavbar(false)}>

        {/* Core Navbar element */}
        <MKBox
          py={1}
          px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
          my={relative ? 0 : 2}
          mx={relative ? 0 : 3}
          width={relative ? "100%" : "calc(100% - 48px)"}
          borderRadius="xl"
          shadow={transparent ? "none" : "md"}
          color={light ? "white" : "dark"}
          position={relative ? "relative" : "absolute"}
          left={0}
          zIndex={3}
          sx={({
            palette: { transparent: transparentColor, white },
            functions: { rgba },
          }) => ({
            backgroundColor: transparent
              ? transparentColor.main
              : rgba(white.main, 0.8),
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          })}
        >
          {/* Navbar items */}
          <MKBox display="flex" justifyContent="start" alignItems="center">
            <MKBox
              to="/"
              lineHeight={1}
              py={transparent ? 1.5 : 0.75}
              pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
              display="flex"
              flex={1}
              justifyContent="start"
              alignItems="center"
              // Added Navbar close on Link click
              onClick={closeMobileNavbar}
            >
              <MKBox mr={1} component={Link} to={routeHome}>
                <LinkS
                  to={routeHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={0}
                  onClick={closeMobileNavbar}
                >
                  {siteLogo}
                </LinkS>
              </MKBox>
              <MKBox component={Link} to={routeHome}>
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  color={light ? "white" : "dark"}
                >
                  <LinkS
                    to={routeHome}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                    onClick={closeMobileNavbar}
                  >
                    {brand}
                  </LinkS>
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              color="inherit"
              display={{ xs: "none", lg: "flex" }}
              flex={{ xs: 0, lg: 1 }}
              ml="auto"
              mr={center ? "auto" : 0}
            >
              <MKBox
                mx={0}
                p={0}
                width="100%"
                display="flex"
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
                color={light ? "white" : "dark"}
                opacity={light ? 1 : 0.6}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <MKTypography
                  // onMouseEnter={setAboutHovered(true)}
                  // onMouseLeave={setAboutHovered(false)}
                  // onMouseOver={console.log("about entered")}
                  variant="button"
                  fontWeight = {aboutInView ? "bold" : "regular"}
                  color={light ? "white" : "dark"}
                  mx="auto"
                  p={1}
                  sx = {{ borderBottom: aboutInView ? "2px solid #90a4ae" : "2px solid transparent",
                          "&:hover": {fontWeight: "bold", borderBottom: "2px solid #90a4ae"}}}
                >
                  <LinkS
                    to={routeAbout}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    About
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="button"
                  fontWeight = {workInView ? "bold" : "regular"}
                  color={light ? "white" : "dark"}
                  mx="auto"
                  p={1}
                  sx = {{ borderBottom: workInView ? "2px solid #90a4ae" : "2px solid transparent" ,
                  "&:hover": {fontWeight: "bold", borderBottom: "2px solid #90a4ae"}}}
                >
                  <LinkS
                    to={routeWorkExperience}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Work Experience
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="button"
                  fontWeight = { projectsInView ? "bold" : "regular"}
                  color={light ? "white" : "dark"}
                  mx="auto"
                  p={1}
                  sx = {{ borderBottom: projectsInView ? "2px solid #90a4ae" : "2px solid transparent" ,
                  "&:hover": {fontWeight: "bold", borderBottom: "2px solid #90a4ae"}}}
                >
                  <LinkS
                    to={routeProjects}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Projects
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="button"
                  fontWeight = { learnInView ? "bold" : "regular"}
                  color={light ? "white" : "dark"}
                  mx="auto"
                  p={1}
                  sx = {{ borderBottom: learnInView ? "2px solid #90a4ae" : "2px solid transparent" ,
                  "&:hover": {fontWeight: "bold", borderBottom: "2px solid #90a4ae"}}}
                >
                  <LinkS
                    to={routeLearnMore}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Learn More
                  </LinkS>
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              display={{ xs: "grid", lg: "none" }}
              lineHeight={0}
              justifyContent="center"
              py={1.5}
              pl={1.5}
              color={transparent ? "white" : "inherit"}
              sx={{ cursor: "pointer" }}
              onClick={openMobileNavbar}
            >
              <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
            </MKBox>
          </MKBox>
          <MKBox
            bgColor={transparent ? "white" : "transparent"}
            shadow={transparent ? "lg" : "none"}
            borderRadius="xl"
            px={transparent ? 2 : 0}
          >
            {/* Mobile Dropdown Menu */}
            {mobileView && mobileNavbar && (
              <MKBox
                mt={2}
                mx={0}
                p={0}
                minHeight="20vh"
                display="flex"
                direction="row"
                justifyContent="start"
                alignItems="start"
                color={light ? "white" : "dark"}
                opacity={light ? 1 : 0.6}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <Stack mr={3} spacing={2}>
                  <MKTypography
                    variant="button"
                    fontWeight="medium"
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                  >
                    <LinkS
                      to={routeAbout}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                    >
                      {navItemLogo1}
                    </LinkS>
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="medium"
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                  >
                    <LinkS
                      to={routeWorkExperience}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                    >
                      {navItemLogo2}
                    </LinkS>
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="medium"
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                  >
                    <LinkS
                      to={routeProjects}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                    >
                      {navItemLogo3}
                    </LinkS>
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="medium"
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                  >
                    <LinkS
                      to={routeLearnMore}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                    >
                      {navItemLogo4}
                    </LinkS>
                  </MKTypography>
                </Stack>
                <Stack spacing={2}>
                  <MKTypography
                    variant="button"
                    fontWeight = { aboutInView ? "bold" : "regular"}
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                    sx = {{ borderLeft: aboutInView ? "2px solid #90a4ae" : "2px solid transparent"}}
                  >
                    <LinkS
                      to={routeAbout}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                      onClick={() => setMobileNavbar(false)}
                    >
                      About
                    </LinkS>
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight = { workInView ? "bold" : "regular"}
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                    sx = {{ borderLeft: workInView ? "2px solid #90a4ae" : "2px solid transparent"}}
                  >
                    <LinkS
                      to={routeWorkExperience}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                      onClick={() => setMobileNavbar(false)}
                    >
                      Work Experience
                    </LinkS>
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight = { projectsInView ? "bold" : "regular"}
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                    sx = {{ borderLeft: projectsInView ? "2px solid #90a4ae" : "2px solid transparent"}}

                  >
                    <LinkS
                      to={routeProjects}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                      onClick={() => setMobileNavbar(false)}
                    >
                      Projects
                    </LinkS>
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight = { learnInView ? "bold" : "regular"}
                    color={light ? "white" : "dark"}
                    my="auto"
                    p={1}
                    sx = {{ borderLeft: learnInView ? "2px solid #90a4ae" : "2px solid transparent"}}
                  >
                    <LinkS
                      to={routeLearnMore}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={0}
                      onClick={() => setMobileNavbar(false)}
                    >
                      Learn More
                    </LinkS>
                  </MKTypography>
                </Stack>
              </MKBox>
            )}
          </MKBox>
        </MKBox>
        </OutsideClickHandler>
      </Container>
  );
}

// Setting default values for the props of DefaultNavbar
Navbar.defaultProps = {
  logo: siteLogo,
  brand: "Alex Wurm",
  transparent: false,
  light: false,
  sticky: true,
  relative: false,
  center: false,
};

export default Navbar;
