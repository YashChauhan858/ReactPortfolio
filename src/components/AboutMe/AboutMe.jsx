import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="About__me">
      {/* shapes for backhround */}
      <div className="square"></div>
      <div className="circle"></div>
      <div className="xShape">
        <div className="vertical"></div>
        <div className="horizontal"></div>
      </div>
      <div className="triangle">
        <svg height="200" width="300">
          <polygon
            points="150,30 250,150 50,150"
            style={{
              fill: "transparent",
              stroke: "#3cda9b",
              strokeWidth: "15",
            }}
          />
        </svg>
      </div>

      <div className="About__me__info">
        <div className="heading__gif">
          <img
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            src="https://media.giphy.com/media/l0NwC1UnHzAHfC50c/giphy.gif"
            alt="img"
          />
          <h1
            data-aos="fade-left"
            data-aos-easing="ease-in"
            data-aos-duration="600"
          >
            Hi! My name <br />
            is Yash Chauhan.
          </h1>
        </div>
        <p data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="500">
          I am the type of guy who is always intrigued by the power of code and
          How much it is changing the shape of our existence and reality as a
          Human being and how much it has boosted and will be boosting our
          Growth in the future, and it is a must-have weapon in our arsenal to
          make all the cool, productive and robust things that can bring good to
          mankind.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
