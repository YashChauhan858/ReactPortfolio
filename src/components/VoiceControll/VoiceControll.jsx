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
          "let me view * ",
          "let me view * project",
          "hello can you open * for me",
          "hello can you please open * for me",
          "*",
        ],
        callback: (star) => {
          if (
            star === "netflix" ||
            star === "Netflix" ||
            star.includes("netflix")
          ) {
            alert("yessss you got it bro");
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
