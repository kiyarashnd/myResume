import Certifications from "./Certifications";
import Skills from "./Skills";
import Education from "./Education";
import React, { useState } from "react";

const Body = () => {
  const [value, setValue] = useState(0);

  return (
    <section>
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
    </section>
  );
};

export default Body;
