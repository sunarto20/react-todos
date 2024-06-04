/* eslint-disable react/prop-types */
function TodoItem({ todo, toggleCompleted }) {
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
    </div>
  );
}

const style = {
  TodoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
};

export default TodoItem;
