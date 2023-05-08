import UI from "./ui.png";
const Education = () => {
  return (
    <div className="edu">
      <div>
        <img src={UI} alt="university of isfahan icon" className="ui" />
      </div>
      <div>
        <h4>University of Isfahan</h4>
        <p className="myPara">
          Bachelor's degree, Computer ScienceBachelor's degree, Computer Science
        </p>
        <p className="dateOfEdu">Apr 2020</p>
      </div>
    </div>
  );
};

export default Education;
