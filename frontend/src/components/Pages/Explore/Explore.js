import React, { useEffect } from "react";

import { Link, Route } from "react-router-dom";

import calc_vect from "../../../Illustrations/utils/calculator.svg";
import educ_vect from "../../../Illustrations/utils/education.svg";
import stat_vect from "../../../Illustrations/utils/statistics.svg";
import notif_vect from "../../../Illustrations/utils/notification.svg";

import "./Explore.css";

const Explore = (props) => {
  useEffect(() => {
    document.title = `Explore | FCIT Help Desk`;
  });
  return (
    <div className="explore-wrapper">
      <div className="explore-container">
        <div className="dark-navbar-wrapper">
          <div className="explore-logo-container">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <span className="explore-logo-title">FCIT </span>
              <span className="explore-logo-text"> help desk.</span>
            </Link>
          </div>
          <div className="nav-menu-container">
            <div className="navmenu">
              <Link style={{ textDecoration: "none" }} to="/home">
                <li className="dark-navitem">Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                <li className="dark-navitem">About</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/explore">
                <li className="dark-navitem active">Explore</li>
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

        <div className="explore-center-items">
          <div className="explore-head-container">
            <p className="explore-head">Explore Our Utilities</p>
          </div>

          <div className="utils-card-container">
            <div className="utility-card">
              <div className="upper-rect">
                <div className="il-container">
                  <img src={calc_vect} alt="" srcSet="" />
                </div>
              </div>
              <div className="bottom-rect">
                <div className="util-head">
                  <p className="util-head-text">CGPA Calculator</p>
                </div>
                <div className="util-sub-head">
                  <p className="util-subhead-text">GPA/CGPA Calculator</p>
                </div>
              </div>
            </div>
            <div className="utility-card">
              <div className="upper-rect">
                <div className="il-container">
                  <img src={stat_vect} alt="" srcSet="" />
                </div>
              </div>
              <div className="bottom-rect">
                <div className="util-head">
                  <p className="util-head-text">Merit Lists</p>
                </div>
                <div className="util-sub-head">
                  <p className="util-subhead-text">Old Merit Lists(2017-21)</p>
                </div>
              </div>
            </div>
            <div className="utility-card">
              <div className="upper-rect">
                <div className="il-container">
                  <img src={educ_vect} alt="" srcSet="" />
                </div>
              </div>
              <div className="bottom-rect">
                <div className="util-head">
                  <p className="util-head-text">Helping Material</p>
                </div>
                <div className="util-sub-head">
                  <p className="util-subhead-text">Notes, Books, Links etc.</p>
                </div>
              </div>
            </div>
            <div className="utility-card">
              <div className="upper-rect">
                <div className="il-container">
                  <img src={notif_vect} alt="" srcSet="" />
                </div>
              </div>
              <div className="bottom-rect">
                <div className="util-head">
                  <p className="util-head-text">Latest Updates</p>
                </div>
                <div className="util-sub-head">
                  <p className="util-subhead-text">Posts by Campus, VC etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
