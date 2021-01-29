import React from "react";
import "./WhatIknow.css";
import Python from "./images/pythonLogo.svg";
import ReactLogo from "./images/react.svg";
import JavaScript from "./images/javascriptLogo.svg";
import Mongodb from "./images/mongodb.svg";
import Jquery from "./images/jquery.svg";
import HtmlCss from "./images/htmlcss.svg";
import Node from "./images/node.svg";
import ML from "./images/machineLearning.svg";

function WhatIknow() {
  return (
    <div className="info__container">
      <div className="whatiknow">
        <h2
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="500"
        >
          THINGS THAT I HAVE WORKED ON
        </h2>
        <div className="container">
          <div className="img__container">
            <img
              alt="logo__img"
              className="container__images"
              src={ReactLogo}
            />
            <h4 className="tooltip">React Js</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={Node} />
            <h4 className="tooltip">Node Js</h4>
          </div>
          <div className="img__container">
            <img
              alt="logo__img"
              className="container__images"
              src={JavaScript}
            />
            <h4 className="tooltip">Java Script</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={Mongodb} />
            <h4 className="tooltip">MongoDb</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={HtmlCss} />
            <h4 className="tooltip">Html Css</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={Jquery} />
            <h4 className="tooltip">Jquery</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={ML} />
            <h4 className="tooltip">Machine Learning</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={Python} />
            <h4 className="tooltip">Python</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIknow;
