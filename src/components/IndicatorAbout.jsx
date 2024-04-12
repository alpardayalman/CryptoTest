import React from "react";
import "../css/indicatorabout.css";
import image from "../images/png.png";
import phone from "../images/phoneimg.png";

const IndicatorAbout = () => {
  return (
    <section className="indicator-section">
      <div className="indicator-container">
        <div className="indicator-wrapper">
          <div className="indicator-text-wrapper">
            <div className="indicator-text-title">
              <h1>
                The solution for turning{" "}
                <span className="indicator-text-gradient">
                  confusion into clarity.
                </span>
              </h1>
            </div>
            <div className="indicator-text-p">
              <p>
                Make a free TradingView profile and sign up with us to get
                advanced charts on any market. It works on any device and it's
                all real-time data.
              </p>
            </div>
          </div>
          <div className="indicator-image">
            <div className="indicator-image-box">
              <img className="computerimage" src={image} alt="" />
              <img className="phoneimg" src={phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicatorAbout;
