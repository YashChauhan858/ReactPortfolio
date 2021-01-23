import React from "react";
import "./Myway.css";
import Attractive from "../../images/promo.svg";
import Code from "../../images/file-code-solid.svg";
import Optmise from "../../images/optmise.svg";
function Myway() {
  return (
    <div className="myway">
      <div className="myway__header">
        <h1>The way I like it.</h1>
      </div>
      <div className="card__holder">
        <div className="myway__cards">
          <div className="card">
            <div className="myway__info">
              <h2>Code</h2>
              <p>Coding it for mobile devices and make my way up.</p>
            </div>
            <div className="card__icon">
              <img src={Code} alt="" />
              <p>Coding it for mobile devices and make my way up.</p>
            </div>
          </div>
        </div>
        <div className="myway__cards">
          <div className="card">
            <div className="myway__info">
              <h2>Optmise</h2>
              <p>Cleaning up the code and make it readable.</p>
            </div>
            <div className="card__icon">
              <img src={Optmise} alt="" />
              <p>Cleaning up the code and make it readable.</p>
            </div>
          </div>
        </div>
        <div className="myway__cards">
          <div className="card">
            <div className="myway__info">
              <h2>Make it attractive</h2>
              <p>Sprinkle some simplicity in the design.</p>
            </div>
            <div className="card__icon">
              <img src={Attractive} alt="" />
              <p>Sprinkle some simplicity in the design.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myway;
