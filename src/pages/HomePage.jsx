import React from "react";
import IndicatorAbout from "../components/IndicatorAbout";
import Blog from "../components/Blog";
import PriceSection from "../components/PriceSection";
import Questions from "../components/Questions";
import HomePages from "../components/HomePages";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomePages />
      <IndicatorAbout />
     {/*  <Blog /> */}
      <PriceSection />
      <Questions />
      <Footer />
    </div>
  );
};

export default HomePage;
