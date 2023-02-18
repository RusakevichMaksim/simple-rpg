import React from "react";
import "./App.scss";
import { GameInterface } from "./components";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GameInterface />
      </RecoilRoot>
    </div>
  );
}

export default App;
