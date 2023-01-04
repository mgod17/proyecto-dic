// import './App.css';
import React from "react";
import { AppUI } from "./appUI";
import { TodoProvider } from "../todoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
