import React,{useEffect} from "react";
import { Route, Link } from "react-router-dom";

import contact_vect from "../../../Illustrations/contactus.svg";
import {
  Formik,
  useFormik,
} from "formik";
import "./Contact.css";

const Contact = (props) => {
  useEffect(() => {
    document.title = `Contact Us! | FCIT Help Desk`;
  });
  const formik= useFormik({
    initialValues : {fname : '', lname : '', messageType : '', message : ''},
    onSubmit :(values) =>{
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    }
  })
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

            <form onSubmit={formik.handleSubmit} className="ip-container">
              <div className="name-container">
                <div className="fname-ip-container">
                  <span className="fname-ip-label">First Name</span>
                  <input
                  value = {formik.values.fname}
                  onChange={formik.handleChange}
                  id="fname"
                  type="text"
                    className="fname"
                    name="fname"
                    placeholder="First Name"
                    />
                </div>

                <div className="lname-ip-container">
                  <span className="lname-ip-label">Last Name</span>
                  <input
                    value = {formik.values.lname}
                    onChange={formik.handleChange}
                    type="text"
                    id="lname"
                    className="lname"
                    name="lname"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="select-ip-container">
                <span className="select-ip-label">Type</span>
                <select
                value = {formik.values.messageType}
                onChange={formik.handleChange}
                name="messageType"
                id="mesgType"
                type="select"
                className="msgTypeSelect"
                required
                >
                  <option className="opt" value="suggession">
                    Suggession
                  </option>
                  <option className="opt" value="complaint">
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
                value={formik.values.message}
                onChange={formik.handleChange}
                  name="message"
                  id="message"
                  placeholder="Your words here..."
                  required
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
