import { TodoContext } from "../../hooks/TodoContext";
import "./TodoSearch.css";
import React, { useContext } from "react";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <div className="p-4">
      <input
        placeholder="Filtrar"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}
export { TodoSearch };
