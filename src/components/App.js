import React from "react";
import Home from "./Home";
import "./App.css";
import Timer from "./Timer.js";
import todo_image from "./todo_image.jpg";

function App() {
  return (
    <>
      <img src={todo_image} alt="Todo Image" className="todo__image" />
      <div className="todo__app">
        <Home />
      </div>
      <Timer />
    </>
  );
}

export default App;
