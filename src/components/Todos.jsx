/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function Todos({ todos }) {
  return (
    <div style={style}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

const style = {
  width: "40%",
  margin: "0 auto",
};
