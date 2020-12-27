import React from "react";
import { ACTIONS } from "./Home";
import MaterialUIPickers from "./MaterialUIPickers.js";
import "./Todo.css";

function Todo({ todo, dispatch }) {
  return (
    <>
      <div className={todo.complete ? "todo__row complete" : "todo__row"}>
        <span className="todo__span">{todo.name}</span>
        <MaterialUIPickers />
        <button
          className="toggle__button"
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          TOGGLE
        </button>
        <button
          className="delete__button"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          DELETE
        </button>
      </div>
    </>
  );
}

export default Todo;
