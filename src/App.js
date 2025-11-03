import React, { useState, useCallback } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTodo = useCallback((task) => {
    if (task.trim() === "") return;
    setTodos((prev) => [...prev, task]);
  }, []);

  const completeTodo = useCallback((index) => {
    setTodos((prevTodos) => {
      const task = prevTodos[index];
      const newTodos = prevTodos.filter((_, i) => i !== index);
      setDoneTodos((prevDone) => [...prevDone, task]);
      return newTodos;
    });
  }, []);

  const deleteTodo = useCallback((index) => {
    setDoneTodos((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const moveBackToTodo = useCallback((index) => {
    setDoneTodos((prevDone) => {
      const task = prevDone[index];
      const newDone = prevDone.filter((_, i) => i !== index);
      setTodos((prevTodos) => [...prevTodos, task]);
      return newDone;
    });
  }, []);

  console.log("🔁 App re-rendered");

  return (
    <div className="App">
      <h1>📝 Optimized To-Do List</h1>
      <TodoInput onAdd={addTodo} />

      <div className="columns">
        <div className="column">
          <h2>შესასრულებელი სამუშაოები</h2>
          <TodoList items={todos} onAction={completeTodo} type="todo" />
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
