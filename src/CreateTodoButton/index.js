import React from "react";
import "./createTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <div className="ButtonContainer">
      <button onClick={onClickButton} className="createTodoButton">
        +
      </button>
    </div>
  );
}
export { CreateTodoButton };
