import React from "react";
import "../css/header.css";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";
import imagelogo from "../images/textlogo.png";

const Header = () => {
  return (
    <div className="header-global-box">
      <div className="campaign">
        <div className="campaign-container">
          <div className="campaign-wrapper">
            <div className="campaign-text">
              <a>Use Code ''A10'' for %10 off your first order!</a>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="header-container">
          <div className="header-wrapper">
            <div className="header-logo">
              <img src={imagelogo} alt="" />
            </div>
            <div className="header-right-box">
              <ul className="header-link-wrapper">
                <li>
                  <Link to="/">
                    <a href="">Home Page</a>
                  </Link>
                </li>
                {/*     <li>
                  <a href="">Prices</a>
                </li> */}
                <li className="discord-link">
                  <BsDiscord />
                  <a href="https://discord.com">Discord</a>
                </li>
              </ul>

              <Link className="header-login-btn" to="/register">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
