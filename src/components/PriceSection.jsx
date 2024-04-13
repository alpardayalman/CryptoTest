import React from "react";
import "../css/pricecard.css";
import PriceCard from "./PriceCard";

const PriceSection = () => {
  return (
    <section className="price-card-section">
      <div className="price-card-global-container">
        <div className="price-card-text-box">
          <div className="price-card-text-container">
            <div className="price-card-text-wrapper">
              <div className="price-card-title-text">
                <h1>
                  Choose your plan with our <span className="price-text-gradient">
                      all-inclusive membership.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="price-card">
          <PriceCard />
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
