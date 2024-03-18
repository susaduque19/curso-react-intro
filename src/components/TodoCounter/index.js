import { useContext } from "react";
import { TodoContext } from "../../hooks/TodoContext";
import "./TodoCounter.css";
function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } =
    useContext(TodoContext);
  return completed === total ? (
    <h1>Felicidades, has completado todas las tareas!!</h1>
  ) : (
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
