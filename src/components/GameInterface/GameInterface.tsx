import React, { useState } from "react";
import "./GameInterface.scss";
import { Character } from "..";
import { useEventsHooks } from "../../hooks";

export const GameInterface = () => {
  const [eventDescription, setEventDescription] = useState(
    "Welcome to the game!"
  );

  enum characterEquipmentEnum {
    hat = "hat",
    shirt = "shirt",
    pants = "pants",
    shoes = "shoes",
  }

  const [characterEquipment, setCharacterEquipment] = useState({
    hat: null,
    shirt: null,
    pants: null,
    shoes: null,
  });

  const handleEquipItem = (
    itemType: characterEquipmentEnum,
    itemName: string
  ) => {
    setCharacterEquipment((prevState) => ({
      ...prevState,
      [itemType]: itemName,
    }));
    setEventDescription(`Equipped ${itemName} as your new ${itemType}.`);
  };

  const handleUnequipItem = (itemType: characterEquipmentEnum) => {
    const itemName: any = characterEquipment[itemType];
    setCharacterEquipment((prevState) => ({
      ...prevState,
      [itemType]: null,
    }));
    setEventDescription(`Unequipped ${itemName} from your ${itemType}.`);
  };
  const { handleNextHour, event, time } = useEventsHooks();

  return (
    <div className="game-interface">
      <div className="character-display">
        <Character />
      </div>

      <div className="event-description">
        <h4>Event Description {time}</h4>
        <p>{event.title}</p>
      </div>

      <div className="actions">
        <h4>Actions</h4>
        <button
          className="primary"
          onClick={() =>
            handleEquipItem(characterEquipmentEnum.hat, "Wizard Hat")
          }
        >
          Equip Wizard Hat
        </button>

        <button className="secondary" onClick={() => handleNextHour()}>
          Следующий день
        </button>
      </div>
    </div>
  );
};
