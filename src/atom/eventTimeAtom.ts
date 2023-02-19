import { atom } from "recoil";
import { globalEventType } from "../type/enum";

export const eventTimeAtom = atom({
  key: "eventTimeAtom", // unique ID (with respect to other atoms/selectors)
  default: { title: "", type: globalEventType.any }, // default value (aka initial value)
});
