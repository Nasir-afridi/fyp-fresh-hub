import React from "react";
import "../style-sheets/home.css";
import HeroSection from "../components/home/hero-section";
import Services from "../components/home/services-section";

const Home = () => {
  return (
    <>
      <div className="hero-donate hero my-3">
        <div className="container">
          <HeroSection />
        </div>
      </div>

      <div class="container mt-5">
        <div class="row text-center">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
