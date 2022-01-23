import React from "react";

import "./Elements.css";

const ButtonLight = (props) => {
  return (
    <div>
      <button className="btn btn-light">{props.text}</button>
    </div>
  );
};

const ButtonDark = (props) => {
  return (
    <div>
      <button className="btn btn-dark">{props.text}</button>
    </div>
  );
};

export { ButtonDark, ButtonLight };
