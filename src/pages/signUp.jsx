import "../components/signup/style-sheets/signup.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <div className=" signup-container">
        <div className="heading-create text-center mt-5">
          <h1 className=" create">Create Account</h1>
        </div>
        <div className="car-img text-center mt-5">
          <img src="cars.svg" />
        </div>
        <form>
          <div className="mb-4">
            <label for="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label for="email" className="form-label">
              E-mail (Optional)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail (Optional)"
            />
          </div>
          <div className="mb-4">
            <label for="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Country"
              required
            />
          </div>
          <div className="mb-4">
            <label for="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              required
            />
          </div>
          <div className="d-grid">
            <button className="Next">Next</button>
          </div>

          <p className="footer-text mt-4">
            By creating an account, you are agreeing to our{" "}
            <a href="#">User Agreement</a> and <a href="#">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
