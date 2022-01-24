import React, { useState, useEffect } from "react";
import { RedAlert } from "../Elements/Alert";

import "./CGPACalculator.css";

const CGPACalculatorHelper = (props) => {
  return (
    <div className="cgpa-wrapper">
      <div className="cgpa-container">
        <div className="dark-navbar-wrapper">
          <div className="cgpa-logo-container">
            <span className="cgpa-logo-title">FCIT </span>
            <span className="cgpa-logo-text"> help desk.</span>
          </div>
          <div className="nav-menu-container">
            <div className="navmenu">
              <li className="dark-navitem">Home</li>
              <li className="dark-navitem">About</li>
              <li className="dark-navitem active">Explore</li>
              <li className="dark-navitem">Team</li>
              <li className="dark-navitem">Contact</li>
            </div>
          </div>
        </div>

        <div className="cgpa-head-container">
          <p className="cgpa-head">Explore/CGPA Calculator/CGPA</p>
        </div>

        <div className="cgpa-center-items">
          <form action="#" method="post" className="calc-or-enter-gpa-form">
            <div className="calc-or-enter-gpa">
              <p className="calc-or-enter-gpa-label">Select Your Choice</p>
              <div className="inner-calc-or-enter-gpa">
                <select name="calc-or-enter-gpa-select" id="">
                  <option value="entergpa">Enter GPA</option>
                  <option value="calculate">Calculate GPA</option>
                </select>
                <button type="submit" className="calc-or-enter-gpa-btn">
                  Go
                </button>
              </div>
            </div>
          </form>

          <form action="#" method="post" className="enter-gpa-form">
            <div className="enter-gpa">
              <p className="enter-gpa-label">Enter Your GPA</p>
              <div className="inner-enter-gpa">
                <input
                  type="number"
                  name="numberOfSubjects"
                  id="noOfSubject"
                  min="1"
                  max="4"
                  placeholder="enter No. of Subjects (1.00-4.00)"
                />
                <button type="submit" className="enter-gpa-btn">
                  Go
                </button>
              </div>
            </div>
          </form>

          <form action="#" method="post" className="select-subj-form">
            <div className="select-sub">
              <p className="select-sub-label">Select Number of Subjects</p>
              <div className="inner-select-subj">
                <input
                  type="number"
                  name="numberOfSubjects"
                  id="noOfSubject"
                  min="1"
                  max="10"
                  placeholder="enter No. of Subjects (1-10)"
                />
                <button type="submit" className="select-subj-btn">
                  Calculate GPA
                </button>
              </div>
            </div>
          </form>

          <form action="#" method="post" className="form-subj-table">
            <table className="table">
              <thead className="tablehead">
                <th className="h_1">#</th>
                <th className="h_2">Subject</th>
                <th className="h_3">Marks</th>
                <th className="h_4">Credit Hours</th>
              </thead>
              <tbody>
                <tr>
                  <td className="d_1">1</td>

                  <td className="d_2">
                    <input
                      type="text"
                      className="table-input-field"
                      name="subject-name"
                      placeholder="subject name"
                    />
                  </td>

                  <td className="d_3">
                    <input
                      type="number"
                      className="table-input-field"
                      name="subject-marks"
                      placeholder="your marks (0 - 100)"
                      min="0"
                      max="100"
                      required
                    />
                  </td>

                  <td className="d_4">
                    <input
                      type="number"
                      className="table-input-field"
                      name="subject-marks"
                      placeholder="credit hours 1-3"
                      min="1"
                      max="3"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="calc-gpa-btn-container">
              <button type="reset" className="calc-cgpa-btn">
                Reset
              </button>
              <button type="submit" className="calc-cgpa-btn">
                Calculate GPA
              </button>
            </div>
          </form>

          <div className="calculated-gpa">Your GPA is : X.XX</div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <div className="dark-navbar-wrapper">
        <div className="cgpa-logo-container">
          <span className="cgpa-logo-title">FCIT </span>
          <span className="cgpa-logo-text"> help desk.</span>
        </div>
        <div className="nav-menu-container">
          <div className="navmenu">
            <li className="dark-navitem">Home</li>
            <li className="dark-navitem">About</li>
            <li className="dark-navitem active">Explore</li>
            <li className="dark-navitem">Team</li>
            <li className="dark-navitem">Contact</li>
          </div>
        </div>
      </div>
    </div>
  );
};

const GPATableHead = () => {
  return (
    <thead>
      <th className="h_1">#</th>
      <th className="h_2">Subject</th>
      <th className="h_3">Marks</th>
      <th className="h_4">Credit Hours</th>
    </thead>
  );
};

