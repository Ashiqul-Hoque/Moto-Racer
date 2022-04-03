import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 nav-container">
        <div className="container-fluid">
          <h1 className="navbar-brand my-0" href="#">
            Moto Racer
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
              <li className="nav-item active">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
