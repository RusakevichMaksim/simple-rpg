import "./WorldEventLog.scss";

import { useRecoilValue } from "recoil";

import { eventTimeAtom, timeAtom } from "../../atom";

export const WorldEventLog = () => {
  const time = useRecoilValue(timeAtom);
  const event = useRecoilValue(eventTimeAtom);

  return (
    <div className="worldEventLog">
      <div className="worldEventLog__title">Event Description {time}</div>

      <div className="worldEventLog__text">{event.title}</div>
    </div>
  );
};
