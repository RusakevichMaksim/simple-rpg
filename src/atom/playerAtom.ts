import { atom } from "recoil";

import { unitType } from "../type/type";

export const playerAtom = atom<unitType>({
  key: "playerAtom",
  default: {
    heals: 100,
    maxHeals: 100,
    defense: 2,
    damage: 10,
    initiative: 15,
    regeneration: 2,
    name: "player",
    type: "player",
    id: "1",
  },
});
