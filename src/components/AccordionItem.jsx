import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function AccordionItem({ item, index, handleActive, active }) {
  return (
    <>
      <li onClick={() => handleActive(index)} id="about">
        {item.title} {active == index ? <FaMinus /> : <FaPlus />}
      </li>
      {active == index && <div className={`content`}>{item.content}</div>}
    </>
  );
}

export default AccordionItem;
