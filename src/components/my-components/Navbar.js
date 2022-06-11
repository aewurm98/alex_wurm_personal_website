import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>

        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class="fa-solid fa-basketball"></i>
            Alex Wurm
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/work-experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work Experience
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/learn-more'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Learn More
              </Link>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;