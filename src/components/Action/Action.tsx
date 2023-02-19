import "./Action.scss";
import { eventType } from "../../type/type";
import { globalEventType } from "../../type/enum";

type ActionType = {
  handleNextHour: () => void;
  event: eventType;
};

export const Action = ({ handleNextHour, event }: ActionType) => {
  return (
    <div className="action">
      <div className="action__title">Actions</div>
      {event.type !== globalEventType.battle && (
        <button onClick={() => handleNextHour()} className="action__button">
          Следующий час
        </button>
      )}
    </div>
  );
};
