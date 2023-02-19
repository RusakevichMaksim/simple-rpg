import React from "react";
import "./GameInterface.scss";
import { Character, Battle, WorldEventLog } from "..";
import { useEventsHooks } from "../../hooks";

export const GameInterface = () => {
  const { handleNextHour } = useEventsHooks();

  return (
    <div className="gameInterface">
      <div className="gameInterface__sidebar">
        <Character />
      </div>
      <div className="gameInterface__content">
        <WorldEventLog />
        <Battle />
      </div>
      <div className="gameInterface__sidebar">
        <h4>Actions</h4>
        <button onClick={() => {}}>Equip Wizard Hat</button>
        <button onClick={() => handleNextHour()}>Следующий час</button>
      </div>
    </div>
  );
};
