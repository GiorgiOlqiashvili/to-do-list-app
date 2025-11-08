import React, { memo } from "react";
import TodoItem from "./TodoItem";

const TodoList = memo(({ items, onComplete, onDelete, onMoveBack, type }) => {
  console.log(`📋 ${type} list rendered`);

  if (!items.length) return <p className="empty">ცარიელია</p>;

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
          onMoveBack={onMoveBack}
          type={type}
        />
      ))}
    </ul>
  );
});

export default TodoList;

