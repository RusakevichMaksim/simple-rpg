import React, { useState } from "react";

export const EventDisplay = () => {
  const [time, setTime] = useState(0);
  const [event, setEvent] = useState("");

  function handleNextHour() {
    setTime(time + 1);
    // генерируем случайное событие
    const randomEvent = Math.floor(Math.random() * 3);
    switch (randomEvent) {
      case 0:
        setEvent("Вы встретили курицу");
        break;
      case 1:
        setEvent("Вы нашли золотую монету");
        break;
      case 2:
        setEvent("Вы наткнулись на группу разбойников");
        break;
      default:
        setEvent("");
    }
  }

  return (
    <div>
      <h1>День {time + 1}</h1>
      <p>{event}</p>
      <button onClick={handleNextHour}>Следующий час</button>
    </div>
  );
};
