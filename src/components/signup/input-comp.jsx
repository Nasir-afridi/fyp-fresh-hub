const InputForm = () => {
  return (
    <>
      <div className="heading-create text-center mt-5">
        <h1 className=" create">Create Account</h1>
      </div>
      <div className="car-img text-center mt-5">
        <img src="cars.svg" />
      </div>
      <form>
        <div className="mb-4">
          <label for="fullName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-4">
          <label for="phoneNumber" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-4">
          <label for="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-4">
          <label for="email" className="form-label">
            Password
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Password"
          />
        </div>
        <div className="d-grid">
          <button className="Next">Next</button>
        </div>

        <p className="footer-text mt-4">
          By creating an account, you are agreeing to our{" "}
          <a href="#">User Agreement</a> and <a href="#">Privacy Policy.</a>.
        </p>
      </form>
    </>
  );
};

export default InputForm;
