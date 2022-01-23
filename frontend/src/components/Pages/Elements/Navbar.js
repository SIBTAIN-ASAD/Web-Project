import React from "react";
import { Link } from "react-router-dom";

import "./Elements.css";

const NavbarLight = (props) => {
  let a = ["", "", "", "", "", ""];
  a[props.active] = "active";

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="home-logo-container">
          <Link style={{ textDecoration: "none" }} to="/home">
            <span className="home-logo-title">FCIT </span>
            <span className="home-logo-text"> help desk.</span>
          </Link>
        </div>
        <div className="nav-menu-container">
          <div className="navmenu">
            <Link style={{ textDecoration: "none" }} to="/home">
              <li className="navitem">Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <li className="navitem">About</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/explore">
              <li className="navitem">Explore</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/team">
              <li className="navitem">Team</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <li className="navitem">Contact</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const NavbarDark = (props) => {
  return <div>Navbar Dark</div>;
};

export { NavbarLight, NavbarDark };
