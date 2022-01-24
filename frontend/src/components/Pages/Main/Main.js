import React, {useEffect} from "react";
import { Link, Router } from "react-router-dom";

import Welcome from "../Welcome/Welcome";

import Login from "../Login/Login";
import Register from "../Register/Register";

import Home from "../Home/Home";
import About from "../About/About";
import Explore from "../Explore/Explore";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";

import "./Main.css";

const Main = (props) => {
  return (
    <div className="main2">
      {/* {<Welcome />} */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Home />
      <About />
      <Explore />
      <Team />
      <Contact />
    </div>
  );
};


export default Main;