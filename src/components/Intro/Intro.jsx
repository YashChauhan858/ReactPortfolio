import React, { useState, useEffect } from "react";
import Rellax from "rellax";
import "./Intro.css";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";
// import MangkyouSharingan from "./images/MangkyouSharingan.svg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ItachiEye from "./images/itachi__eye.svg";
import Edmodel from "./images/3d-model.svg";
import Cross from "./images/Cross.svg";
import circle from "./images/darkCircle.svg";
import Atom from "./images/atom-shape.svg";
import hexagon from "./images/hexagon.svg";
import Dark from "./images/Dark.svg";
import hiddenLeaf from "./images/hiddenLeaf.svg";
import custom from "./images/custom.svg";
import star from "./images/darkStar.svg";
import triangle from "./images/triangle.svg";
import plus from "./images/plus.svg";
import Goku__Kanji from "./images/goku's__Kanji.svg";
import wingsOfFreedom from "./images/wingsOfFreedom.svg";
import upAndDown from "./images/up-and-down.svg";
import Modal from "../Modal/Modal";
// Typing effect module
import Typed from "react-typed";
function Intro() {
  new Rellax(".rellax");
  const [myWork, setMyWork] = useState([]);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setMyWork([
      {
        Link: "https://covid-19-tracker-723c4.web.app/",
        Title: "Covid Tracker",
      },
      {
        Link: "https://clone-9b1fc.web.app/",
        Title: "Amazon Clone",
      },
      {
        Link: "https://netflix-clone-75f6a.firebaseapp.com/",
        Title: "NetFlix Clone",
      },
    ]);
  }, []);

  const [hover, setHover] = useState(false);
  return (
    <div className="intro">
      {/* images in background */}
      <div className="bg-img">
        <img /* 2 */
          className="star rellax"
          data-rellax-speed="-3"
          data-rellax-zindex="2"
          src={star}
          alt="logozzz"
        />
        <img /* 1 */
          className="Edmodel rellax layer1"
          data-rellax-speed="2.5"
          data-rellax-zindex="3"
          src={Edmodel}
          alt="logozzz"
        />
        <img /* 1 */
          className="custom rellax layer1"
          data-rellax-speed="2.5"
          data-rellax-zindex="3"
          src={custom}
          alt="logozzz"
        />
        <img /* 1 */
          className="plus rellax layer1"
          data-rellax-speed="2.5"
          data-rellax-zindex="3"
          src={plus}
          alt="logozzz"
        />
        <img /* 1 */
          className="bgTriangle rellax layer1"
          data-rellax-speed="2.5"
          data-rellax-zindex="3"
          src={triangle}
          alt="logozzz"
        />
        <img /* 1 */
          className="dtriangle rellax layer1"
          data-rellax-speed="2.5"
          data-rellax-zindex="3"
          src={upAndDown}
          alt="logozzz"
        />
        <img /* 0 */
          className="bgCross rellax layer2"
          data-rellax-speed="-4"
          data-rellax-zindex="2"
          src={Cross}
          alt="logozzz"
        />
        <img /* 0 */
          className="bgCircle rellax layer2"
          data-rellax-speed="-4"
          data-rellax-zindex="2"
          src={circle}
          alt="logozzz"
        />
        <img /* 0 */
          className="hexagon rellax layer2"
          data-rellax-speed="-4"
          data-rellax-zindex="2"
          src={hexagon}
          alt="logozzz"
        />
        <img /* 0 */
          className="hiddenLeaf rellax layer2"
          data-rellax-speed="-4"
          data-rellax-zindex="2"
          src={hiddenLeaf}
          alt="logozzz"
        />
        <img /* 0 */
          className="bgAtom rellax layer2"
          data-rellax-speed="-4"
          data-rellax-zindex="2"
          src={Atom}
          alt="logozzz"
        />
        <img /* -1 */
          className="dragonball rellax layer3"
          data-rellax-speed="-1"
          data-rellax-zindex="1"
          src={Goku__Kanji}
          alt="logozzz"
        />
        <img /* -1 */
          className="wingsOfFreedom layer3"
          data-rellax-speed="-1"
          data-rellax-zindex="1"
          src={wingsOfFreedom}
          alt="logozzz"
        />
        <img /* -1 */
          className="darkLogo rellax layer3"
          data-rellax-speed="-1"
          data-rellax-zindex="1"
          src={Dark}
          alt="logozzz"
        />
        <img /* -2 */
          className="star posiStar rellax bg--small"
          data-rellax-speed="-2"
          data-rellax-zindex="-1"
          src={star}
          alt="logozzz"
        />
        <img /* -2 */
          className="bgTriangle posiBgTriangle rellax bg--small"
          data-rellax-speed="-2"
          data-rellax-zindex="-1"
          src={triangle}
          alt="logozzz"
        />
      </div>
      <div className="intro__header">
        <div class="dropdown">
          <button class="dropbtn">My Work</button>
          <div class="dropdown-content">
            {myWork.map((e, index) => {
              return (
                <a key={index} href={e.Link} target="_blank" rel="noreferrer">
                  {e.Title}
                </a>
              );
            })}
          </div>
        </div>
        <div className="header__2">
          <a
            href="../../Downloadables/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="MyResume.pdf"
          >
            <h2>Resume</h2>
          </a>
          <IconButton
            onClick={() => setOpen(!isOpen)}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            {hover ? (
              <MailOutlineIcon className="header__icon" />
            ) : (
              <EmailIcon className="header__icon" />
            )}
          </IconButton>
          {/* Popup Modal */}
          <Modal isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
      <div className="intro__ina">
        <div className="ina__image"></div>
        <div className="ina__aboutme">
          <h1>Hi, I am Yash </h1>
          <p>
            And I am a
            <Typed
              strings={[" UI Developer", " Programmer"]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </p>
          <a
            className="contactMe"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yashchauhan858@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Let's Talk
          </a>
        </div>
      </div>
      <div className="intro__tagline">
        <p className="quote">
          "Those who cannot acknowledge themselves, will eventually fail"
        </p>
        <img className="eye" src={ItachiEye} alt="eye" />
      </div>
    </div>
  );
}

export default Intro;
