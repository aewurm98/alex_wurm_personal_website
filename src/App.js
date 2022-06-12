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

// My added pages
import Home from "pages/LandingPages/Home";

export default function App() {
  //TODO: Fix all of the console log errors from browser inspection
  //TODO: Fix issue where after coming back from another website, starts at the top and scrolls all the way down
  // https://blog.bitsrc.io/introduction-to-react-location-e84a5c19c5d8
  // Use one of the available packages (e.g., react-update-url-on-scroll to maintain scroll links but allow location pathname usage)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<Home />} />
        <Route path="/work-experience" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/learn-more" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
