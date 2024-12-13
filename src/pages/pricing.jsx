import Hero from "../components/pricing/hero";
import "../components/pricing/style-sheets/hero-section.css";
import ProductFeatures from "../components/pricing/product-features";
import "../components/pricing/style-sheets/product-features.css";
import Review from "../components/pricing/Reviews";
import "../components/pricing/style-sheets/Review.css";
import Explore from "../components/pricing/explore";
import "../components/pricing/style-sheets/explore.css";

const Pricing = () => {
  return (
    <>
      <Hero />
      <ProductFeatures />
      <Review />
      <Explore />
    </>
  );
};

export default Pricing;
