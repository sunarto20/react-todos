/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
function Todos({ todos }) {
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default Todos;
