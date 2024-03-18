import { useContext } from "react";
import "./CreateTodoButton.css";
import { GoPlus } from "react-icons/go";
import { TodoContext } from "../../hooks/TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal((state) => !state)}
    >
      <GoPlus />
    </button>
  );
}

export { CreateTodoButton };
