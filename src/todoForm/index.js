import React from "react";
import { TodoContext } from "../todoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false)  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODOs</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="limpiar las ventanas"
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-Button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-Button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
