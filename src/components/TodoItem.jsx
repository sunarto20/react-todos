/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TodoContext } from "../App";

export default function TodoItem({ todo }) {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const todoStyle = {
    textDecoration: todo.completed === true ? "line-through" : "none",
  };

  return (
    <div style={style.todoItem}>
      <input
        type="checkbox"
        style={style.checkbox}
        onClick={() => toggleCompleted(todo.id)}
      />
      <p style={todoStyle}>{todo.title}</p>
      <button style={style.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
}

const style = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },

  checkbox: {
    height: "18px",
    width: "18px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};
