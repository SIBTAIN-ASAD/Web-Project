import React, { useEffect } from "react";

import { Route, Link } from "react-router-dom";

import about_us from "../../../Illustrations/aboutus.svg";
import "./About.css";

const About = (props) => {
  useEffect(() => {
    document.title = `About | FCIT Help Desk`;
  });
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="dark-navbar-wrapper">
          <div className="about-logo-container">
            <Link style={{ textDecoration: "none" }} to="/home">
              <span className="about-logo-title">FCIT </span>
              <span className="about-logo-text"> help desk.</span>
            </Link>
          </div>
          <div className="nav-menu-container">
            <div className="navmenu">
              <Link style={{ textDecoration: "none" }} to="/home">
                <li className="dark-navitem">Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                <li className="dark-navitem active">About</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/explore">
                <li className="dark-navitem">Explore</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/team">
                <li className="dark-navitem">Team</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <li className="dark-navitem">Contact</li>
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="about-center-items">
          <div className="about-head-container">
            <p className="about-head">About FHD!</p>
          </div>

          <div className="about-gyaan-container">
            <p className="about-gyaan-text">
              FCIT Help Desk is an online platform, that basically focuses to
              help students access the notes, books and other (teacher’s
              specific notes) at single platform. As none of the student
              individually has all that material so it is an initiative so one
              can share the material he or she has, and on the same platform can
              access to others’ notes. Along with the helping material, it also
              provides utilities for the students like official updates, CGPA
              calculator and blogs (upcoming IA).
            </p>
          </div>
        </div>
      </div>
      <div className="about-il-container">
        <img src={about_us} alt="" />
      </div>
    </div>
  );
};

export default About;
