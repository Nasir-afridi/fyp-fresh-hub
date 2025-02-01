const Footer = () => {
  return (
    <footer className="main-footer text-dark pt-4 mt-4">
      <div className="container">
        <div className="container row-container">
          <div className=" row">
            <div className="real-estate col-lg-4 col-md-3 ">
              <h5 className="fw-bold text-white">Real estate</h5>
              <p className="quality text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold text-white">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Why choose us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Testonomial
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold text-white">Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold text-white">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <img src="youtube-img.png" className="youtube-img mb-1" />{" "}
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <img src="instagram-img.png" className="youtube-img mb-1" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <img src="facebook.png" className="youtube-img mb-1" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <h5 className="fw-bold text-white">Find Us</h5>
              <ul className="list-unstyled">
                <li>
                  <img src="google-play.png" className="google-icon" />
                </li>
                <li>
                  <img src="app-store.png" className="app-store" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
