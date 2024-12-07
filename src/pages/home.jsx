import React from "react";
import HeroSection from "../components/home/hero-section";
import Service from "../components/home/services-section";
import { Services } from "../constant/services";
import OfferSection from "../components/home/offer-section";
import TopCategory from "../components/home/top-category";
import { TopCategories } from "../constant/top-category";
import Advertisment from "../components/home/Advertisment";

const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <div className="hero-donate hero my-3">
        <div className="container">
          <HeroSection />
        </div>
      </div>

      {/* services Section */}

      <div className="container mt-5">
        <div class="row text-center">
          {Services.map((element) => (
            <Service
              image={element.image}
              heading={element.heading}
              paragraph={element.paragraph}
            />
          ))}
        </div>
      </div>

      {/* Offer Section */}

      <div className="container">
        <div className="row">
          <OfferSection />
        </div>
      </div>

      {/* TopCategory Section */}

      <div className="container">
        <div className="row  justify-content-center top-category">
          <div className="top-catergory-heading">
            <p className="top-heading fw-bold ">Top Category</p>
          </div>
          {TopCategories.map((element) => (
            <TopCategory
              Image={element.Image}
              description={element.description}
            />
          ))}
        </div>
      </div>

      <div className="container advertisment-container mt-5">
        <div className="row">
          <Advertisment />
        </div>
      </div>
    </>
  );
};

export default Home;
