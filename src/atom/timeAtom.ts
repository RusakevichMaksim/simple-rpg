import { atom } from "recoil";

export const timeAtom = atom({
  key: "timeAtom", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
