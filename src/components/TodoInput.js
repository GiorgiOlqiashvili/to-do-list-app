import React, { useState, memo } from "react";

const TodoInput = memo(({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  console.log("🎯 TodoInput rendered");

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="შეიყვანე ახალი დავალება..."
      />
      <button type="submit">➕ დამატება</button>
    </form>
  );
});

export default TodoInput;
