import { atom } from "recoil";

export const spellAtom = atom({
  key: "spellAtom",
  default: {
    Healing: {
      count: 1,
      power: 20,
    },
  },
});
