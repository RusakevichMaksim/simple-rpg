import "./GameInterface.scss";

import React, { useEffect, useState } from "react";

import { useEventsHooks } from "../../hooks";
import { Action, Battle, Character, WorldEventLog } from "..";

export const GameInterface = () => {
  const { handleNextHour, event } = useEventsHooks();
  const [startBattle, setStartBattle] = useState(false);
  useEffect(() => {
    setStartBattle(false);
  }, [event]);

  return (
    <div className="gameInterface">
      <div className="gameInterface__sidebar">
        <Character />
      </div>
      <div className="gameInterface__content">
        {startBattle ? <Battle /> : <WorldEventLog />}
      </div>
      <div className="gameInterface__sidebar">
        <Action
          handleNextHour={handleNextHour}
          event={event}
          startBattle={startBattle}
          setStartBattle={setStartBattle}
        />
      </div>
    </div>
  );
};
