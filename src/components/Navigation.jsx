import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light bg-light ">
        <div className="container-fluid">
            <ul className="navbar-nav ml-auto mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About JadeKingfisher
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/latest">
                  Latest Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/previous">
                  Previous Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact JadeKingfisher
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faqs">
                  FAQs
                </NavLink>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
