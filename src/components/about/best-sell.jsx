const BestSell = (props) => {
  const stars = [
    "fa fa-star",
    "fa fa-star",
    "fa fa-star",
    "fa fa-star",
    "fa fa-star-half-o",
  ];
  return (
    <>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="card">
          <img src={props.image} className="card-img-top apple mt-4" />

          <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <i class="fa-solid fa-cart-shopping"></i>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="rating">
                {stars.map((star, index) => (
                  <i key={index} className={star}></i>
                ))}
              </div>
              <a href="#" className="btn  btn-sm">
                <img src="heart.png" className="heart" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BestSell;
