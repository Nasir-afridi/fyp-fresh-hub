const Service = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="mb-3 text-center">
          <img src={props.image} className="headphone" />
          <h5 className="mt-3">{props.heading}</h5>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