const GPACalcRoW = (props) => {
  return (
    <tr>
      <td className="d_1">{props.iter}</td>

      <td className="d_2">
        <input
          type="text"
          className="table-input-field"
          name="subjName"
          placeholder="subject name"
        />
      </td>

      <td className="d_3">
        <input
          type="number"
          className="table-input-field"
          name="subjMarks"
          placeholder="your marks (0 - 100)"
          min="0"
          max="100"
          // onChange={}
          required
        />
      </td>

      <td className="d_4">
        <input
          type="number"
          className="table-input-field"
          name="crHrs"
          placeholder="credit hours 1-3"
          min="1"
          max="3"
          required
        />
      </td>
    </tr>
    // </div>
  );
};

const GPACalculator = (props) => {
  //   const handleSubmit = (event) => {
  //     const formData = new FormData(event.currentTarget);
  //     event.preventDefault();
  //     for (let [key, value] of formData.entries()) {
  //       console.log(key, value);
  //     }
  //   };
  if (props.subjects == 0) {
    return <div></div>;
  }

  let gpa;
  let numberOfSubject = props.subjects;
  console.log(props.subjects);
  const rows = [];

  for (let index = 0; index < numberOfSubject; index++) {
    rows.push(<GPACalcRoW iter={index + 1} key={index} />);
  }

  return (
    <div className="gpa-table-container">
      <form action="#" method="post" className="gpa-table">
        <table>
          <thead className="tablehead">
            <th className="h_1">#</th>
            <th className="h_2">Subject</th>
            <th className="h_3">Marks</th>
            <th className="h_4">Credit Hours</th>
          </thead>

          <tbody>{rows}</tbody>
        </table>
        <div className="calc-gpa-btn-container">
          <button type="reset" className="calc-cgpa-btn">
            Reset
          </button>
          <button type="submit" className="calc-cgpa-btn">
            Calculate GPA
          </button>
        </div>
      </form>
      <div className="calculated-gpa">Your GPA is : X.XX</div>
    </div>
  );
};

