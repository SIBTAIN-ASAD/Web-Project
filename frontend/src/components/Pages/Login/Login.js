import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import login_vect from "../../../Illustrations/login.svg";

const Login = (props) => {
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

              <form method="post" className="ip-container">
                <div className="gmail-ip-container">
                  <span className="gmail-ip-label">Your FCIT Gmail</span>
                  <input
                    type="email"
                    className="gmail-ip"
                    name="gmail"
                    placeholder="bitf19m024@pucit.edu.pk"
                    required
                  />
                </div>

                <div className="password-ip-container">
                  <span className="password-ip-label">Your Password</span>
                  <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="type your password here..."
                    required
                  />
                </div>

                <div className="forgot-pass">
                  <span className="forgot">Forgot password?</span>
                  <span className="reset">
                    reset here
                  </span>
                </div>
                <div className="login-btn-container">
                  <button type="submit" className="login-btn">Login</button>
                </div>

                <div className="not-joined">
                  <span className="n-joined">Not Joined Yet?</span>
                  <span className="reg-here">
                    <Link to="/register">
                      register here
                    </Link>
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
