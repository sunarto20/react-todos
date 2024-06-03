/* eslint-disable react/prop-types */
function TodoItem({ todo }) {
  return (
    <div style={style.TodoItem}>
      <p>{todo.title}</p>
    </div>
  );
}

const style = {
  TodoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
  },
};

export default TodoItem;
