const Hero = () => {
  return (
    <>
      <div class="container mt-4">
        <nav
          aria-label="breadcrumb"
          class="d-flex justify-content-start flex-wrap "
        >
          <ul class="breadcrumb d-flex flex-wrap list-unstyled gap-3 m-0 list-anchor">
            <li>
              <a href="#" class="text-decoration-none text-dark ">
                Home Page <span className="greater-than-symbol">&gt;</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-dark">
                Categories <span className="greater-than-symbol">&gt;</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-dark">
                Drinks <span className="greater-than-symbol">&gt;</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-dark">
                1.5 ltr Coke <span className="greater-than-symbol"> &gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="d-flex justify-content-center main-hero-container flex-wrap">
        <div class="aside-imgs d-flex flex-column align-self-start mt-2 me-4">
          <img src="coca-cola.png" alt="img1" className="img-fluid-1 mb-2" />
          <img src="coca-cola.png" alt="img2" className="img-fluid mb-2" />
          <img src="coca-cola.png" alt="img3" className="img-fluid mb-2" />
        </div>

        <div className="main-img-container d-flex justify-content-center align-self-start me-4">
          <img src="coca-cola.png" alt="main-img" className=" main-hero-img" />
        </div>

        <div className="hero-text-container align-self-start ">
          <div className="heading">
            <p className="lead selling">- Selling Fast</p>
            <p className="coca">Coca Cola</p>
            <p className="description-div">
              Mixed with coconut oil, the Pyary Ayurvedic All Natural Soap comes
              across as the most aromatic skin protector whose silky lather
              soothes even the most sensitive skin. Turmeric contains essential
              curcumin oil and is an indispensable ingredient in certain skin
              care preparations. Besides external application turmeric is also
              administered internally as stimulant and it is absolutely harmless
              natural ingredient. Every cake of Pyary Soap passes through
              rigourous quality control tests. The peerless home-spun
              manufacturing system .ensure soft-lathering properties.
            </p>
            <div className="soft-drinks d-flex">
              <div className="drinks-container ">
                <button className="soft">Soft Drink</button>
              </div>
              <div>
                <p className="fw-bold rate-para">
                  <span className="custom-strike">$3.99</span>&nbsp;&nbsp;$2.99
                </p>
              </div>
            </div>

            <div className="buy-button d-flex mt-4 align-items-center">
              <div className="buy-container ">
                <button className="buy fw-bold text-white btn-lg">
                  Buy Now
                </button>
              </div>
              <div className="heart-container">
                <img src="heart.png" className="heart-imgs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
