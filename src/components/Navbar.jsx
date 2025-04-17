import React from "react";
import Wrapper from "../assets/Navbar";
import logo from "/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="" />
        EPJ-PUFO & SONS ENT. LTD
      </div>
      <ul className="nav-list">
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
    </Wrapper>
  );
}

export default Navbar;
