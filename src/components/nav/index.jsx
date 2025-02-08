import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top nav-bar">
      <div className="container">
        Text
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
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">Login</Link>
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
