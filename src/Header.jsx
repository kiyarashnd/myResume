import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <section>
      <div className="underlineHeader"></div>
      <h1>i'm kiyarash nadri</h1>
      <p className="para">React developer</p>
      <section className="display">
        <div className="contact">
          <p>CONTACT ME : </p>
        </div>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/kiyarash-nadri/"
            target="_blank"
            title="Linkedin"
          >
            <AiOutlineLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/kiyarashnd"
            target="_blank"
            title="Github"
          >
            <AiFillGithub className="github" />
          </a>
        </div>
      </section>
      <div>
        <div className="title">
          <h2>about me</h2>
          <div className="underline"></div>
        </div>
        <p className="about">
          As a developer and computer science student at Isfahan University, I
          am interested in creating visual and attractive experiences for the
          user through clean and responsive web design. Specializing in HTML,
          CSS, JavaScript, and react.js, I deliver a variety of projects for
          clients across industries, from e-commerce sites to educational
          platforms. In addition to my technical skills, I bring a strong work
          ethic and collaborative spirit to every project, striving to
          understand each client's unique goals and requirements to deliver
          results that exceed expectations. I am passionate about discovering
          new technologies and techniques that can help me create more effective
          user experiences.
        </p>
      </div>
    </section>
  );
};

export default Header;
