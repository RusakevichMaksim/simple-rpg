export enum globalEventType {
  any = "any",
  battle = "battle",
  none = "none",
  endBattle = "endBattle",
}

export type unitType = {
  heals: number;
  maxHeals: number;
  regeneration: number;
  defense: number;
  damage: number;
  initiative: number;
  name: string;
  type: string;
  id: string;
};

export type eventType = {
  title: string;
  type: globalEventType;
  enemy?: unitType[];
};

export enum EnemyType {
  SLIME = "slime",
  GOBLIN = "goblin",
  ORC = "orc",
  DRAGON = "dragon",
}
