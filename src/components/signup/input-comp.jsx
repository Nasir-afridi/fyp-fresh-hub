import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../features/signUp.userSlice";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData))
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="heading-create text-center mt-5">
        <h1 className="create">Create Account</h1>
      </div>
      <div className="car-img text-center mt-5">
        <img src="cars.svg" alt="Cars" />
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="First Name"
            name="first_name"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Last Name"
            name="last_name"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
            name="email"
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
            placeholder="Password"
            name="password"
            onChange={onChange}
            required
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="Next"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Submitting..." : "Next"}
          </button>
        </div>
        {error && <div className="text-danger mt-3">{error}</div>}
        <p className="footer-text mt-4">
          By creating an account, you are agreeing to our
          <a href="#">User Agreement</a> and <a href="#">Privacy Policy</a>.
        </p>
      </form>
    </>
  );
};

export default InputForm;
