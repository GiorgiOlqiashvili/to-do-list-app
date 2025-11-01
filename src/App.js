import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
  };

  const completeTodo = (index) => {
    const task = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setDoneTodos([...doneTodos, task]);
  };

  const deleteTodo = (index) => {
    setDoneTodos(doneTodos.filter((_, i) => i !== index));
  };

  const moveBackToTodo = (index) => {
    const task = doneTodos[index];
    setDoneTodos(doneTodos.filter((_, i) => i !== index));
    setTodos([...todos, task]);
  };

  return (
    <div className="App">
      <h1>📝 To-Do List</h1>
      <TodoInput onAdd={addTodo} />

      <div className="columns">
        <div className="column">
          <h2>შესასრულებელი სამუშაოები</h2>
          <TodoList
            items={todos}
            onAction={completeTodo}
            type="todo"
          />
        </div>

        <div className="column">
          <h2>შესრულებული სამუშაოები</h2>
          <TodoList
            items={doneTodos}
            onDelete={deleteTodo}
            onMoveBack={moveBackToTodo}
            type="done"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
