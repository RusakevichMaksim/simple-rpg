import { useState } from "react";

export const useEventsHooks = () => {
  const [time, setTime] = useState(0);
  const [event, setEvent] = useState({ title: "" });

  function handleNextHour() {
    if (time >= 23) {
      setTime(0);
    } else {
      setTime(time + 1);
    }
    const randomEvent = Math.floor(Math.random() * 23);
    switch (randomEvent) {
      case 0:
        setEvent({ title: "Вы встретили курицу" });
        break;
      case 1:
        setEvent({ title: "Вы нашли золотую монету" });
        break;
      case 2:
        setEvent({ title: "Вы наткнулись на группу разбойников" });
        break;
      case 3:
        setEvent({
          title:
            "Вам повстречалась путешествующая торговка, которая предлагает редкие предметы",
        });
        break;
      case 4:
        setEvent({
          title: "Вы попали в западню и теперь вам нужно выбираться из неё.",
        });
        break;

      case 5:
        setEvent({
          title:
            "Вы наткнулись на древнюю руину, в которой можно найти ценные сокровища.",
        });
        break;
      case 6:
        setEvent({
          title: "Вы заблудились в лесу и не можете найти дорогу домой.",
        });
        break;
      case 7:
        setEvent({
          title:
            "Вам повстречалась путешествующая цирковая труппа, которая предлагает участие в интересных выступлениях.",
        });
        break;
      case 8:
        setEvent({
          title:
            "Вы наткнулись на группу диких животных, которые напали на вас.",
        });
        break;
      case 9:
        setEvent({
          title: "Вам предстоит пройти сложный путь через горную цепь.",
        });
        break;
      case 11:
        setEvent({
          title:
            "Вы попали в ловушку, и теперь вам нужно найти способ выбраться",
        });
        break;
      case 12:
        setEvent({ title: "Вы наткнулись на группу разбойников" });
        break;
      case 13:
        setEvent({
          title:
            "Вам нужно доставить важный груз в дальний город, но на пути вас поджидают опасности.",
        });
        break;
      case 14:
        setEvent({
          title:
            "Вы наткнулись на загадочный храм, в котором можно найти много золота.",
        });
        break;
      case 15:
        setEvent({
          title:
            "Вы попали в драконью пещеру и теперь вам нужно выбраться, не попавшись на глаза дракону",
        });
        break;
      case 16:
        setEvent({
          title:
            "Вы встретили духа, который предлагает вам выполнить задание, чтобы получить ценный приз.",
        });
        break;
      case 17:
        setEvent({
          title:
            "Вы наткнулись на огромный ледяной лабиринт, который нужно пройти, чтобы достичь цели.",
        });
        break;
      case 18:
        setEvent({
          title:
            "Вам нужно спасти заложника, которого держат в плену вражеские солдаты.",
        });
        break;
      case 19:
        setEvent({
          title:
            "Вы забрели на запретную территорию, где вас могут арестовать или убить.",
        });
        break;
      case 20:
        setEvent({
          title:
            "Вам предстоит пройти через болото, где обитают опасные существа.",
        });
        break;
      case 21:
        setEvent({
          title: "Вы нашли подземелье, где можно найти много сокровищ.",
        });
        break;
      case 22:
        setEvent({
          title: "Вам нужно спасти своего друга, который был захвачен в плен.",
        });
        break;
      case 23:
        setEvent({
          title:
            "Вы наткнулись на группу путешественников, которые предлагают объединиться вместе и продолжить путешествие.",
        });
        break;
      default:
        setEvent({ title: "..." });
    }
  }

  return { handleNextHour, event, time };
};
