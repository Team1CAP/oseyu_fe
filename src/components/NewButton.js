// width: 100px;
// padding: 10px;
// cursor: pointer;

const NewButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["NewButton", `NewButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

NewButton.defaultProps = {
  types: "default",
};

export default NewButton;
