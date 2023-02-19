import React from "react";
import "./GameInterface.scss";
import { Character, Battle, WorldEventLog, Action } from "..";
import { useEventsHooks } from "../../hooks";
import { globalEventType } from "../../type/enum";

export const GameInterface = () => {
  const { handleNextHour, event } = useEventsHooks();

  return (
    <div className="gameInterface">
      <div className="gameInterface__sidebar">
        <Character />
      </div>
      <div className="gameInterface__content">
        {event.type === globalEventType.battle ? <Battle /> : <WorldEventLog />}

        {/*  */}
      </div>
      <div className="gameInterface__sidebar">
        <Action handleNextHour={handleNextHour} event={event} />
      </div>
    </div>
  );
};
