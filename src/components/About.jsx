import React, { useState } from "react";
import Wrapper from "../assets/About";
import AccordionItem from "./AccordionItem";
import { FaInfinity } from "react-icons/fa6";
import data from "./aboutData.js";

function About() {
  const [active, setActive] = useState(-1);

  function handleActive(i) {
    i != active ? setActive(i) : setActive(-1);
  }

  const accordionProps = { handleActive, active };

  return (
    <Wrapper>
      <h1>
        <FaInfinity /> What We do
      </h1>
      <ul className="accordion">
        {data.map((item, index) => (
          <div key={item?.title} className="">
            <AccordionItem item={item} index={index} {...accordionProps} />
          </div>
        ))}
      </ul>
    </Wrapper>
  );
}

export default About;
