import React from "react";
import "../css/homepage.css";

const HomePages = () => {
  return (
    <section className="homepage">
      <div className="homepage-container">
        <div className="homepage-wrapper">
          <div className="homepage-text-container">
            <div className="homepage-text">
              <h1>
                Enhance your trading{" "}
                <span className="color-text">experience</span>{" "}
              </h1>
            </div>
          </div>
          <div className="homepage-small-text">
            <p>
              We create next-gen visualizations to help the world see markets
              smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePages;
