import React from "react";
import "./WhatIknow.css";
import Python from "./images/python.svg";
import ReactLogo from "./images/react.svg";
import JavaScript from "./images/javascript.svg";
import Node from "./images/node.svg";
import GraphQL from "./images/GraphQL.png";
import webpack from "./images/webpack.png";
import docker from "./images/docker.png";
import ts from "./images/ts.png";
import nextjs from "./images/nextjs.png";

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
            <img alt="logo__img" className="container__images" src={nextjs} />
            <h4 className="tooltip">Nextjs</h4>
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
            <img alt="logo__img" className="container__images" src={GraphQL} />
            <h4 className="tooltip">GraphQL</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={ts} />
            <h4 className="tooltip">TypeScript</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={docker} />
            <h4 className="tooltip">Docker</h4>
          </div>
          <div className="img__container">
            <img alt="logo__img" className="container__images" src={webpack} />
            <h4 className="tooltip">webpack</h4>
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
