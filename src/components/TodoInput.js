import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask("");
  };

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
}

export default TodoInput;
