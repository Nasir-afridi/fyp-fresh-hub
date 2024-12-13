const Explore = () => {
  return (
    <div className="explore-container mt-5">
      <div className="explore-heading text-center">
        <p className="explore-paragraph">- Explore More</p>
        <h2 className="fw-bold">Related Products</h2>
      </div>

      <div className="explore-cards d-flex flex-wrap mt-5">
        {/* Cards-1 */}
        <div className="cardss-1 d-flex flex-wrap">
          <div className="cardss-img-1">
            <img src="oil.png" className="oil-img-1" />
          </div>
          <div className="cardss-text-1">
            <h6 className="dolly lead">Dolly Oil</h6>
            <p className="pallet mb-2">
              US$55.00-US$70.00/<span className="pallets">pallet</span>
            </p>
            <p className="order mb-0">
              1 pallet <span className="min">(Min.order)</span>
            </p>
            <div className="uae-container d-flex ">
              <div className="uae">
                <img src="uae.png" className="uae-logo" />
              </div>
              <p className="dubai">UAE Dubai</p>
            </div>

            <button className="now">Buy Now</button>
          </div>
        </div>

        {/* Cards-2 */}
        <div className="cardss-2 d-flex flex-wrap">
          <div className="cardss-img-2">
            <img src="coca-cola.png" className="oil-img-2" />
          </div>
          <div className="cardss-text-2">
            <h6 className="dolly-2 lead">Coca Cola</h6>
            <p className="pallet-2 mb-2">
              US$55.00-US$70.00/<span className="pallets-2">pallet</span>
            </p>
            <p className="order-2 mb-0">
              1 pallet <span className="min-2">(Min.order)</span>
            </p>
            <div className="uae-container-2 d-flex ">
              <div className="uae-2">
                <img src="uae.png" className="uae-logo-2" />
              </div>
              <p className="dubai-2">UAE Dubai</p>
            </div>
            <button className="now-2">Buy Now</button>
          </div>
        </div>

        {/* Cards-3 */}
        <div className="cardss-3 d-flex flex-wrap">
          <div className="cardss-img-3">
            <img src="cock-tin.png" className="oil-img-3" />
          </div>
          <div className="cardss-text-3">
            <h6 className="dolly-3 lead">Coke 330 ml</h6>
            <p className="pallet-3 mb-3">
              US$55.00-US$70.00/<span className="pallets-3">pallet</span>
            </p>
            <p className="order-3 mb-0">
              1 pallet <span className="min-3">(Min.order)</span>
            </p>
            <div className="uae-container-3 d-flex ">
              <div className="uae-3">
                <img src="uae.png" className="uae-logo-3" />
              </div>
              <p className="dubai-3">UAE Dubai</p>
            </div>

            <button className="now-3">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
