const HeroSection = () => {
  return (
    <div className="hero-donate hero my-3">
      <div className="container">
        <div className="row  align-items-center rounded-3 flex-container">
          <div className="col-lg-7 p-4 pb-4">
            <h1 className="display-4 fw-bold lh-1">
              Your Online Ultimate <span>Grocery</span>
            </h1>
            <p className="grocery col-lg-10">
              Experience grocery shopping and swift home delivery with our wide
              range of fresh produce and essentials
            </p>
            <div className="d-grid justify-content-md-start mb-4 mb-lg-3">
              <button className="learn text-white">Learn More</button>
            </div>
          </div>

          <div className="col-lg-4 mb-5 ">
            <img
              className="hero-img rounded-lg-3"
              src="hero-section-img.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
