import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "./Header";
import Certifications from "./Certifications";
import Skills from "./Skills";
import Education from "./Education";

function App() {
  const [value, setValue] = useState(0);

  // this place of destructuring is important :
  // const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <Header />
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          <button
            onClick={() => setValue(0)}
            className={`job-btn ${0 === value && "active-btn"}`}
          >
            Certifications
          </button>
          <button
            onClick={() => setValue(1)}
            className={`job-btn ${1 === value && "active-btn"}`}
          >
            Skills
          </button>
          <button
            onClick={() => setValue(2)}
            className={`job-btn ${2 === value && "active-btn"}`}
          >
            Education
          </button>
        </div>
        {/* job info */}
        {value === 0 && <Certifications />}
        {value === 1 && <Skills />}
        {value === 2 && <Education />}
      </div>
      <div className="title">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
    </section>
  );
}

export default App;
