import "./App.scss";
import "reset-css";

import React from "react";
import { RecoilRoot } from "recoil";

import { GameInterface } from "./components";

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
