import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="error-section">
        <div className="error-wrapper">
          <h1 className="error-text">404 Not Found Page...</h1>
          <Link className="error-button" to="/">
            Back To Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
