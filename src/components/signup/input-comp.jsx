import { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    pasword: "",
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="heading-create text-center mt-5">
        <h1 className=" create">Create Account</h1>
      </div>
      <div className="car-img text-center mt-5">
        <img src="cars.svg" />
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="Next">
            Next
          </button>
        </div>

        <p className="footer-text mt-4">
          By creating an account, you are agreeing to our
          <a href="#">User Agreement</a> and <a href="#">Privacy Policy.</a>.
        </p>
      </form>
    </>
  );
};

export default InputForm;
