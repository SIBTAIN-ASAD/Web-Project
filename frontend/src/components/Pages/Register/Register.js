import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { GreenAlert, RedAlert } from "../Elements/Alert";

import { useFormik } from "formik";

import register_vect from "../../../Illustrations/register.svg";
import "./Register.css";
import CSRFToken from "../Elements/CSRFtoken";

function readBody(xhr) {
  var data;
  if (!xhr.responseType || xhr.responseType === "text") {
    data = xhr.responseText;
  } else if (xhr.responseType === "document") {
    data = xhr.responseXML;
  } else {
    data = xhr.response;
  }
  return data;
}

const Register = (props) => {
  useEffect(() => {
    document.title = `Register | FCIT Help Desk`;
  });
  const formik = useFormik({
    initialValues: { fname: "", lname: "", fmail: "", password: "" },
    onSubmit: (values) => {
      let url = "http://127.0.0.1:8000/apirfw/auth/register/";
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = (props) => {
        if (xhr.readyState === 4) {
          if (xhr.readyState === 4 && xhr.status == 200) {
            console.log("Status - : " + xhr.status);
            console.log(readBody(xhr));
            console.log("Response - : " + xhr.responseText);
          }
        }
      };

      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
      let register_data = JSON.stringify(values, null, 2);
      xhr.send(register_data);
      console.log(xhr);
      var data;
      fetch(url, {
        method: 'post', // Default is 'get'
        body: JSON.stringify(values),
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(json => data = console.log('Response', json))
    },
  });

  return (
    <div>
      {/* <RedAlert msg="Invalid Registration Details" /> */}
      {/* <GreenAlert msg="Logged In Successfully" /> */}
      <div className="register-wrapper">
        <div className="register-container-main">
          <div className="register-logo-container">
            <span className="register-logo-title">FCIT&nbsp;</span>
            <span className="register-logo-text"> help desk.</span>
          </div>

          <div className="register-container">
            <div className="register-il-container">
              <img src={register_vect} alt="people-in-queue" srcSet="" />
            </div>

            <div className="register-box">
              <div className="register-title">
                <span> Register Here </span>
              </div>
              <form onSubmit={formik.handleSubmit} className="ip-container">
                {/* <CSRFToken /> */}

                <div className="name-container">
                  <div className="fname-ip-container">
                    <span className="fname-ip-label">First Name</span>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fname}
                      type="text"
                      className="fname"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="lname-ip-container">
                    <span className="lname-ip-label">Last Name</span>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.lname}
                      type="text"
                      className="lname"
                      name="lname"
                      id="lname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="gmail-ip-container">
                  <span className="gmail-ip-label">Your FCIT Gmail</span>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.fmail}
                    type="email"
                    className="fmail"
                    name="fmail"
                    id="fmail"
                    placeholder="xxxxxxxxxx@pucit.edu.pk"
                    required
                  />
                </div>

                <div className="password-ip-container">
                  <span className="password-ip-label">
                    Choose Your Password
                  </span>
                  <input
                    type="password"
                    className="password"
                    name="password"
                    id="password"
                    value={formik.values.Password}
                    onChange={formik.handleChange}
                    placeholder="enter your password here..."
                    required
                  />
                </div>

                <div className="register-btn-container">
                  <button type="submit" className="register-btn">
                    Register
                  </button>
                </div>

                <div className="al-joined">
                  <span className="joined">Already Joined?</span>
                  <span className="login-here">
                    <Link to="/login">login here</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
