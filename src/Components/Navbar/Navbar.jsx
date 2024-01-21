/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { NavbarContainer, ResponsiveNav } from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../Assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);

  const hideSidebar = () => {
    setNavbarState(false);
  };

  const showSidebar = (even) => {
    even.stopPropagation();
    setNavbarState(true);
  };

  return (
    <>
      <NavbarContainer>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            <span>Travelsa</span>
          </div>

          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={hideSidebar} />
            ) : (
              <GiHamburgerMenu onClick={showSidebar} />
            )}
          </div>
        </div>

        <div className="nav__Menu">
          <ul>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="hero"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="recommend"
              >
                Places
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="testimonial"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__Button">
          <button>Connect</button>
        </div>
      </NavbarContainer>

      <ResponsiveNav state={navbarState}>
        <div className="nav__Menu">
          <ul>
            <li>
              <Link activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="hero" onClick={() => setNavbarState(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="services" onClick={() => setNavbarState(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="recommend" onClick={() => setNavbarState(false)}>
                Places
              </Link>
            </li>
            <li>
              <Link activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="testimonial" onClick={() => setNavbarState(false)}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
};

export default Navbar;
