/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
function Todos({ todos }) {
  return (
    <div style={style.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

const style = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
