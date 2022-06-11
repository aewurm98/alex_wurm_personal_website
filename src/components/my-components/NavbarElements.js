import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const toTop = () => {
    scroll.scrollToTop();
  };

  const toggleHome = () => {
    {
      setClick(false);
    }
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <LinkS to="/" className="navbar-logo" onClick={toggleHome}>
            <i class="fa-solid fa-basketball"></i>
            Alex Wurm
          </LinkS>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <LinkS
                to="about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                to="work-experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Work Experience
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                to="projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </LinkS>
            </li>

            <li>
              <LinkS
                to="learn-more"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Learn More
              </LinkS>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
