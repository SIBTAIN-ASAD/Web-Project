import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome/Welcome";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Explore from "./Pages/Explore/Explore";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import Main from "./Pages/Main/Main";
import CGPACalculator from "./Pages/CGPACalculator/CGPACalculator";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cgpacalculator" element={<CGPACalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
