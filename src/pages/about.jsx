import HeroSection from "../components/home/hero-section";
import Service from "../components/home/services";
import { Services } from "../constant/services";
import TopCategory from "../components/home/top-category";
import { TopCategories } from "../constant/top-category";
import BestSell from "../components/home/best-sell";
import { Sell } from "../constant/best-sell";

const About = () => {
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
          {Sell.map((element) => (
            <BestSell
              image={element.image}
              heading={element.heading}
              description={element.description}
              heartIcon={element.heartIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
