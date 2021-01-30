import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./VoiceControll.css";
import Mic from "./images/microphone.svg";
const VoiceControll = () => {
  // star here is *
  const [commands, setCommands] = useState({});
  const [displayNone, setDisplayNone] = useState(true);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setCommands([
      {
        command: [
          "Go to *",
          "open *",
          "can you open * for me",
          "can you please open * for me",
          "can you please open * project for me",
          "let me view * ",
          "let me view * project",
          "hello can you open * for me",
          "hello can you please open * for me",
          "*",
        ],
        callback: (star) => {
          console.log(star);
          if (star.includes("netflix") || star.includes("Netflix")) {
            console.log("hii");
            window.open("https://netflix-clone-75f6a.firebaseapp.com/");
          }
          if (star.includes("amazon") || star.includes("Amazon")) {
            window.open("https://clone-9b1fc.web.app/");
          }
          if (
            star.includes("tracker") ||
            star.includes("Tracker") ||
            star.includes("Covid Tracker") ||
            star.includes("covid tracker") ||
            star.includes("covid") ||
            star.includes("Covid project")
          ) {
            window.open("https://covid-19-tracker-723c4.web.app/");
          }
        },
      },
    ]);
  }, []);

  let { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const startSpeech = () => {
    SpeechRecognition.startListening({ continuous: true });
    setAnimate(true);
    setDisplayNone(false);
    setTimeout(() => {
      SpeechRecognition.stopListening();
      setAnimate(false);
      setDisplayNone(true);
      resetTranscript();
    }, 7000);
  };

  // Check if react-speech-reco is supported in the browser or not
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  return (
    <div className="mic">
      <img
        className={`${animate ? "animateMic" : null}`}
        onClick={() => startSpeech()}
        src={Mic}
        alt="mic"
      />
      <div className="para OnDesktop">
        <p className={`${displayNone ? "showNone" : null}`}>{transcript}</p>
      </div>
    </div>
  );
};

export default VoiceControll;
