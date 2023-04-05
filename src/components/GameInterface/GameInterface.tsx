import "./GameInterface.scss";

import React, { useEffect, useState } from "react";

import { useEventsHooks } from "../../hooks";
import { Action, Battle, Character, WorldEventLog } from "..";

export const GameInterface = () => {
  const { handleNextHour, event, player } = useEventsHooks();
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
        {player?.heals <= 0 ? (
          <div className="d-flex">
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="mr10 flexCenter  battlle__newGame"
            >
              NEW GAME
            </button>
            <div className="battlle__gameOver"> GAME END</div>
          </div>
        ) : (
          <Action
            handleNextHour={handleNextHour}
            event={event}
            startBattle={startBattle}
            setStartBattle={setStartBattle}
          />
        )}
      </div>
    </div>
  );
};
