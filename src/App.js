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

// other react components
// import useSWR from 'swr';
import HashLoader from "react-spinners/HashLoader";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// Material Kit 2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React themes
import theme from "assets/theme";
//import Presentation from "layouts/pages/presentation";

// My added pages
import Home from "pages/LandingPages/Home";

// My Styles
import "App.css";

// TODO: Cleanup -- all added event listeners should also be removed

export default function App() {
  //TODO: Fix all of the console log errors from browser inspection
  //TODO: Fix issue where after coming back from another website, starts at the top and scrolls all the way down
  // https://blog.bitsrc.io/introduction-to-react-location-e84a5c19c5d8
  // Use one of the available packages (e.g., react-update-url-on-scroll to maintain scroll links but allow location pathname usage)

  // const sections = document.querySelectorAll('div');

  // sections.forEach( section => {
  //   const sectionTop = section.offsetTop;
  //   console.log(sectionTop)
  // }
  // )

  // const year = new Date().getFullYear();

  //TODO: Find alternative method of loading spinner that doesn't use react-spinner and allows formatting
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   function handlePageLoaded() {
  //     setLoading(false);
  //     console.log("Page is loaded");
  //   }

  //   window.addEventListener("load", handlePageLoaded);

  //   return () => window.removeEventListener("load", handlePageLoaded);
  // }, []);

  return (
  //   loading ? (
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <div className="Loading">
  //       <MKBox
  //         sx={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           spacing: 0,
  //           height: "100%",
  //           width: "100%",
  //           flexDirection: "column",
  //         }}
  //       >
  //         <MKBox
  //           sx={{
  //             flex: 1,
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //             width: "100%",
  //           }}
  //         >
  //           <HashLoader
  //             loading={loading}
  //             size={200}
  //             color="teal"
  //             speedMultiplier={1}
  //           />
  //         </MKBox>
  //         <MKBox
  //           sx={{
  //             flex: 1,
  //             display: "flex",
  //             width: "100%",
  //             alignItems: "center",
  //             justifyContent: "start",
  //             flexDirection: "column",
  //           }}
  //         >
  //           <MKTypography fontWeight="bold" sx={{ flex: 1 }}>
  //             Keeping you in suspense...
  //           </MKTypography>
  //           <MKTypography fontWeight="light" sx={{ flex: 0.5 }}>
  //             Alex Wurm
  //           </MKTypography>
  //           <MKTypography fontWeight="light" sx={{ flex: 2 }}>
  //             Copyright &copy; {year}
  //           </MKTypography>
  //         </MKBox>
  //       </MKBox>
  //     </div>
  //   </ThemeProvider>
  // ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/work-experience" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/learn-more" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  // )
  );
}
