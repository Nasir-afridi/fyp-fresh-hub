import "../components/login/style-sheets/login.css";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="login-heading text-center mt-5">
        <h1 className="login-text">Login</h1>
      </div>
      <div className="cars-rent-container text-center">
        <img src="car-rent.svg" alt="" />
      </div>

      <div className="inputss mt-5">
        <div className="mb-4">
          <label for="fullName" className="form-label">
            Email or Phone Number
          </label>
          <input
            type="text"
            className="form-control forms"
            id="fullName"
            placeholder=" Email or Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label for="phoneNumber" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <div className="submit-btn">
        <button className="submitt">Submit</button>
      </div>
    </div>
  );
};

export default Login;
