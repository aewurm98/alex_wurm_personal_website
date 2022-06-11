/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState, useRef} from "react";

// react-router components
import { Routes, Route, Navigate, useLocation} from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
//import Presentation from "layouts/pages/presentation";

// My added pages
import Home from "pages/LandingPages/Home"
import HeroSection from "pages/LandingPages/HeroSection";
import Bio from "pages/LandingPages/Bio";
import WorkExperience from "pages/LandingPages/WorkExperience";
import Projects from "pages/LandingPages/Projects";
import LearnMore from "pages/LandingPages/LearnMore";

// Material Kit 2 React routes
import routes from "routes";


export default function App() {
  // const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  // useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  // }, [pathname]);

  // Potential alternative to save the scroll position
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

// useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);


  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      console.log(route.route.slice(1))
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      // const scrollPos = document.getElementById(route.route.slice(1))
      // scrollPos.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      return null;
    });

    // Default site from Creative Tim Package
  // return (
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <Routes>
  //       {getRoutes(routes)}
  //       <Route path="/presentation" element={<Presentation />} />
  //       <Route path="*" element={<Navigate to="/presentation" />} />
  //     </Routes>
  //   </ThemeProvider>
  // );

  //TODO: Fix all of the console log errors from browser inspection
  //TODO: Implement Hash Links (https://stackoverflow.com/questions/40280369/use-anchors-with-react-router)
  //TODO: Implement scroll lock to position is saved when refreshing the page

  //FIXME: Rip out Default Navbar and Centered Footer entirely; replicate similar but simpler components and use normal linking
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Navigate to="/about" />} onEnter={function(){
                  document.getElementById("about").scrollIntoView()}} />
        <Route path="/work-experience" element={<Navigate to="/work-experience" />} onEnter={function(){
                  document.getElementById("work-experience").scrollIntoView()}}/>
        <Route path="/projects" element={<Navigate to="/projects" />} onEnter={function(){
                  document.getElementById("projects").scrollIntoView()}}/>
        <Route path="/learn-more" element={<Navigate to="/learn-more" onEnter={function(){
                  document.getElementById("learn-more").scrollIntoView()}}/>} /> */}
      </Routes>
    </ThemeProvider>
  );
}
