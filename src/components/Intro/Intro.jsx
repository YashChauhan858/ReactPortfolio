import React, { useState, useEffect } from "react";
import "./Intro.css";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";
import MangkyouSharingan from "../../images/MangkyouSharingan.svg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Modal from "../Modal/Modal";
function Intro() {
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
          <p>And I am a Front-End Dev</p>
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
        <img className="eye" src={MangkyouSharingan} alt="eye" />
      </div>
    </div>
  );
}

export default Intro;
