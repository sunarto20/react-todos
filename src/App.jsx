import { useState } from "react";
import Todos from "./components/Todos";

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

  const toggleCompleted = (id) => {
    const update = todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(update);
  };

  const deleteTodo = (id) => {
    const update = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(update);
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>My Todo List</h1>
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

const style = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};
