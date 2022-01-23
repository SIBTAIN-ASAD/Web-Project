import React from "react";
import { Link } from "react-router-dom";

import register_vect from "../../../Illustrations/register.svg";
import "./Register.css";

const Register = (props) => {
  return (
    <div>
      {" "}
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
              <form method="post" className="ip-container">
                <div className="name-container">
                  <div className="fname-ip-container">
                    <span className="fname-ip-label">First Name</span>
                    <input
                      type="text"
                      className="fname-ip"
                      name="fname"
                      placeholder="Muhammad"
                      required
                    />
                  </div>

                  <div className="lname-ip-container">
                    <span className="lname-ip-label">Last Name</span>
                    <input
                      type="text"
                      className="lname-ip"
                      name="lname"
                      placeholder="Ans"
                      required
                    />
                  </div>
                </div>

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
                  <span className="password-ip-label">
                    Choose Your Password
                  </span>
                  <input
                    type="password"
                    className="password"
                    name="password"
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
