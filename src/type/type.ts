export enum globalEventType {
  any = "any",
  battle = "battle",
  none = "none",
  endBattle = "endBattle",
}

export type unutType = {
  heals: number;
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
  enemy?: unutType[];
};
