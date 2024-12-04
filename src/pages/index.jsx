import React from "react";
import "../style-sheets/home.css";
import HeroSection from "../components/home/hero-section";

const Home = () => {
  return (
    <>
      <div className="hero-donate hero my-3">
        <div className="container">
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Home;
