const OfferSection = () => {
  return (
    <>
      <div className="col-lg-8 col-md-7 col-sm-12 summer-container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="image-container">
              <center>
                <img src="apple.png" className="apple-img" />
              </center>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <center>
              <p className="lead">SUMMER SALE</p>
              <h4 className="discount fw-bold">40% OFF</h4>
              <h1 className="fresh-fruit">Fresh Fruit</h1>
              <h1 className="total-discount">%100</h1>
              <button className="button">Shop Now &gt;</button>
            </center>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-5 col-sm-12 fresh-deleivery justify-content-center">
        <div className="description">
          <h1 className="text-center mt-5">
            Fresh <br /> Delievered
            <br /> Daily
          </h1>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <img src="cheese.png" className="image" />
        </div>
      </div>
    </>
  );
};

export default OfferSection;
