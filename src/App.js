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

import { useEffect, useState, useRef } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
//import Presentation from "layouts/pages/presentation";

// MY added components
import Navbar from "components/my-components/Navbar.js";

// My added pages
import Home from "pages/LandingPages/Home";
import HeroSection from "pages/LandingPages/HeroSection";
import Bio from "pages/LandingPages/Bio";
import WorkExperience from "pages/LandingPages/WorkExperience";
import Projects from "pages/LandingPages/Projects";
import LearnMore from "pages/LandingPages/LearnMore";

// Material Kit 2 React routes
// import routes from "routes";

export default function App() {
  //TODO: Fix all of the console log errors from browser inspection
  //TODO: Implement Hash Links (https://stackoverflow.com/questions/40280369/use-anchors-with-react-router)
  //TODO: Implement scroll lock to position is saved when refreshing the page

  //FIXME: Rip out Default Navbar and Centered Footer entirely; replicate similar but simpler components and use normal linking
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/work-experience" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/learn-more" element={<Home />} />

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
