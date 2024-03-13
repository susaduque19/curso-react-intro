import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de REACT", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Hacer la tarea", completed: false },
];

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TodoSearch />
            <CreateTodoButton />
          </div>
          <div className="col-md-6">
            <TodoCounter completed={16} total={25} />
            <TodoList>
              {defaultTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                />
              ))}
            </TodoList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
