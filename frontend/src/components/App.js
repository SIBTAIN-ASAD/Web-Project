import React, { Component } from "react";
import { render } from "react-dom";

const App = (props) => {
  return <div>Hello From React-Django 'App'</div>;
};

export default App;

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
