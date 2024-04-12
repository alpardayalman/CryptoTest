import React from "react";
import "../css/pricecard.css";
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <div className="price-card-container">
      <div className="price-card-container">
        <div className="price-card-wrapper">
          <div className="price-card-box">
            <div className="price-card-box-container">
              <div className="price-card-box-button">
                <button>Monthly</button>
              </div>
              <div className="price-card-box-text">
                <h1 className="card-price">50$</h1>
                <a>Full Price</a>
              </div>
              <div className="price-card-subs-box">
                <div className="price-card-subs-button">
                  <Link to="/register">Subscribe</Link>
                </div>
                <div className="price-card-subs-text">
                  <h6 className="subs-text">30 Day Money Back Guarantee</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="price-card-box">
            <div className="price-card-box-container">
              <div className="price-card-box-button">
                <button>QUARTERLY</button>
              </div>
              <div className="price-card-box-text">
                <h1 className="card-price">150$</h1>
                <a className="save-30">Save 30%</a>
              </div>
              <div className="price-card-subs-box">
                <div className="price-card-subs-button">
                  <Link to="/register">Subscribe</Link>
                </div>
                <div className="price-card-subs-text">
                  <h6 className="subs-text">30 Day Money Back Guarantee</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="price-card-box bg-gradient-card">
            <div className="price-card-box-container">
              <div className="price-card-box-button">
                <button>YEARLY</button>
              </div>
              <div className="price-card-box-text">
                <h1 className="card-price">$455</h1>
                <a className="save-30">Save 40%</a>
              </div>
              <div className="price-card-subs-box">
                <div className="price-card-subs-button">
                  {" "}
                  <Link to="/register">Subscribe</Link>
                </div>
                <div className="price-card-subs-text">
                  <h6 className="subs-text">30 Day Money Back Guarantee</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
