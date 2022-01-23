import React from "react";
import { Route, Link } from "react-router-dom";

import contact_vect from "../../../Illustrations/contactus.svg";

import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="navbar-wrapper">
            <div className="home-logo-container">
              <Link style={{ textDecoration: "none" }} to="/home">
                <span className="home-logo-title">FkCIT </span>
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
                <li className="navitem active">Contact</li>
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-center-items">
          <div className="contact-box">
            <div className="contact-title">
              <span> Message us! </span>
            </div>

            <form method="post" className="ip-container">
              <div className="name-container">
                <div className="fname-ip-container">
                  <span className="fname-ip-label">First Name</span>
                  <input
                    type="text"
                    className="fname-ip"
                    name="fname"
                    placeholder="Muhammad"
                  />
                </div>

                <div className="lname-ip-container">
                  <span className="lname-ip-label">Last Name</span>
                  <input
                    type="text"
                    className="lname-ip"
                    name="lname"
                    placeholder="Ans"
                  />
                </div>
              </div>

              <div className="select-ip-container">
                <span className="select-ip-label">Type</span>
                <select
                  required
                  name="messageType"
                  id="mesgType"
                  className="msgTypeSelect"
                >
                  <option className="opt" value="suggession">
                    Suggession
                  </option>
                  <option className="opt" value="Complaint">
                    Complaint
                  </option>
                  <option className="opt" value="appreciation">
                    Appreciation
                  </option>
                </select>
              </div>

              <div className="tarea-ip-container">
                <span className="tarea-ip-label">Your Message</span>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your words here..."
                ></textarea>
              </div>

              <div className="contact-btn-container">
                <button type="submit" className="contact-btn">
                  send
                </button>
              </div>
            </form>
          </div>

          <div className="contact-il-container">
            <img src={contact_vect} alt="people-in-queue" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
