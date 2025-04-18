import React, { useState } from "react";
import Wrapper from "../assets/Navbar";
import logo from "/logo.png";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  const [mobileClass, setMobileClass] = useState("");

  function toggleNavBar() {
    mobileClass == "mobile-menu" ? setMobileClass(" ") : setMobileClass("mobile-menu");
  }

  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="" />
        EPJ-PUFO & SONS ENT. LTD
      </div>
      <ul className={`nav-list ${mobileClass}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="contact">
          <a className="diff" href="#contact">
            {/* <FaPhoneAlt /> */}
            Contact
          </a>
        </li>
      </ul>
      <button onClick={toggleNavBar} className="menu-icon">
        <BiMenuAltRight />
      </button>
    </Wrapper>
  );
}

export default Navbar;
