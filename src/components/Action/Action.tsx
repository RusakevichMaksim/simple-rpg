import "./Action.scss";

type ActionType = {
  handleNextHour: () => void;
};

export const Action = ({ handleNextHour }: ActionType) => {
  return (
    <div className="action">
      <div className="action__title">Actions</div>
      <button onClick={() => handleNextHour()} className="action__button">
        Следующий час
      </button>
    </div>
  );
};
