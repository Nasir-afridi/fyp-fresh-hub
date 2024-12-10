import HeroSection from "../components/about/hero-section";
import Service from "../components/about/services";
import { Services } from "../constant/services";
import TopCategory from "../components/about/top-category";
import { TopCategories } from "../constant/top-category";
import BestSell from "../components/about/best-sell";
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

      <div class="container">
        <div class="row">
          <div className="top-catergory-heading">
            <p className="top-heading fw-bold mt-5 mb-5">Meat</p>
          </div>
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
