import "./Action.scss";

import { eventType, globalEventType } from "../../type/type";

type ActionType = {
  handleNextHour: (value: any) => void;
  event: eventType;
};

export const Action = ({ handleNextHour, event }: ActionType) => {
  const showNextTime = globalEventType?.battle !== event?.type;

  return (
    <div className="action">
      <div className="action__title">Actions</div>
      {showNextTime && (
        <button onClick={() => handleNextHour({})} className="action__button">
          Следующий час{" "}
        </button>
      )}
      {globalEventType?.battle === event?.type && (
        <button
          onClick={() => {
            handleNextHour({ eventCount: 24 });
          }}
          className="action__button"
        >
          Убежать
        </button>
      )}
    </div>
  );
};
