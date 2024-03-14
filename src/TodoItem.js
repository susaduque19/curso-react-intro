import "./TodoItem.css";
import { GiCancel } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <GiCheckMark />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <GiCancel />
      </span>
    </li>
  );
}
export { TodoItem };
