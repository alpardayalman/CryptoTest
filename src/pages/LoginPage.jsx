import React, { useState } from "react";
import "../css/register.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [checkForm, setCheckForm] = useState(false);
  return (
    <section className="loginpage">
      <div className="loginpage-wrapper">
        <div className="loginpage-campaign-wrapper">
          <div className="loginpage-campaign-container">
            <div className="loginpage-campaign-text-container">
              <div className="loginpage-campaign-text">
                <h1>Enhance your trading experience</h1>
                <p>
                  We create next-gen visualizations to help the world see
                  markets smarter.
                </p>
              </div>
            </div>
            <div className="loginpage-campaign-bottom-information">
              <Link className="loginpage-campaign-home-navigation" to="/">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
        <div className="loginpage-register-wrapper">
          <div className="loginpage-register-container">
            <div className="loginpage-register-box">
              <h1 className="registerlogin-text">
                {checkForm ? "Register" : "Login"}
              </h1>
              <div className="loginpage-register-form-wrapper">
                <div className="input-box">
                  <input
                    type="text"
                    className="register-input"
                    placeholder="Name"
                  />
                </div>
                {checkForm && (
                  <div className="input-box">
                    <input
                      type="email"
                      className="register-input"
                      placeholder="Email"
                    />
                  </div>
                )}

                <div className="input-box">
                  <input
                    type="password"
                    className="register-input"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="loginpage-register-form-checkpassword">
                <div className="form-checkpassword">
                  <input type="checkbox" id="checkpassword" />
                  <label htmlFor="checkpassword">Remember Password</label>
                </div>
              </div>
              <div
                onClick={() => setCheckForm(!checkForm)}
                className="account-box"
              >
                <h5>
                  {checkForm
                    ? "Do you Already have an Account ?"
                    : "If you want to open an account"}
                </h5>
              </div>
              <div className="loginpage-register-button">
                <button> {checkForm ? "Register" : "Login"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
