import React, { useEffect, useState } from "react";

import "./Elements.css";
import cross from "../../../Illustrations/delete.png";

const RedAlert = (props) => {
  let [dis, setDisplay] = useState("block");

  return (
    <div style={{ display: dis }}>
      <div
        className="alert-container red-alert"
        onClick={() => {
          setDisplay("none");
        }}
      >
        <p className="alert-text">Error {props.msg}</p>
        <div className="cross-container">
          <img src={cross} alt="cross-btn" />
        </div>
      </div>
    </div>
  );
};

const GreenAlert = (props) => {
  let [dis, setDisplay] = useState("block");

  return (
    <div style={{ display: dis }}>
      <div
        className="alert-container green-alert"
        onClick={() => {
          setDisplay("none");
        }}
      >
        <p className="alert-text">Success {props.msg}</p>
        <div className="cross-container">
          <img src={cross} alt="cross-btn" />
        </div>
      </div>
    </div>
  );
};

export { RedAlert, GreenAlert };
