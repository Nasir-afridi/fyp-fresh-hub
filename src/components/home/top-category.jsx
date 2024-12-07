const TopCategory = (select) => {
  return (
    <>
      <div className="col-md-2 col-sm-6 col-xs-6 ">
        <div className="card text-center">
          <div className="card-body">
            <img src={select.Image} alt="Meat" className="card-img-top" />
            <h4 className="card-title">{select.description}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopCategory;
