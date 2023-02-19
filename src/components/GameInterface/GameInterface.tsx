import React from "react";
import "./GameInterface.scss";
import { Character, Battle, WorldEventLog, Action } from "..";
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
        {/* <Battle /> */}
      </div>
      <div className="gameInterface__sidebar">
        <Action handleNextHour={handleNextHour} />
      </div>
    </div>
  );
};
