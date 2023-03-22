import { v4 as uuidv4 } from "uuid";

import { EnemyType } from "../type/type";

interface EnemyStats {
  maxHeals: number;
  defense: number;
  damage: number;
  initiative: number;
}

interface EnemyParams {
  enemyType: EnemyType;
}

interface EnemyTypeWithStats extends EnemyStats {
  type: string;
  id: string;
  enemyType: EnemyType;
  name: string;
  maxHeals: number;
  heals: number;
  regeneration: number;
}

export const createEnemy = ({ enemyType }: EnemyParams) => {
  const { maxHeals, defense, damage, initiative } = getStats(enemyType);

  const name = getRandomName(enemyType);
  const type = "enemy";
  const id = uuidv4();
  const maxHealsValue = getRandomValue(maxHeals);
  const defenseValue = getRandomValue(defense);
  const damageValue = getRandomValue(damage);
  const initiativeValue = getRandomValue(initiative);
  const heals = maxHealsValue;
  const regeneration = getRandomValue(5);

  const enemy: EnemyTypeWithStats = {
    type,
    id,
    enemyType,
    name,
    maxHeals: maxHealsValue,
    heals,
    regeneration,
    defense: defenseValue,
    damage: damageValue,
    initiative: initiativeValue,
  };

  return enemy;
};

const getStats = (enemyType: EnemyType): EnemyTypeWithStats => {
  switch (enemyType) {
    case EnemyType.SLIME:
      return {
        type: "enemy",
        id: uuidv4(),
        enemyType,
        name: "Slime",
        maxHeals: 10,
        heals: 10,
        regeneration: 1,
        defense: 1,
        damage: 3,
        initiative: 5,
      };
    case EnemyType.GOBLIN:
      return {
        type: "enemy",
        id: uuidv4(),
        enemyType,
        name: "Goblin",
        maxHeals: 20,
        heals: 20,
        regeneration: 2,
        defense: 2,
        damage: 16,
        initiative: 8,
      };
    case EnemyType.ORC:
      return {
        type: "enemy",
        id: uuidv4(),
        enemyType,
        name: "Orc",
        maxHeals: 30,
        heals: 30,
        regeneration: 3,
        defense: 3,
        damage: 20,
        initiative: 12,
      };
    case EnemyType.DRAGON:
      return {
        type: "enemy",
        id: uuidv4(),
        enemyType,
        name: "Droagon",
        maxHeals: 300,
        heals: 300,
        regeneration: 25,
        defense: 30,
        damage: 50,
        initiative: 30,
      };
    default:
      throw new Error(`Unknown enemy type: ${enemyType}`);
  }
};

const getRandomValue = (value: number): number => {
  const deviation = Math.floor(Math.random() * 3) - 1; // отклонение от значения на 1
  return Math.max(1, value + deviation); // минимальное значение - 1
};

const getRandomName = (enemyType: EnemyType): string => {
  const adjectives = ["angry", "fierce", "smelly", "hairy", "savage"];
  const nouns = {
    [EnemyType.SLIME]: ["slime", "ooze", "goo"],
    [EnemyType.GOBLIN]: ["goblin", "hobgoblin", "bugbear"],
    [EnemyType.ORC]: ["orc", "troll", "ogre"],
    [EnemyType.DRAGON]: ["Smile", "Sweet", "Orange"],
  }[enemyType];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${enemyType} ${randomAdjective} ${randomNoun}`;
};
