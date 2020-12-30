import React, { useState, useReducer } from "react";
import Todo from "./Todo.js";
import "./Home.css";
import "./Timer.css";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

function Home() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        name: name,
      },
    });
    setName("");
  }

  return (
    <>
      <div>
        <h1 className="todo__header"> 3V TODO APP </h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add a todo"
            className="todo__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <h2 className="todo__list">What's the Plan for Today?</h2>
        <hr />
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
        <h3 className="copyright__info">&#169; 3V 2020, All Rights Reserved</h3>
      </div>
    </>
  );
}

export default Home;
