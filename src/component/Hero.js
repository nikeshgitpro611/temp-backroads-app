import React from "react";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-banner">
        <p className="copyright">
          Date : <span id="date"></span>
          <br />
          Time : <span id="time"></span>
          <br />
          Weekday's : <span id="week"></span>
        </p>
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </div>
  );
};

export default Hero;
