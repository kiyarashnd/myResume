import { FiNavigation } from "react-icons/fi";

const Certifications = () => {
  return (
    <section className="job-info">
      <div className="titleCerti">
        <h3>title</h3>
        <p>Responsive Web DesignResponsive Web Design</p>
      </div>
      <div className="company">
        <h4>company</h4>
        <p>freeCodeCamp.org</p>
      </div>
      <div className="date">
        <p className="job-date">dates</p>
        <p>jan 2023</p>
      </div>
      <div className="link">
        <p>link</p>
        <a
          href="https://www.freecodecamp.org/certification/kiyarashnd/responsive-web-design"
          className="cert"
          target="_blank"
        >
          Show credential <FiNavigation className="linkIcon" />
        </a>
      </div>
    </section>
  );
};

export default Certifications;
