import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de REACT", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Hacer la tarea", completed: false },
//   { text: "Usar estados derivados", completed: true },
// ];

// localStorage.setItem('datos', JSON.stringify(defaultTodos));
// localStorage.removeItem('datos')

function App() {
  const [todos, saveTodos] = useLocalStorage("datos", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // useEffect(() => {
  //   console.log("LOOOOOG 2");
  // });

  // useEffect(() => {
  //   console.log("LOOOOOG 2");
  // }, []);

  useEffect(() => {
    console.log("LOOOOOG 2");
  }, []);

  console.log("LOG 1");
  console.log("LOG 3");

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
