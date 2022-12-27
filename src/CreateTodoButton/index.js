import React from "react";
import "./createTodoButton.css";

const onClickButton = () => {
    alert("aca deberia haber un modal")
}

function CreateTodoButton(props) {

    return (
        <div className="ButtonContainer">
        <button onClick={onClickButton} className="createTodoButton">+</button>
        </div>
    )
}
export {CreateTodoButton};