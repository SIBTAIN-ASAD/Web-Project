import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Formik,
  useFormik,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
} from "formik";

import "./Login.css";
import login_vect from "../../../Illustrations/login.svg";
import CSRFToken from "../Elements/CSRFtoken";

const Login = (props) => {
  useEffect(() => {
    document.title = `Login | FCIT Help Desk`;
  });

  const formik = useFormik({
    initialValues: { gmail: "", password: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-container-main">
          <div className="login-logo-container">
            <span className="login-logo-title">FCIT&nbsp;</span>
            <span className="login-logo-text"> help desk.</span>
          </div>

          <div className="login-container">
            <div className="login-box">
              <div className="login-title">
                <span> Login Here </span>
              </div>

              {/* <form onSubmit={formik.handleSubmit}  method="post" className="ip-container"> */}
              <form onSubmit={formik.handleSubmit} className="ip-container">
                <CSRFToken />
                <div className="gmail-ip-container">
                  <span className="gmail-ip-label">Your FCIT Gmail</span>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.gmail}
                    type="email"
                    className="gmail"
                    name="gmail"
                    id="gmail"
                    placeholder="bitf19m024@pucit.edu.pk"
                    required
                  />
                </div>

                <div className="password-ip-container">
                  <span className="password-ip-label">Your Password</span>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    className="password"
                    name="password"
                    id="password"
                    placeholder="type your password here..."
                    required
                  />
                </div>

                <div className="forgot-pass">
                  <span className="forgot">Forgot password?</span>
                  <span className="reset">reset here</span>
                </div>
                <div className="login-btn-container">
                  <button type="submit" className="login-btn">
                    Login
                  </button>
                </div>

                <div className="not-joined">
                  <span className="n-joined">Not Joined Yet?</span>
                  <span className="reg-here">
                    <Link to="/register">register here</Link>
                  </span>
                </div>
              </form>
            </div>
            <div className="login-il-container">
              <img src={login_vect} alt="man-with-key" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
