import React from "react";
import "./ProjectCard.css";
import Netflix from "./images/netflix.svg";
import Amazon from "./images/amazon.svg";
import Covid19 from "./images/covid-19.svg";
import Portfolio from "./images/portfolio.svg";
function ProjectCard() {
  return (
    <div className="projectCard">
      {/* Netflix Clone*/}
      <div
        className="mycard__holder"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="500"
      >
        <div className="info__card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front front__img">
                <img clasName="" src={Netflix} alt="logo" />
              </div>
              <div class="flip-card-back">
                <div className="inner">
                  <a
                    href="https://developers.themoviedb.org/3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Tmdb Api Link
                  </a>

                  <a
                    href="https://netflix-clone-75f6a.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Project Link
                  </a>

                  <a
                    href="https://github.com/MeowMeow-afk/netflix-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="info left">
            <h1>Netflix Clone</h1>
            <h3>
              Here I have created a Netflix clone using react.js and learned
              some new things about the technology along the way.
            </h3>
            <h3 className="above840">Hover over the card for more info</h3>
            <h3 className="below840">Click on the card for more info</h3>
          </div>
        </div>
      </div>
      {/* Amazon Clone */}
      <div
        className="mycard__holder mycard__holderRight"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="500"
      >
        <div className="info__card">
          <div className="info right">
            <h1>Amazon Clone</h1>
            <h3>
              In this I learned a lot of crucial stuff like to react context
              API, firebase auth and reat-router-dom module.
            </h3>
            <h3 className="above840">Hover over the card for more info</h3>
            <h3 className="below840">Click on the card for more info</h3>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front front">
                <img className="logo__img" src={Amazon} alt="logo" />
              </div>
              <div class="flip-card-back back">
                <div className="inner">
                  <a href="window.location">
                    <span className="dot"></span>
                    React Context Api
                  </a>

                  <a
                    href="https://clone-9b1fc.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Project Link
                  </a>

                  <a
                    href="https://github.com/MeowMeow-afk/Amazon-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Covid Tracker */}
      <div
        className="mycard__holder"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="500"
      >
        <div className="info__card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front front__img">
                <img clasName="" src={Covid19} alt="logo" />
              </div>
              <div class="flip-card-back">
                <div className="inner">
                  <a
                    href="https://corona.lmao.ninja/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Api Link
                  </a>

                  <a
                    href="https://covid-19-tracker-723c4.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Project Link
                  </a>

                  <a
                    href="https://github.com/MeowMeow-afk/Covid-19-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="info left">
            <h1>Covid Tracker</h1>
            <h3>
              Here I created a covid-19 tracker using Disease. Sh API, here I
              learned about mobile first designing and some new cars and react
              tricks and has added dark mode .
            </h3>
            <h3 className="above840">Hover over the card for more info</h3>
            <h3 className="below840">Click on the card for more info</h3>
          </div>
        </div>
      </div>
      {/* Previous Portfolio */}
      <div
        className="mycard__holder mycard__holderRight"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="500"
      >
        <div className="info__card">
          <div className="info right">
            <h1>Previous Portfolio</h1>
            <h3>I made this when I started my front-end journey.</h3>
            <h3 className="above840">Hover over the card for more info</h3>
            <h3 className="below840">Click on the card for more info</h3>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front front">
                <img className="portfolio__icon" src={Portfolio} alt="logo" />
              </div>
              <div class="flip-card-back back">
                <div className="inner">
                  <a href="window.location">
                    <span className="dot"></span>
                    Plane Html Css
                  </a>

                  <a
                    href="https://meowmeow-afk.github.io/Portfolio-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Link
                  </a>

                  <a
                    href="https://github.com/MeowMeow-afk/Portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dot"></span>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
