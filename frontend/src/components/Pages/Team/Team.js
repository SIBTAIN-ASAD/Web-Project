import React from "react";

import "./Team.css";

import avatar_ans from "../../../Illustrations/avatar-m.png";
import avatar_awais from "../../../Illustrations/avatar-m.png";
import avatar_sibtan from "../../../Illustrations/avatar-m.png";
import avatar_ayesha from "../../../Illustrations/avatar-f.png";

import sm_linkedin from "../../../Illustrations/linkedin.svg";
import sm_gplus from "../../../Illustrations/googleplus.svg";
import sm_github from "../../../Illustrations/github.svg";

import { Link } from "react-router-dom";

const Team = (props) => {
  return (
    <div className="team-wrapper">
      <div className="team-container">
        <div className="dark-navbar-wrapper">
          <div className="team-logo-container">
            <Link style={{ textDecoration: "none" }} to="/home">
              <span className="team-logo-title">FCIT </span>
              <span className="team-logo-text"> help desk.</span>
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
                <li className="dark-navitem">Explore</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/team">
                <li className="dark-navitem active">Team</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <li className="dark-navitem">Contact</li>
              </Link>
            </div>
          </div>
        </div>

        <div className="team-center-items">
          <div className="team-head-container">
            <p className="team-head">The Us!</p>
          </div>

          <div className="team-cards-container">
            <div className="tm-card">
              <div className="tm-avatar-container">
                <img src={avatar_ans} alt="" srcSet="" />
              </div>

              <div className="tm-skill">
                <p className="tm-skill-text">UX Designer</p>
              </div>
              <div className="tm-name">
                <p className="tm-name-text">Mohd Anc</p>
              </div>
              <div className="tm-about">
                <p className="tm-about-text">Student at PUCIT ‘23.</p>
              </div>
              <div className="tm-social-media-links">
                <a href="#" className="sm-link">
                  <img
                    src={sm_linkedin}
                    alt=""
                    className="tm-sm-github"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_github}
                    alt=""
                    className="tm-sm-linkedin"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_gplus}
                    alt=""
                    className="tm-sm-gmail"
                  />
                </a>
              </div>
            </div>

            <div className="tm-card">
              <div className="tm-avatar-container">
                <img src={ avatar_awais } alt="" srcSet="" />
              </div>

              <div className="tm-skill">
                <p className="tm-skill-text">Web Developer</p>
              </div>
              <div className="tm-name">
                <p className="tm-name-text">Awais Waheed</p>
              </div>
              <div className="tm-about">
                <p className="tm-about-text">Student at PUCIT ‘23.</p>
              </div>
              <div className="tm-social-media-links">
                <a href="#" className="sm-link">
                  <img src={sm_github} alt="" className="tm-sm-github" />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_github}
                    alt=""
                    className="tm-sm-linkedin"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_gplus}
                    alt=""
                    className="tm-sm-gmail"
                  />
                </a>
              </div>
            </div>

            <div className="tm-card">
              <div className="tm-avatar-container">
                <img src={avatar_sibtan} alt="" srcSet="" />
              </div>

              <div className="tm-skill">
                <p className="tm-skill-text">Web Developer</p>
              </div>
              <div className="tm-name">
                <p className="tm-name-text">M Sibtain Asad</p>
              </div>
              <div className="tm-about">
                <p className="tm-about-text">Student at PUCIT ‘23.</p>
              </div>
              <div className="tm-social-media-links">
                <a href="#" className="sm-link">
                  <img
                    src={sm_linkedin}
                    alt=""
                    className="tm-sm-github"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_github}
                    alt=""
                    className="tm-sm-linkedin"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_gplus}
                    alt=""
                    className="tm-sm-gmail"
                  />
                </a>
              </div>
            </div>

            <div className="tm-card">
              <div className="tm-avatar-container">
                <img src={avatar_ayesha} alt="" srcSet="" />
              </div>

              <div className="tm-skill">
                <p className="tm-skill-text">Web Developer</p>
              </div>
              <div className="tm-name">
                <p className="tm-name-text">Ayesha Zafar</p>
              </div>
              <div className="tm-about">
                <p className="tm-about-text">Student at PUCIT ‘23.</p>
              </div>
              <div className="tm-social-media-links">
                <a href="#" className="sm-link">
                  <img
                    src={sm_linkedin}
                    alt=""
                    className="tm-sm-github"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_github}
                    alt=""
                    className="tm-sm-linkedin"
                  />
                </a>
                <a href="#" className="sm-link">
                  <img
                    src={sm_gplus}
                    alt=""
                    className="tm-sm-gmail"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
