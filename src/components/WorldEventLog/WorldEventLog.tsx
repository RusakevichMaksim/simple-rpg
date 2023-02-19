import "./WorldEventLog.scss";
import { useRecoilValue } from "recoil";
import { timeAtom, eventTimeAtom } from "../../atom";

export const WorldEventLog = () => {
  const time = useRecoilValue(timeAtom);
  const event = useRecoilValue(eventTimeAtom);

  return (
    <div className="worldEventLog">
      <div>
        <h4>Event Description {time}</h4>
        <p>{event.title}</p>
      </div>
    </div>
  );
};
