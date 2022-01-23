import React from "react";
import {Link} from "react-router-dom";

import "./Welcome.css";
import welcome_vect from "../../../Illustrations/welcome-c.svg";
import pu_oc from  "../../../Illustrations/pu_oc.png";

const bg_style = {
  "backgroundImage": `url(${pu_oc})`,
  backgroundPosition:"fixed",
  backgroundRepeat:"no-repeat",
  backgroundSize : "cover",
  


}
const Welcome = (props) => {
  return (
    <div style={bg_style}>
      <div className="welcome-wrapper">
        <div className="welcome-container">
          <div className="logo-container">
            <span className="logo-title">FCIT </span>
            <span className="logo-text"> help desk.</span>
          </div>
          <div className="center-items">
            <div className="il-container">
              <img src={welcome_vect} alt="welcome-svg" />
            </div>
            <div className="btn-container">
              <Link to="/login">
              <button className="btn login">login</button>
              </Link>
              <button className="btn register">register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
