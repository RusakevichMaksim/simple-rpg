import React from "react";
import "./GameInterface.scss";
import { Character, Battle } from "..";
import { useEventsHooks } from "../../hooks";

export const GameInterface = () => {
  const { handleNextHour, event, time } = useEventsHooks();

  return (
    <div className="game-interface">
      <div className="character-display">
        <Character />
      </div>

      <div className="event-description">
        <div>
          <h4>Event Description {time}</h4>
          <p>{event.title}</p>
        </div>
        <Battle />
      </div>

      <div className="actions">
        <h4>Actions</h4>
        <button className="primary" onClick={() => {}}>
          Equip Wizard Hat
        </button>

        <button className="secondary" onClick={() => handleNextHour()}>
          Следующий день
        </button>
      </div>
    </div>
  );
};
