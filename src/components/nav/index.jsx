import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg sticky-top nav-bar">
      <div className="container">
        <span className="navbar-brand">Text</span>
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
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>

          {token && (
            <button type="button" className="btn btn-danger me-2">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
