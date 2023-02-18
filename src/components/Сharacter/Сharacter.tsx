import "./Character.scss";

export const Character = () => {
  return (
    <div className="game-interface">
      <div className="game-interface__header"></div>
      <div className="game-interface__body">
        <div className="character">
          <div className="character__stats">
            <div>Health: 100</div>
            <div>Attack: 10</div>
            <div>Defense: 5</div>
          </div>
        </div>
        <div className="game-interface__text-area">
          <p>Welcome to the game!</p>
        </div>
        <div className="game-interface__action-area">
          <button>Attack</button>
          <button>Defend</button>
          <button>Item</button>
        </div>
      </div>
    </div>
  );
};
