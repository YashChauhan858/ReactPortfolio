import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import GithubLogo from "./images/github.svg";
import LinkDinLogo from "./images/linkedin.svg";
import Close from "./images/close.svg";
import Copy from "./images/copy.svg";
function Modal({ isOpen, setOpen }) {
  const [copyOne, setCopy1] = useState(false);
  const [copySecond, setCopy2] = useState(false);

  if (!isOpen) return null;

  function Copy1() {
    var copyText = document.querySelectorAll(".copy__link")[0].dataset;
    window.navigator.clipboard.writeText(copyText.link);
    setCopy1(!copyOne);
  }
  function Copy2() {
    var copyText = document.querySelectorAll(".copy__link")[1].dataset;
    window.navigator.clipboard.writeText(copyText.link);
    setCopy2(!copySecond);
  }
  return ReactDom.createPortal(
    <div className="modal__inner">
      <div className="main__modal">
        {/* <p className="close__btn" onClick={() => setOpen(false)}> */}
        <img
          className="close__btn"
          onClick={() => setOpen(false)}
          src={Close}
          alt=""
        />
        {/* </p> */}
        <div className="Apne__links">
          <div className="links__inner">
            <div className="inner__textarea">
              <img src={GithubLogo} alt="logoo" />
              <p
                className="copy__link"
                data-link="https://github.com/MeowMeow-afk/"
              >
                https://github.com/MeowMe....
              </p>
            </div>
            <img
              className={`coptToClip ${copyOne ? "makeItDark" : null}`}
              onClick={() => Copy1()}
              src={Copy}
              alt="Logoo"
            />
          </div>
          <div className="links__inner">
            <div className="inner__textarea">
              <img src={LinkDinLogo} alt="logoo" />
              <p
                className="copy__link"
                data-link="https://www.linkedin.com/in/yashchauhan858/"
              >
                https://www.linkedin.com/in/....
              </p>
            </div>
            <img
              className={`coptToClip ${copySecond ? "makeItDark" : null}`}
              onClick={() => Copy2()}
              src={Copy}
              alt="Logoo"
            />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
