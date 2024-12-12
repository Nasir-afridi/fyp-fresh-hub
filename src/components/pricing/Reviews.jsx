const Review = () => {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="container d-flex flex-wrap ">
            <div className="text-container mt-4">
              <h6 className="review">- Our Reviews</h6>
              <h3 className="customer-reviews fw-bold">
                What our Customers <br /> are Saying
              </h3>
            </div>
            <div className="reviews-container ">
              <div className="women-img-container">
                <img
                  src="./public/women.jpeg"
                  className="women-pic mt-2 mb-3"
                />
              </div>
              <div className="women-text-container">
                <h5 className="fw-bold mb-3">Alex Thomson</h5>
                <p className="lead">
                  This is the best Procuct I have ordered something from this
                  site. I highly recommend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
