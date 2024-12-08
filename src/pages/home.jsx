import React from "react";
import HeroSection from "../components/home/hero-section";
import Service from "../components/home/services-section";
import { Services } from "../constant/services";
import OfferSection from "../components/home/offer-section";
import TopCategory from "../components/home/top-category";
import BestSell from "../components/home/best-sell";
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
      {/* Advertisment section */}
      <div className="container advertisment-container mt-5">
        <div className="row">
          <Advertisment />
        </div>
      </div>
      {/* Best Sell Section */}
      <div className="best-sell-container">
        <nav className="navbar navbar-expand-lg best-sell-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Daily Best Sell
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Top sell
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Vegetables
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fruit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="card">
              <img src="apple.png" className="card-img-top apple" alt="Apple" />
              <div className="card-body">
                <h5 className="card-title">Apple</h5>
                <i class="fa-solid fa-cart-shopping"></i>
                <p className="card-text">$13.00</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                  <a href="#" className="btn  btn-sm">
                    <img src="heart.png" className="heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
