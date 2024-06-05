import { createContext, useState } from "react";

// import "./App.css";
import TodosData from "./data/todos";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState(TodosData);

  const toggleCompleted = (id) => {
    const update = todos.map((todo) => {
      if (todo.id === id) {
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

  const addTodo = (title) => {
    if (title === "") return;

    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };

    setTodos(todos.concat(newTodo));
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={style.container}>
        <h1 style={style.fontSize}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
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

export default App;
