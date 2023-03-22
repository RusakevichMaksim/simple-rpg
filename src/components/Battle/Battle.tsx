import "./Battle.scss";

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { eventTimeAtom, playerAtom } from "../../atom";
import { globalEventType, unitType } from "../../type/type";

type logsType = {
  attacker: unitType;
  defender: unitType;
  damage: number;
  newHP: number;
  oldHP: number;
  dead: boolean;
};

export const Battle = () => {
  const [logs, setLogs] = useState<Array<logsType | null | undefined>>([]);
  const [move, setMove] = useState(1);
  const [event, setEvent] = useRecoilState(eventTimeAtom);
  const [player, setPlayer] = useRecoilState(playerAtom);

  const enTemp = event?.enemy ? event?.enemy : [];
  const [unit, setUnit] = useState([player, ...enTemp]);

  const [queue, setQueue] = useState<unitType[]>([]);

  const playerIndex = unit.map((e) => e.type).indexOf("player");
  const playerItem = unit[playerIndex];

  const battleEndSucess = unit.length === 1 && playerItem?.heals > 0;

  useEffect(() => {
    if (queue.length === 0) {
      setQueue(queueCreate({ arr: unit }));
    }
  }, [move]);

  useEffect(() => {
    if (battleEndSucess) {
      setPlayer(playerItem);
    }
  }, [unit.length]);

  useEffect(() => {
    const clone = JSON.parse(JSON.stringify(queue));
    let index = 0;
    for (let i = 0; i < queue.length; i++) {
      if (clone[i]?.type === "player") {
        index = i;
        break;
      } else {
        Attack({ attackerId: clone[i]?.id, defenderID: player.id });
      }
    }
    if (index > 0) {
      updateQueue(clone, index);
    }
  }, [queue]);

  const updateQueue = (clone: unitType[], index: number) => {
    const newQueue = clone.slice(index, clone.length);
    setQueue(newQueue);
    if (newQueue.length === 0) {
      setMove(move + 1);
    }
  };

  const Attack = ({
    attackerId,
    defenderID,
  }: {
    attackerId: string;
    defenderID: string;
  }) => {
    const attackerIndex = unit.map((e) => e.id).indexOf(attackerId);
    const attacker = unit[attackerIndex];
    const defenderIndex = unit.map((e) => e.id).indexOf(defenderID);
    const defender = unit[defenderIndex];
    if (attacker?.heals <= 0 || defender?.heals <= 0 || !attacker || !defender)
      return;
    const damage = Math.max(attacker.damage - defender.defense, 0);

    setUnit((prev) => {
      const new1 = prev
        .map((e) => {
          if (e.id === defenderID) {
            const newHels = e.heals - damage;

            setLogs((prev) => {
              return [
                ...prev,
                {
                  attacker: attacker,
                  defender: defender,
                  damage: damage,
                  newHP: newHels,
                  oldHP: e.heals,
                  dead: newHels <= 0 ? true : false,
                },
              ];
            });
            if (newHels <= 0) return null;

            return { ...e, heals: newHels };
          }
          return e;
        })
        .filter(function (el) {
          return el != null;
        });
      return new1 as any;
    });
  };

  return (
    <div className="battlle">
      <div className="battlle__title">Battle</div>
      <div className="battlle__title2">Ход {move}</div>

      {playerItem?.heals <= 0 || !playerItem ? (
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
        <div className="battlle__text">
          {playerItem.name}: {playerItem.heals} HP
        </div>
      )}
      {battleEndSucess && (
        <div
          onClick={() => {
            console.log("new game");
          }}
          className="battlle__endFight"
        >
          <button
            onClick={() => {
              console.log("new game");
              setEvent({
                title: "конец битвы",
                type: globalEventType.endBattle,
              });
            }}
            className="mt10"
          >
            End fight
          </button>
        </div>
      )}
      <div className="battlle__text">
        {unit.map((enemy, index) => {
          if (enemy.type === "player" || enemy.heals <= 0)
            return <div key={`${index}`}></div>;
          return (
            <div key={`${index}`}>
              <div className="battlle__enemy-wrapper">
                <div>
                  {enemy.name}: {enemy.heals} HP
                </div>
                <button
                  onClick={() => {
                    Attack({ attackerId: player.id, defenderID: enemy.id });
                    const clone = JSON.parse(JSON.stringify(queue));
                    updateQueue(clone, 1);
                  }}
                >
                  Attack
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="battlle__log-wrapper">
        {logs?.map((e, index) => {
          return (
            <div key={index} className="battlle__log-item">
              <div>
                {e?.attacker.name} атакует {e?.defender.name}
              </div>
              <div className="ml5">{`${e?.oldHP} | ${e?.newHP}`}</div>
              {e?.dead && (
                <div key={index} style={{ color: "red" }} className="ml5">
                  {e?.defender.name} мертв
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const queueCreate = ({ arr }: { arr: unitType[] }) => {
  const newArr: unitType[] = JSON.parse(
    JSON.stringify(arr?.sort((a, b) => (a.initiative < b.initiative ? 1 : -1)))
  );
  const maxInitiative = Math.max(...newArr.map((obj) => obj.initiative));
  const minInitiative = Math.min(...newArr.map((obj) => obj.initiative));
  const queue: unitType[] = [];

  for (let i = 0; i < Math.floor(maxInitiative / minInitiative); i++) {
    newArr.map((e) => {
      if (e.initiative - minInitiative * i >= minInitiative) {
        queue.push(e);
      }
      return e;
    });
  }
  return queue;
};
