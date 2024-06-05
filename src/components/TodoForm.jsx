/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const handleAddButton = (e) => {
    e.preventDefault();
    addTodo(title);

    setTitle("");
  };

  return (
    <div style={style.container}>
      <form onSubmit={(e) => handleAddButton(e)}>
        <input
          type="text"
          style={style.formInput}
          placeholder="Add your Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" style={style.button}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

const style = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};
