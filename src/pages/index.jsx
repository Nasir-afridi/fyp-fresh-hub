import React from "react";
import HeroSection from "../components/home/hero-section";
import Services from "../components/home/services-section";
import OfferSection from "../components/home/offer-section";

const Home = () => {
  return (
    <>
      <div className="hero-donate hero my-3">
        <div className="container">
          <HeroSection />
        </div>
      </div>
      <div className="container mt-5">
        <div class="row text-center">
          <Services />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <OfferSection />
        </div>
      </div>
    </>
  );
};

export default Home;
