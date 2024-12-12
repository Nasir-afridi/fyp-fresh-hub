import Hero from "../components/pricing/hero";
import "../components/pricing/style-sheets/hero-section.css";
import ProductFeatures from "../components/pricing/product-features";
import "../components/pricing/style-sheets/product-features.css";
import Review from "../components/pricing/Reviews";
import "../components/pricing/style-sheets/Review.css";

const Pricing = () => {
  return (
    <>
      <Hero />
      <ProductFeatures />
      <Review />
    </>
  );
};

export default Pricing;
