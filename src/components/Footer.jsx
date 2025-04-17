import React from "react";
import Wrapper from "../assets/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container" id="contact">
        <img src="/logo.png" alt="" />
        <div className="address">
          <div className="address-col">
            <h2 className="title">Head Office</h2>
            <div className="content">
              No.1 Ushie Obi's Compound, <br />
              Ushie Achu's Street, <br />
              Ebebbank Bekwarra Cross River State <br />
              Tel: 08130581830, 08093928633 <br />
            </div>
          </div>
          <div className="address-col">
            <h2 className="title">Bayelsa Office</h2>
            <div className="content">
              Chief Elliot Close,
              <br />
              Kpansia Yenagoa,
              <br />
              Bayelsa State
              <br />
              Tel: 08069766418, 09024948725 <br />
            </div>
          </div>
          <div className="address-col">
            <h2 className="title">Abuja Office</h2>
            <div className="content">
              Tunga Dalatu Dakwa 1, <br />
              Opposite Dantata Yard by VIO, Road Safety,
              <br /> P.O Box 114 Kubwa, General Post Office,
              <br />
              Tel: 08093928633, 07065659556 <br />
            </div>
          </div>
        </div>
        <h2>Email: ushieeneji1951@gmail.com</h2>
      </div>
    </Wrapper>
  );
};

export default Footer;
