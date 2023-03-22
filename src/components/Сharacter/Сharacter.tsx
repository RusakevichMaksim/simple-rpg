import "./Character.scss";

import { useRecoilState } from "recoil";

import { playerAtom } from "../../atom";

export const Character = () => {
  const [player] = useRecoilState(playerAtom);

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
          <div>{player.defense}</div>
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
        <div className="сharacter__settings-title">
          User Equpment (Not Active)
        </div>
        <div className="сharacter__settings-item">
          <div>Helmet</div> <div>0</div>
        </div>
        <div className="сharacter__settings-item">
          <div>Body</div>
          <div>0</div>
        </div>
        <div className="сharacter__settings-item">
          <div>hands</div>
          <div>0</div>
        </div>
        <div className="сharacter__settings-item">
          <div>leghts</div>
          <div>0</div>
        </div>
      </div>
    </div>
  );
};
