import React, { useEffect, useState } from "react";
import { queueCreate } from "../../utils/queueCreate";
type unutType = {
  heals: number;
  defense: number;
  demage: number;
  initiative: number;
  name: string;
  type: string;
};

type enemysType = unutType[];

export const Battle = () => {
  const handleAttack = () => {};
  const [player, setPlayer] = useState({
    heals: 30,
    defense: 2,
    demage: 10,
    initiative: 10,
    name: "player",
    type: "player",
  });

  const [enemys, setEnemy] = useState<enemysType>([
    {
      heals: 40,
      defense: 4,
      demage: 5,
      initiative: 5,
      name: "orcs",
      type: "enemy",
    },
    {
      heals: 12,
      defense: 2,
      demage: 5,
      initiative: 12,
      name: "goblin",
      type: "enemy",
    },
    {
      heals: 12,
      defense: 1,
      demage: 5,
      initiative: 15,
      name: "goblin",
      type: "enemy",
    },
  ]);

  const [queue, setQueue] = useState<unutType[]>([]);

  useEffect(() => {
    const allUnit = [...enemys, player];
    setQueue(queueCreate({ arr: allUnit }));
  }, []);

  useEffect(() => {
    const clone = JSON.parse(JSON.stringify(queue));
    for (let i = 0; i < queue.length; i++) {
      console.log(clone[i]?.type);
      if (clone[i]?.type === "player") break;
      clone.shift();
    }
    console.log(queue, clone, "clone");
  }, [queue]);

  return (
    <div>
      <h1>Battle</h1>
      <p>
        {player.name}: {player.heals} HP
      </p>
      <ul>
        {enemys.map((enemy, index) => (
          <li key={index}>
            <p>
              {enemy.name}: {enemy.heals} HP
            </p>
            <button onClick={() => handleAttack()}>Attack</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
