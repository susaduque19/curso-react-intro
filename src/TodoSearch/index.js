import "./TodoSearch.css";
import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="p-4">
      <input
        placeholder="Cortar cebolla"
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
