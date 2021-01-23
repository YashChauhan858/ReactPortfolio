import "./App.css";
import Intro from "./components/Intro/Intro";
import Myway from "./components/Myway/Myway";
import WhatIknow from "./components/WhatIknow/WhatIknow";
import PorjectCard from "./components/ProjectCard/ProjectCard";
function App() {
  return (
    <div className="App">
      <Intro />
      <Myway />
      {/* About me */}
      <div className="About__me">
        {/* shapes for backhround */}
        <div className="square"></div>
        <div className="circle"></div>
        <div className="xShape">
          <div className="vertical"></div>
          <div className="horizontal"></div>
        </div>
        <div className="triangle">
          <svg height="200" width="300">
            <polygon
              points="150,30 250,150 50,150"
              style={{
                fill: "transparent",
                stroke: "#3cda9b",
                strokeWidth: "15",
              }}
            />
          </svg>
        </div>

        <div className="About__me__info">
          <div className="heading__gif">
            <img
              src="https://media.giphy.com/media/l0NwC1UnHzAHfC50c/giphy.gif"
              alt="img"
            />
            <h1>
              Hi! My name <br />
              is Yash Chauhan.
            </h1>
          </div>
          <p>
            I the type of guy who is fascinated by the power of code and how
            much it is changing the shape of our existence and our reality as a
            human and how much it has boosted and will be boosting our growth.
            Only to focus on one goal, that is how to become an interstellar
            specie and eventually leaving our beautiful planet for finding one
            because there will be a time where we have to leave our home and in
            my opinion coding will be the biggest weapon in our arsenal to
            achieve that one solo goal.
          </p>
        </div>
      </div>
      <WhatIknow />
      <PorjectCard />
    </div>
  );
}

export default App;
