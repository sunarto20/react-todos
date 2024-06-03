import { useState } from "react";

const todoData = [
  {
    id: 1,
    title: "Finish Progate React Course",
    completed: false,
  },
  {
    id: 2,
    title: "Have lunch with Guru Domba",
    completed: false,
  },
  {
    id: 3,
    title: "Study React with Ninja Ken",
    completed: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(todoData);

  console.log(todos);

  return (
    <>
      <h1>My Todo List</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </>
  );
}
