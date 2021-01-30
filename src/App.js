import "./App.css";
import Intro from "./components/Intro/Intro";
import Myway from "./components/Myway/Myway";
import WhatIknow from "./components/WhatIknow/WhatIknow";
import PorjectCard from "./components/ProjectCard/ProjectCard";
import AboutMe from "./components/AboutMe/AboutMe";
import VoiceControll from "./components/VoiceControll/VoiceControll";
function App() {
  return (
    <div className="App">
      <VoiceControll />
      <Intro />
      <Myway />
      <AboutMe />
      <WhatIknow />
      <PorjectCard />
    </div>
  );
}

export default App;
