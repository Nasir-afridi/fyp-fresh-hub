const ProductFeatures = () => {
  return (
    <>
      <div className="products-container mt-5">
        <div className="productes-heading text-center">
          <p className="product-paragraph">- Product Features</p>
          <h2 className="fw-bold">Explore the Features</h2>
        </div>

        <div className="productes-cards d-flex flex-wrap mt-5 ">
          <div className="cardes-1 d-flex ">
            <div className="cardes-icon-1">
              <i class="fa fa-shield"></i>
            </div>
            <div className="cardes-text-1">
              <h5 className="">CARBONATED WATER</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
            </div>
          </div>

          <div className="cardes-2 d-flex ">
            <div className="cardes-icon-2">
              <div className="cardes-icon-2">
                <i class="fa fa-shield"></i>
              </div>
            </div>
            <div className="cardes-text-2">
              <h5 className="">PHOSPHORIC ACID</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
            </div>
          </div>
          <div className="cardes-3 d-flex ">
            <div className="cardes-icon-3">
              <i class="fa fa-shield"></i>
            </div>

            <div className="cardes-text-3">
              <h5 className="">NATURAL FLAVORS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFeatures;
