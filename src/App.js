import React, { useState, useCallback, useMemo } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTodo = useCallback((task) => {
    if (task.trim() === "") return;
    setTodos((prev) => [...prev, { id: Date.now(), text: task }]);
  }, []);

  const completeTodo = useCallback((id) => {
    setTodos((prev) => {
      const todo = prev.find((t) => t.id === id);
      if (!todo) return prev;
      setDoneTodos((donePrev) => [...donePrev, todo]);
      return prev.filter((t) => t.id !== id);
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    setDoneTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveBackToTodo = useCallback((id) => {
    setDoneTodos((prev) => {
      const todo = prev.find((t) => t.id === id);
      if (!todo) return prev;
      setTodos((prevTodos) => [...prevTodos, todo]);
      return prev.filter((t) => t.id !== id);
    });
  }, []);

  // useMemo to avoid re-creating lists on every render
  const todoList = useMemo(() => todos, [todos]);
  const doneList = useMemo(() => doneTodos, [doneTodos]);

  console.log("🔁 App rendered");

  return (
    <div className="App">
      <h1>📝 Hook-based Optimized To-Do List</h1>
      <TodoInput onAdd={addTodo} />

      <div className="columns">
        <div className="column">
          <h2>შესასრულებელი სამუშაოები</h2>
          <TodoList
            items={todoList}
            onComplete={completeTodo}
            type="todo"
          />
        </div>

        <div className="column">
          <h2>შესრულებული სამუშაოები</h2>
          <TodoList
            items={doneList}
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
