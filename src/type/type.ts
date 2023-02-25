import { globalEventType } from "./enum";

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
