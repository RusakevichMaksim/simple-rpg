import { atom } from "recoil";

export const eventTimeAtom = atom({
  key: "eventTimeAtom", // unique ID (with respect to other atoms/selectors)
  default: { title: "" }, // default value (aka initial value)
});
