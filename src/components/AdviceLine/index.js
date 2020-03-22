import React from "react";
import Phone from "../../images/phone.svg";

const AdviceLine = () => (
  <div className="info">
    <h2>COVID-19 Advice Line</h2>
    <a href="tel: 148">
      <img src={Phone} alt="Call" />
      <span>148</span>
    </a>
  </div>
);

export default AdviceLine;
