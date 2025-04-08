import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Мы гарантируем лучшее образование для лучшего мира</h1>
        <p>
        Наша передовая учебная программа разработана для того, чтобы предоставить студентам знания, навыки и опыт, необходимые для достижения успеха в динамичной сфере образования
        </p>
        <button className="btn">
        Узнайте больше<img src={dark_arrow} alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;
