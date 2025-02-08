import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login-heading text-center mt-5">
        <h1 className="login-text">Login</h1>
      </div>
      <div className="cars-rent-container text-center">
        <img src="car-rent.svg" alt="" />
      </div>
      <form onSubmit={onSubmit}>
        <div className="inputss mt-5">
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email or Phone Number
            </label>
            <input
              type="text"
              className="form-control forms"
              id="email"
              name="email"
              placeholder=" Email or Phone Number"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="submit-btn">
          <button
            className="submitt"
            type="submit"
            disabled={status === "loading"}
            onClick={onSubmit}
          >
            {status === "loading" ? "loggin in..." : "Login"}
          </button>
        </div>
      </form>

      {error && <div className="text-danger mt-3">{error}</div>}
    </>
  );
};

export default LoginComp;
