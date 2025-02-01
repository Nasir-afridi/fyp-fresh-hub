import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top nav-bar">
      <div className="container">
        <a className="navbar-brand" href="#">
          Text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <Link to="/home">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/about">About</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/pricing">Pricing</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/signup">SignUp</Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/otp">Otp</Link>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/login">Login</Link>
              </a>
            </li>
          </ul>
          <div className="navbar-text">
            <button type="button" className="btn btn-danger me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
