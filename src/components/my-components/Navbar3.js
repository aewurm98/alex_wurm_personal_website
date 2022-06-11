import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
// import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import NavbarBase from "components/my-components/NavbarBase.js";
import NavbarMobile from "components/my-components/NavbarMobile.js";

// Material Kit 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Set website logo
const siteLogo = <i class="fa-solid fa-basketball"></i>;
const navItemLogo = <i class="fa-solid fa-basketball-hoop"></i>;

//TODO: Investigate porential to increase span size to make clicking easier
function Navbar3({
  logo,
  brand,
  transparent,
  light,
  sticky,
  relative,
  center,
}) {
  // NOTE: Functions needed for routes dropdown
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");

  // const [dropdownName, setDropdownName] = useState("");

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  const closeMobileNavbar = () => setMobileNavbar(false);

  // function goToSection(rt) {
  //   setMobileNavbar(false);
  //   document.getElementById(rt.slice(1)).scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // }

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
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

  //TODO: Change functionality for handling clicks to close Navbar -- handleOutsideClick at the Container level

  useEffect(() => {
    function handleInteraction(evt) {
      evt.stopPropagation();
      console.log(evt);
      if (
        evt.target.nodeName !== "SPAN" &&
        evt.target.nodeName !== "I" &&
        evt.target.nodeName !== "svg"
      ) {
        setMobileNavbar(false);
      }
    }

    window.addEventListener("click", handleInteraction);
  });

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
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
            <MKBox mr={1} component={Link} to="home">
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={0}
              >
                {siteLogo}
              </LinkS>
            </MKBox>
            <MKBox component={Link} to="home">
            <MKTypography
              variant="button"
              fontWeight="bold"
              color={light ? "white" : "dark"}
            >
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={0}
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
                variant="button"
                fontWeight="medium"
                color={light ? "white" : "dark"}
                mx="auto"
              >
                <LinkS
                  to="about"
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
                fontWeight="medium"
                color={light ? "white" : "dark"}
                mx="auto"
              >
                <LinkS
                  to="work-experience"
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
                fontWeight="medium"
                color={light ? "white" : "dark"}
                mx="auto"
              >
                <LinkS
                  to="projects"
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
                fontWeight="medium"
                color={light ? "white" : "dark"}
                mx="auto"
              >
                <LinkS
                  to="learn-more"
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
          {/* NOTE: start of the mobile section */}
          {mobileView && (
            <MKBox
            my={1}
            mx={0}
            p={0}
            minHeight="20vh"
            display="grid"
            direction="row"
            justifyContent="start"
            alignItems="start"
            color={light ? "white" : "dark"}
            opacity={light ? 1 : 0.6}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <MKTypography
              variant="button"
              fontWeight="medium"
              color={light ? "white" : "dark"}
              my="auto"
            >
              {navItemLogo}

              <LinkS
                to="about"
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
              fontWeight="medium"
              color={light ? "white" : "dark"}
              my="auto"
            >
              <LinkS
                to="work-experience"
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
              fontWeight="medium"
              color={light ? "white" : "dark"}
              my="auto"
            >
              <LinkS
                to="projects"
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
              fontWeight="medium"
              color={light ? "white" : "dark"}
              my="auto"
            >
              <LinkS
                to="learn-more"
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
          )}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
Navbar3.defaultProps = {
  logo: siteLogo,
  brand: "Alex Wurm",
  transparent: false,
  light: false,
  sticky: true,
  relative: false,
  center: false,
};

export default Navbar3;
