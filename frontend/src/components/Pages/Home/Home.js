import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = (props) => {
  useEffect(() => {
    document.title = `Home | FCIT Help Desk`;
  });
  
  return (
    // <div>
      <div className="home-wrapper">
        <div className="home-container">
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
                  <li className="navitem active">Home</li>
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
          <div className="center-items-container">
            <div className="tagline-container">
              <div className="tagline">
                WELCOME <span className="username-tagline">&nbsp; Ans</span>, to
                FCIT HELP DESK
              </div>
            </div>
            <div className="introlines-container">
              <p className="introlines">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                debitis voluptatibus omnis autem. Quam laborum consectetur
                aliquam id eum! Provident!
              </p>
            </div>
            <div className="explore-btn-container">
              <Link style={{ textDecoration: "none" }} to="/explore">
                <button className="explore-btn">Explore us!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Home;
