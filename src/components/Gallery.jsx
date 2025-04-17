import React, { useEffect } from "react";
import Images from "../assets/images/index";
import Wrapper from "../assets/Gallery";

function Gallery() {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    return () => {
      document.removeEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
    };
  }, []);

  return (
    <Wrapper id="projects">
      <div className="container">
        {Images.map((img, index) => (
          <div key={index} className="image">
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Gallery;
