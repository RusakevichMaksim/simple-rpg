import React, { useEffect, useState } from "react";
type unutType = {
  heals: number;
  defense: number;
  demage: number;
  initiative: number;
  name: string;
  type: string;
  id: number;
};

type enemysType = unutType[];

const player = {
  heals: 100,
  defense: 2,
  demage: 10,
  initiative: 15,
  name: "player",
  type: "player",
  id: 1,
};

export const Battle = () => {
  const handleAttack = () => {};
  const [unit, setUnit] = useState([
    player,
    {
      heals: 40,
      defense: 4,
      demage: 5,
      initiative: 5,
      name: "orcs",
      type: "enemy",
      id: 2,
    },
    {
      heals: 12,
      defense: 2,
      demage: 5,
      initiative: 12,
      name: "goblin",
      type: "enemy",
      id: 3,
    },
    {
      heals: 12,
      defense: 1,
      demage: 5,
      initiative: 15,
      name: "goblin2",
      type: "enemy",
      id: 4,
    },
  ]);

  const [queue, setQueue] = useState<unutType[]>([]);

  useEffect(() => {
    console.log("aaa333");

    setQueue(queueCreate({ arr: unit }));
  }, []);

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
      setQueue(clone.slice(index, clone.length));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue]);

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
    if (attacker?.heals <= 0) return;
    const damage = attacker.demage - defender.defense;

    setUnit((prev) => {
      const new1 = prev
        .map((e) => {
          if (e.id === defenderID) {
            const newHels = e.heals - damage;
            if (newHels <= 0) return null;
            return { ...e, heals: newHels };
          }
          return e;
        })
        .filter(function (el) {
          return el != null;
        });
      console.log(new1, "new1");
      return new1 as any;
    });
  };

  const playerIndex = unit.map((e) => e.type).indexOf("player");

  return (
    <div>
      <h1>Battle</h1>
      <p>
        {unit[playerIndex].name}: {unit[playerIndex].heals} HP
      </p>
      <ul>
        {unit.map((enemy, index) => {
          if (enemy.type === "player") return <div key={index}></div>;
          return (
            <li key={index}>
              <p>
                {enemy.name}: {enemy.heals} HP
              </p>
              <button
                onClick={() => {
                  Attack({ attackerId: player.id, defenderID: enemy.id });
                }}
              >
                Attack
              </button>
            </li>
          );
        })}
      </ul>
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
