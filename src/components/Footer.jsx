import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <footer className="py-2 bg-dark">
        <div className="container">
          <div className="b-example-divider">
            <div className="d-flex justify-content-between py-4 my-2 border-top m-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/termsandconditions">
                    Terms & Conditions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/privacypolicy">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>

              <ul className="list-unstyled d-flex">
              </ul>
            </div>        
            <p className="m-0 text-center text-white">
              Copyright &copy; 2021 JadeKingfisher. All rights reserved.
            </p>
          </div>        
        </div>
      </footer>
    </div>
  );
}

export default Footer;
