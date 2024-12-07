const Advertisment = () => {
  return (
    <>
      <div className="col-md-6 col-sm-6">
        <center>
          <img src="/fruit-cart.png" className="fruit-cart mt-5" />
        </center>
      </div>
      <div className="col-md-6 col-sm-6 mb-4">
        <h2 className="mt-5">
          <span className="Eco">ECO</span>-Friendly
        </h2>
        <p className="lead eco-description mt-3">
          Discover a vibrant array of locally sourced and <br /> eco-friendly
          products on our grocery web store, <br /> connecting you with
          sustainable choices that <br />
          support both the community and the planet.
        </p>
        <button className="fw-bold mt-1">Learn More</button>
      </div>
    </>
  );
};

export default Advertisment;
