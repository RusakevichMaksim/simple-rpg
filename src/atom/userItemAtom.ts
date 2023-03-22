import { atom } from "recoil";

export const userItemAtom = atom({
  key: "userItemAtom",
  default: {
    helmet: 1,
    body: 1,
    hands: 1,
    lights: 1,
  },
});
