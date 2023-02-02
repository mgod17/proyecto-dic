import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoItem } from "../TodoItem/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoContext } from "../todoContext";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>Estamos cargando..</p>}
        {error && <p>hubo un error..</p>}
        {!loading && !searchedTodos.legth && <p>Crear tu primer todo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
