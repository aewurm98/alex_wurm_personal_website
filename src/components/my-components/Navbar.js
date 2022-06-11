

import {  
    useState,
    useEffect,
  } from "react";
  
  // react-router components
  import { Link } from "react-router-dom";
  // import {Link} from "react-scroll"; doesn't work for brand on navbar
  
  
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
  
  //TODO: Investigate porential to increase span size to make clicking easier
  function Navbar({
    logo,
    brand,
    routes,
    transparent,
    light,
    action,
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
  
    function goToSection(rt) {
      setMobileNavbar(false);
      document.getElementById(rt.slice(1)).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})
    }
  
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
  
    // Adding useEffect for clicking outside of the Navbar
    // TODO: Figure out why the EventListeners are preventing navigating to external links
    // May need to add additional EventListener for link clicks, and build into the conditional logic of handleInteraction()
    // More likely need to find a better way to handle exiting the navbar otherwise defeats purpose of links; otherwise fine when makes sense to remove
  
    useEffect(() => {
      function handleInteraction(evt) {
        evt.stopPropagation();
        console.log(evt);
        if (
          evt.target.nodeName !== "SPAN"
          && evt.target.nodeName !== 'I' && evt.target.nodeName !== 'svg'
        ) {
          setMobileNavbar(false);
        }
      }
  
      window.addEventListener("click", handleInteraction);
    });
  
    const renderNavbarItems = routes.map(
      ({ name, icon, href, route, collapse }) => (
        <NavbarBase
          key={name}
          name={name}
          icon={icon}
          href={href}
          route={route}
          collapse={Boolean(collapse)}
          onMouseEnter={({ currentTarget }) => {
            if (collapse) {
              // NOTE: Needed for collapsible sub-routes menus
              setDropdown(currentTarget);
              setDropdownEl(currentTarget);
              // setDropdownName(name);
            }
          }}
          onMouseLeave={() =>
            collapse &&
            // NOTE: Needed for collapsible sub-routes menus
  
            setDropdown(null)
          }
          light={light}
        />
      )
    );
  
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
              component={Link}
              to="/"
              lineHeight={1}
              py={transparent ? 1.5 : 0.75}
              pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
              display="flex"
              justifyContent="start"
              alignItems="center"
              // Added Navbar close on Link click
              onClick={closeMobileNavbar}
            >
              <MKBox mr={1}>{siteLogo}</MKBox>
  
              <MKTypography
                variant="button"
                fontWeight="bold"
                color={light ? "white" : "dark"}
              >
                {brand}
              </MKTypography>
            </MKBox>
            <MKBox
              color="inherit"
              display={{ xs: "none", lg: "flex" }}
              ml="auto"
              mr={center ? "auto" : 0}
            >
              {renderNavbarItems}
            </MKBox>
            <MKBox ml={{ xs: "auto", lg: 0 }}>
              {action &&
                (action.type === "internal" ? (
                  <MKButton
                    component={Link}
                    to={action.route}
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                    // Added Navbar close on Link click
                    onClick={goToSection(this.to)}
                  >
                    {action.label}
                  </MKButton>
                ) : (
                  <MKButton
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                    // Added Navbar close on Link click
                    onClick={closeMobileNavbar}
                  >
                    {action.label}
                  </MKButton>
                ))}
            </MKBox>
            <MKBox
              display={{ xs: "inline-block", lg: "none" }}
              lineHeight={0}
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
            {mobileView && (
              <NavbarMobile routes={routes} open={mobileNavbar} />
            )}
          </MKBox>
        </MKBox>
      </Container>
    );
  }
  
  // Setting default values for the props of DefaultNavbar
  Navbar.defaultProps = {
    logo: siteLogo,
    brand: "Alex Wurm",
    transparent: false,
    light: false,
    action: false,
    sticky: true,
    relative: false,
    center: false,
  };
  
  // Typechecking props for the DefaultNavbar
  Navbar.propTypes = {
    logo: PropTypes.any,
    brand: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    transparent: PropTypes.bool,
    light: PropTypes.bool,
    action: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]).isRequired,
        route: PropTypes.string.isRequired,
        color: PropTypes.oneOf([
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "dark",
          "light",
          "default",
          "white",
        ]),
        label: PropTypes.string.isRequired,
      }),
    ]),
    sticky: PropTypes.bool,
    relative: PropTypes.bool,
    center: PropTypes.bool,
  };
  
  export default Navbar;
  