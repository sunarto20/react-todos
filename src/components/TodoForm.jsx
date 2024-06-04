import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div style={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={style.formInput}
          onChange={(e) => handleChangeTitle(e)}
          value={title}
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
