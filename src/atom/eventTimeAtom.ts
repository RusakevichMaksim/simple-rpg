import { atom } from "recoil";
import { globalEventType } from "../type/enum";
import { eventType } from "../type/type";

export const eventTimeAtom = atom<eventType>({
  key: "eventTimeAtom", // unique ID (with respect to other atoms/selectors)
  default: { title: "", type: globalEventType.any }, // default value (aka initial value)
});