const CGPACalculator = () => {
  useEffect(() => {
    document.title = `CGPA Calculator | FCIT Help Desk`;
  });

  var [gpa, setgpa] = useState(0);
  var [cgpa, setcgpa] = useState(0);

  var [noOfSems, setNoOfSems] = useState(0);
  var [calcOrEnter, setCalcOrEnter] = useState("enter");
  var [gpaOrCgpa, setgpaOrCgpa] = useState("gpa");
  var [noOfSubject, setnoOfSubject] = useState(0);
  var [noOfSemester, setnoOfSemester] = useState(1);

  var [gpaTableDis, setgpaTableDis] = useState("none");
  var [enterGpaDis, setenterGpaDis] = useState("none");
  var [calcOrEnterDis, setCalcOrEnterDis] = useState("none");
  var [gpaOrCgpaDis, setgpaOrCgpaDis] = useState("flex");
  var [noOfSubjectDis, setnoOfSubjectDis] = useState("flex");
  var [noOfSemesterDis, setnoOfSemesterDis] = useState("none");

  /* gpa or cgpa handler */
  const gpaCgpaHandler = (e) => {
    setgpaOrCgpa(e.target.value);
    if (e.target.value == "gpa") {
      setnoOfSubjectDis("flex");
      setnoOfSemesterDis("none");
    } else if (e.target.value == "cgpa") {
      setnoOfSemesterDis("flex");
      setnoOfSubjectDis("none");
      setgpaTableDis("none");
      setCalcOrEnterDis("none");
    }
  };

  /* no. of subject handler */
  const noOfSubjectHandler = (e) => {
    if (e.target.value > 10 || e.target.value < 1 || e.target.value == "") {
      console.log("Invalid Input");
      setnoOfSubject(0);
      setgpaTableDis("none");
    } else {
      setnoOfSubject(e.target.value);
      console.log(e.target.value);
      setgpaTableDis("flex");
    }
  };

  /* no. of semesters handler */
  const noOfSemesterHandler = (e) => {
    if (e.target.value > 8 || e.target.value < 1 || e.target.value == "") {
      console.log("Invalid Input");
      setnoOfSemester(0);
      setCalcOrEnterDis("none");
      setgpaTableDis("none");
    } else {
      setnoOfSemester(e.target.value);
      setCalcOrEnterDis("flex");
      setenterGpaDis("flex");
      setgpaTableDis("none");
      console.log(e.target.value);
    }
  };

  /* enter or calculate handler */
  const enterOrCalcGPA = (e) => {
    setgpaOrCgpa(e.target.value);
    if (e.target.value == "calculate") {
      setnoOfSubjectDis("flex");
      setnoOfSemesterDis("none");
    } else if (e.target.value == "cgpa") {
      setnoOfSemesterDis("flex");
      setnoOfSubjectDis("none");
      setgpaTableDis("none");
      setCalcOrEnterDis("none");
    }
  };
  //   const handleSelectNumberOfSubject = (event) => {
  //     if (e.event.value > 10 || e.event.value < 1) {
  //       console.log("Invalid Input");
  //     }

  //     const formData = new FormData(event.currentTarget);
  //     event.preventDefault();
  //     for (let [key, value] of formData.entries()) {
  //       console.log(key, value);
  //     }
  //   };
  return (
    <div className="cgpa-wrapper">
      <div className="cgpa-container">
        <Navbar />
        <div className="cgpa-head-container">
          <p className="cgpa-head">Explore/CGPA Calculator/CGPA</p>
        </div>

        <div className="sub-gpa-boxes-container" style={{ marginTop: "2vh" }}>
          
          {/* calculate GPA or CGPA */}
          <div
            className="cgpa-sub-box-container"
            style={{ display: gpaOrCgpaDis }}
          >
            <div className="cgpa-sub-box">
              <p className="cgpa-sub-box-label">Calculate GPA/CGPA</p>
              <div className="inner-cgpa-sub-box">
                <select
                  name="selectGpaOrCgpa"
                  className="inputType"
                  id=""
                  onChange={gpaCgpaHandler}
                >
                  <option value="gpa">Calculate GPA</option>
                  <option value="cgpa">Calculate CGPA</option>
                </select>
              </div>
            </div>
          </div>

          {/* enter no of semesters */}
          <div
            className="cgpa-sub-box-container"
            style={{ display: noOfSemesterDis }}
          >
            <div className="cgpa-sub-box">
              <p className="cgpa-sub-box-label">Enter No. of Semesters</p>
              <div className="inner-cgpa-sub-box">
                <input
                  className="inputType"
                  type="number"
                  name="noSem"
                  id="noSem"
                  min="1"
                  max="8"
                  placeholder="Enter Your Subjects (1 - 8)"
                  onInput={noOfSemesterHandler}
                />
              </div>
            </div>
          </div>

          enter no of semesters
          <div
            className="cgpa-sub-box-container"
            style={{ display: noOfSemesterDis }}
          >
            <div className="cgpa-sub-box">
              <p className="cgpa-sub-box-label">Enter No. of Semesters</p>
              <div className="inner-cgpa-sub-box">
                <input
                  className="inputType"
                  type="number"
                  name="noSem"
                  id="noSem"
                  min="1"
                  max="8"
                  placeholder="Enter Your Subjects (1 - 8)"
                  onInput={noOfSemesterHandler}
                />
              </div>
            </div>
          </div>

          {/* calculate or enter gpa */}
          <div
            className="cgpa-sub-box-container"
            style={{ display: calcOrEnterDis }}
          >
            <div className="cgpa-sub-box">
              <p className="cgpa-sub-box-label">Calculate/Enter GPA</p>
              <div className="inner-cgpa-sub-box">
                <select name="selectEnterOrCalc" className="inputType" id="" onChange={enterOrCalcGPA}>
                  <option value="enter">Enter GPA</option>
                  <option value="calculate">Calculate GPA</option>
                </select>
              </div>
            </div>
          </div>

          {/* enter gpa */}
          <div className="cgpa-sub-box-container" style={{ display: enterGpaDis }}>
            <div className="cgpa-sub-box">
              <p className="cgpa-sub-box-label">Enter Your GPA</p>
              <div className="inner-cgpa-sub-box">
                <input
                  className="inputType"
                  type="number"
                  name="gpa"
                  id="gpa"
                  min="1"
                  max="4"
                  placeholder="Enter Your GPA (1.00-4.00)"
                  // onChange={gpaHandler}
                />
              </div>
            </div>
          </div>

          {/* enter no of subjects */}
          <div
            className="cgpa-sub-box-container"
            style={{ display: noOfSubjectDis }}
          >
            <div className="cgpa-sub-box">
              <p className="cgpa-sub-box-label">
                Enter this Semester's Subjects
              </p>
              <div className="inner-cgpa-sub-box">
                <input
                  className="inputType"
                  type="number"
                  name="numberOfSubjects"
                  id="noOfSubject"
                  min="1"
                  max="10"
                  placeholder="Enter Your Subjects (1 - 10)"
                  onInput={noOfSubjectHandler}
                />
              </div>
            </div>
          </div>

          <div className="gpa-table-container" style={{ display: gpaTableDis }}>
            <GPACalculator subjects={noOfSubject} />
          </div>
        </div>

        {/* gpa table */}
        {/* gpa table */}
      </div>
    </div>
  );
};

export default CGPACalculator;
