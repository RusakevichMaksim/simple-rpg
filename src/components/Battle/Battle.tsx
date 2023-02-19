import React, { useEffect, useState } from "react";
type unutType = {
  heals: number;
  defense: number;
  damage: number;
  initiative: number;
  name: string;
  type: string;
  id: number;
};

type enemysType = unutType[];

const player = {
  heals: 100,
  defense: 2,
  damage: 10,
  initiative: 15,
  name: "player",
  type: "player",
  id: 1,
};

type logsType = {
  attacker: unutType;
  defender: unutType;
  damage: number;
  newHP: number;
  oldHP: number;
  dead: boolean;
};

export const Battle = () => {
  const [logs, setLogs] = useState<Array<logsType | null | undefined>>([]);
  const [move, setMove] = useState(1);

  const [unit, setUnit] = useState([
    player,
    {
      heals: 40,
      defense: 4,
      damage: 5,
      initiative: 5,
      name: "orcs",
      type: "enemy",
      id: 2,
    },
    {
      heals: 12,
      defense: 2,
      damage: 5,
      initiative: 12,
      name: "goblin",
      type: "enemy",
      id: 3,
    },
    {
      heals: 12,
      defense: 1,
      damage: 5,
      initiative: 15,
      name: "goblin2",
      type: "enemy",
      id: 4,
    },
  ]);

  const [queue, setQueue] = useState<unutType[]>([]);

  useEffect(() => {
    if (queue.length === 0) {
      setQueue(queueCreate({ arr: unit }));
    }
  }, [move]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue]);

  const updateQueue = (clone: unutType[], index: number) => {
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
    attackerId: number;
    defenderID: number;
  }) => {
    const attackerIndex = unit.map((e) => e.id).indexOf(attackerId);
    const attacker = unit[attackerIndex];
    const defenderIndex = unit.map((e) => e.id).indexOf(defenderID);
    const defender = unit[defenderIndex];
    if (attacker?.heals <= 0 || defender?.heals <= 0 || !attacker || !defender)
      return;
    const damage = attacker.damage - defender.defense;

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

  const playerIndex = unit.map((e) => e.type).indexOf("player");

  return (
    <div>
      <h1>Battle</h1>
      <h2>Ход {move}</h2>
      <p>
        {unit[playerIndex].name}: {unit[playerIndex].heals} HP
      </p>
      <ul>
        {unit.map((enemy, index) => {
          if (enemy.type === "player" || enemy.heals <= 0)
            return <div key={`${index}`}></div>;
          return (
            <div key={`${index}`}>
              <li>
                <p>
                  {enemy.name}: {enemy.heals} HP
                </p>
                <button
                  onClick={() => {
                    Attack({ attackerId: player.id, defenderID: enemy.id });
                    const clone = JSON.parse(JSON.stringify(queue));
                    updateQueue(clone, 1);
                  }}
                >
                  Attack
                </button>
              </li>
            </div>
          );
        })}
      </ul>
      <div>
        {logs?.map((e, index) => {
          return (
            <div key={index}>
              <div>
                {e?.attacker.name} атакует {e?.defender.name}
              </div>
              <div>{`${e?.oldHP}|${e?.newHP}`}</div>
              {e?.dead && <div key={index}>{e?.defender.name} мертв</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const queueCreate = ({ arr }: { arr: unutType[] }) => {
  const newArr: unutType[] = JSON.parse(
    JSON.stringify(arr?.sort((a, b) => (a.initiative < b.initiative ? 1 : -1)))
  );
  const maxInitiative = Math.max(...newArr.map((obj) => obj.initiative));
  const minInitiative = Math.min(...newArr.map((obj) => obj.initiative));
  const queue: unutType[] = [];

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
