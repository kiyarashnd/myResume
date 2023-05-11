import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import data from "./data";

const Project = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    //with this cleanup function when you click on button and set index
    //this function run aftere 3 second :
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className="section-img">
      <div className="title">
        <h2 className="project">Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, description, link } = person;
          //more stuff coming up
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="project-img" />
              <div className="displayHead">
                <h4>{name}</h4>
                <a href={link} target="_blank">
                  <AiFillGithub className="githubProject" />
                </a>
              </div>
              <p className="text">{description}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Project;
