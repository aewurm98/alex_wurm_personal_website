// React components
import { BrowserView, MobileView } from "react-device-detect";
// import {Link} from "react-scroll";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { spacing } from "@mui/system";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// MUIKit2 Examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";

// Routes
// import routes from "routes";

// Images
import alex from "assets/images/my-images/Alex_Nature_Zoom.png";
import bgi from "assets/images/my-images/Abstract_Lines.jpg";
import mountains1 from "assets/images/my-images/Blue_Mountains.jpg";
import mountains2 from "assets/images/my-images/Black_Mountains.jpg";
import mountains3 from "assets/images/my-images/Orange_Mountains.jpg";
import mountains4 from "assets/images/my-images/Turquoise_Mountains.jpg";
import voyage from "assets/images/my-images/voyage_logo.png";
import bain from "assets/images/my-images/bain_logo.png";
import kindeva from "assets/images/my-images/Kindeva_logo.png";
import cornell from "assets/images/my-images/Cornell_logo.png";
import pepsico from "assets/images/my-images/Pepsico_logo.png";
import pg from "assets/images/my-images/Procter_Gamble_logo.png";
import lp from "assets/images/my-images/Logicprep_logo.png";

// Other Components
import SimpleNavbar from "components/my-components/SimpleNavbar.js";
import Navbar from "components/my-components/Navbar.js";
import Navbar2 from "components/my-components/Navbar2.js";
import Navbar3 from "components/my-components/Navbar3.js";

import HeroSection from "pages/LandingPages/HeroSection";
import Bio from "pages/LandingPages/Bio";
import WorkExperience from "pages/LandingPages/WorkExperience";
import Projects from "pages/LandingPages/Projects";
import LearnMore from "pages/LandingPages/LearnMore";

const routes = [
  {
    name: "about",
    route: "/about",
    component: <Home />
  },
  {
    name: "work-experience",
    route: "/work-experience",
    component: <Home />
  },
  {
    name: "projects",
    route: "/projects",
    component: <Home />
  },
  {
    name: "learn-more",
    route: "/learn-more",
    component: <Home />
  },
];
// TODO: Go back into Default Navbar and figure out how to add back functionality to collapse entire navbar after making a selection or clicking out
// Home page. It works when I click the 'X' icon, so look through code to find and replicate that behavior.
function Home() {
  return (
    <>
      <Navbar3
      // light 
      // sx = {{
      //   color: "white"
      // }}
      />
      <div className="home">
        <HeroSection/>
      </div>
      <div className="about">
        <Bio/>
      </div>
      <div className="work-experience">
        <WorkExperience/>
      </div>
      <div className="projects">
        <Projects/>
      </div>
      <div className="learn-more">
        <LearnMore/>
      </div>
      
      {/* TODO: Fix issue where clicking link navigates to top of site instead of proper section  */}
      <CenteredFooter/>
    </>
  );
}

export default Home;
