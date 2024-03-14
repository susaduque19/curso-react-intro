import "./CreateTodoButton.css";
import { GoPlus } from "react-icons/go";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => console.log(event.target)}
    >
      <GoPlus />
    </button>
  );
}

export { CreateTodoButton };
