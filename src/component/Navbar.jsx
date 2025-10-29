import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark user-nav-bg px-4 py-3 ">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* ===== Left Side (Logo / p1) ===== */}
        <Link className="navbar-brand d-flex align-items-center p1 m-0" to="/">
          <h1 className="h3 fw-bold mb-0 text-white">Forex Pediaa</h1>
        </Link>

        {/* ===== Hamburger Toggle (Visible on Mobile) ===== */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="bi bi-list fs-2 text-white"></i>
        </button>

        {/* ===== Right Side (Menu / p2) ===== */}
        <div
          className="collapse navbar-collapse bg-transparent justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex flex-lg-row flex-column align-items-lg-center gap-lg-4 gap-2 mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/algo-trade">Algo Trading</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/trade-bot">Trading Bot</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/about">About</NavLink>
            </li>
         
            <li className="nav-item">
              <NavLink className="nav-link btn btn-nav fw-semibold text-white px-3" to="/dashboard">
                Deploy Strategies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
