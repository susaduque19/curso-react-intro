import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/createTodoButton";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../hooks/TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../components/TodoForm";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TodoSearch />
            <CreateTodoButton />
            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
          </div>
          <div className="col-md-6">
            <TodoCounter />
            <TodoList>
              {loading && (
                <>
                  <TodosLoading /> <TodosLoading /> <TodosLoading />
                </>
              )}
              {error && <TodosError />}
              {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
          </div>
        </div>
      </div>
    </>
  );
}

export { AppUI };
