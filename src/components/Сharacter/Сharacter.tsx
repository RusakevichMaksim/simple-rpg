import "./Character.scss";

import { useRecoilState } from "recoil";

import { playerAtom, userItemAtom } from "../../atom";

export const Character = () => {
  const [player] = useRecoilState(playerAtom);
  const [item] = useRecoilState(userItemAtom);
  const [userItem] = useRecoilState(userItemAtom);

  return (
    <div className="сharacter">
      <div className="сharacter__userName">{player.name}</div>
      <div className="сharacter__settings">
        <div className="сharacter__settings-title">User сharacteristics</div>
        <div className="сharacter__settings-item">
          <div>Heals</div>
          <div>{player.heals}</div>
        </div>
        <div className="сharacter__settings-item">
          <div>Defense</div>
          <div>
            {player.defense}+
            {Object.values(userItem).reduce((acc, curr) => acc + curr, 0)}
          </div>
        </div>
        <div className="сharacter__settings-item">
          <div>Damage</div>
          <div>{player.damage}</div>
        </div>
        <div className="сharacter__settings-item">
          <div>Initiative</div>
          <div>{player.initiative}</div>
        </div>
      </div>
      <div className="сharacter__settings">
        <div className="сharacter__settings-title">User Equpment + def</div>
        <div className="сharacter__settings-item">
          <div>Helmet</div> <div>{item.helmet} def</div>
        </div>
        <div className="сharacter__settings-item">
          <div>Body</div>
          <div>{item.body} def</div>
        </div>
        <div className="сharacter__settings-item">
          <div>hands</div>
          <div>{item.hands} def</div>
        </div>
        <div className="сharacter__settings-item">
          <div>lights</div>
          <div>{item.lights} def</div>
        </div>
      </div>
      <div className="сharacter__settings">
        <div className="сharacter__settings-title">User Spell</div>
        <div className="сharacter__settings-item">
          <div>Healing</div> <div>{item.helmet} count</div>
        </div>
      </div>
    </div>
  );
};
