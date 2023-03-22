import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

import { eventTimeAtom, playerAtom, timeAtom } from "../atom/index";
import { globalEventType } from "../type/type";
import { healing } from "../utils";

export const useEventsHooks = () => {
  const [time, setTime] = useRecoilState(timeAtom);
  const [event, setEvent] = useRecoilState(eventTimeAtom);
  const [player, setPlayer] = useRecoilState(playerAtom);

  function handleNextHour() {
    healing({ unit: player, setUnit: setPlayer });

    if (time >= 23) {
      setTime(0);
    } else {
      setTime(time + 1);
    }
    const randomEvent = Math.floor(Math.random() * 23);
    switch (randomEvent) {
      case 0:
        setEvent({ title: "Вы встретили курицу", type: globalEventType.any });
        break;
      case 1:
        setEvent({
          title: "Вы нашли золотую монету",
          type: globalEventType.any,
        });
        break;
      case 2:
        setEvent({
          title: "Вы наткнулись на группу разбойников",
          type: globalEventType.any,
        });
        break;
      case 3:
        setEvent({
          title:
            "Вам повстречалась путешествующая торговка, которая предлагает редкие предметы",
          type: globalEventType.any,
        });
        break;
      case 4:
        setEvent({
          title: "Вы попали в западню и теперь вам нужно выбираться из неё.",
          type: globalEventType.any,
        });
        break;

      case 5:
        setEvent({
          title:
            "Вы наткнулись на древнюю руину, в которой можно найти ценные сокровища.",
          type: globalEventType.any,
        });
        break;
      case 6:
        setEvent({
          title: "Вы заблудились в лесу и не можете найти дорогу домой.",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 40,
              defense: 4,
              damage: 15,
              initiative: 5,
              name: "orcs",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 7:
        setEvent({
          title:
            "Вам повстречалась путешествующая цирковая труппа, которая предлагает участие в интересных выступлениях.",
          type: globalEventType.any,
        });
        break;
      case 8:
        setEvent({
          title:
            "Вы наткнулись на группу диких животных, которые напали на вас.",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 64,
              defense: 4,
              damage: 6,
              initiative: 5,
              name: "orcs",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 9:
        setEvent({
          title: "Вам предстоит пройти сложный путь через горную цепь.",
          type: globalEventType.any,
        });
        break;
      case 11:
        setEvent({
          title:
            "Вы попали в ловушку, и теперь вам нужно найти способ выбраться",
          type: globalEventType.any,
        });
        break;
      case 12:
        setEvent({
          title: "Вы наткнулись на группу разбойников",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 13:
        setEvent({
          title:
            "Вам нужно доставить важный груз в дальний город, но на пути вас поджидают опасности.",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 22,
              defense: 12,
              damage: 15,
              initiative: 22,
              name: "goblinSuper",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 14:
        setEvent({
          title:
            "Вы наткнулись на загадочный храм, в котором можно найти много золота.",
          type: globalEventType.any,
        });
        break;
      case 15:
        setEvent({
          title:
            "Вы попали в драконью пещеру и теперь вам нужно выбраться, не попавшись на глаза дракону",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 452,
              defense: 35,
              damage: 25,
              initiative: 4,
              name: "Dragon",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 16:
        setEvent({
          title:
            "Вы встретили духа, который предлагает вам выполнить задание, чтобы получить ценный приз.",
          type: globalEventType.any,
        });
        break;
      case 17:
        setEvent({
          title:
            "Вы наткнулись на огромный ледяной лабиринт, который нужно пройти, чтобы достичь цели.",
          type: globalEventType.any,
        });
        break;
      case 18:
        setEvent({
          title:
            "Вам нужно спасти заложника, которого держат в плену вражеские солдаты.",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 12,
              defense: 2,
              damage: 5,
              initiative: 12,
              name: "goblin",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 19:
        setEvent({
          title:
            "Вы забрели на запретную территорию, где вас могут арестовать или убить.",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
            {
              heals: 2,
              defense: 0,
              damage: 1,
              initiative: 3,
              name: "slime",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 20:
        setEvent({
          title:
            "Вам предстоит пройти через болото, где обитают опасные существа.",
          type: globalEventType.battle,
          enemy: [
            {
              heals: 99999,
              defense: 9999,
              damage: 99999,
              initiative: 1,
              name: "wednesday frog",
              type: "enemy",
              id: uuidv4(),
              maxHeals: 1000,
              regeneration: 0,
            },
          ],
        });
        break;
      case 21:
        setEvent({
          title: "Вы нашли подземелье, где можно найти много сокровищ.",
          type: globalEventType.battle,
        });
        break;
      case 22:
        setEvent({
          title: "Вам нужно спасти своего друга, который был захвачен в плен.",
          type: globalEventType.battle,
        });
        break;
      case 23:
        setEvent({
          title:
            "Вы наткнулись на группу путешественников, которые предлагают объединиться вместе и продолжить путешествие.",
          type: globalEventType.any,
        });
        break;
      default:
        setEvent({ title: "нечего интересного", type: globalEventType.none });
    }
  }

  return { handleNextHour, event, time };
};
