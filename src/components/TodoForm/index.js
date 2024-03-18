import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../hooks/TodoContext";

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Escribe la tarea..."
        />
      </div>
      <div className="row justify-content-around">
        <div className="col-4">
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            Cancelar
          </button>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-success">
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
