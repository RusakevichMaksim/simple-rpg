import "./Action.scss";
import { eventType } from "../../type/type";
import { globalEventType } from "../../type/type";

type ActionType = {
  handleNextHour: () => void;
  event: eventType;
  setStartBattle: (value: boolean) => void;
  startBattle: boolean;
};

export const Action = ({
  handleNextHour,
  event,
  setStartBattle,
  startBattle,
}: ActionType) => {
  return (
    <div className="action">
      <div className="action__title">Actions</div>
      {event.type !== globalEventType.battle ? (
        <button onClick={() => handleNextHour()} className="action__button">
          Следующий час
        </button>
      ) : (
        <>
          {!startBattle && (
            <button
              onClick={() => setStartBattle(true)}
              className="action__button"
            >
              Битва
            </button>
          )}
        </>
      )}
    </div>
  );
};
