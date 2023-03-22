import { unitType } from "../type/type";

export const healing = ({
  unit,
  setUnit,
}: {
  unit: unitType;
  setUnit: (value: unitType) => void;
}) => {
  if (unit.heals < unit?.maxHeals) {
    setUnit({ ...unit, heals: unit.heals + unit.regeneration });
  }
};
