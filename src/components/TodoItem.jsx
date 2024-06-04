/* eslint-disable react/prop-types */
function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  const todoTitleStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
  };

  return (
    <div style={style.TodoItem}>
      <input
        type="checkbox"
        style={style.checkbox}
        onClick={() => toggleCompleted(todo.id)}
      />
      <p style={todoTitleStyle}>{todo.title}</p>
      <button style={style.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
}

const style = {
  TodoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    padding: "0 20px",
  },

  checkbox: {
    height: "18px",
    width: "18px",
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

export default TodoItem;
