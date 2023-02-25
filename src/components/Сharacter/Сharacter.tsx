import "./Character.scss";

export const Character = () => {
  return (
    <div className="сharacter">
      <div className="сharacter__userName">UserName</div>
      <div className="сharacter__settings">
        <div className="сharacter__settings-title">
          User сharacteristics (Not Active)
        </div>
        <div className="сharacter__settings-item">
          <div>strength</div>
          <div>10</div>
        </div>
        <div className="сharacter__settings-item">
          <div>agility</div>
          <div>10</div>
        </div>
        <div className="сharacter__settings-item">
          <div>intelligence</div>
          <div>10</div>
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
