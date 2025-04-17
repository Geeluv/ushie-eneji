import React from "react";
import banner from "../assets/hero_1.jpg";
import Wrapper from "../assets/Hero";

function Hero() {
  return (
    <Wrapper>
      <img src={banner} alt="" />
      <div className="overlay">
        <div className="title">Who We Are</div>
        <h1>
          General Contractors, Pollution Consultants,{" "}
          <span className="accent">Import & Export,</span> Facilitators for Sales of Liquid Natural
          Gas, <span className="accent">LNG License & LNG Dual License.</span>
        </h1>
      </div>
    </Wrapper>
  );
}

export default Hero;
