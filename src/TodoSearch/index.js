import React from "react";
import { TodoContext } from "../todoContext";
import "./todoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueOnChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      onChange={onSearchValueOnChange}
      className="todoSearch"
      placeholder="Buscar tarea.."
      value={searchValue}
    />
  );
}
export { TodoSearch };
