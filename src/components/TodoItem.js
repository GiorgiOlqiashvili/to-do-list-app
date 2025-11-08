import React, { memo } from "react";

const TodoItem = memo(({ item, onComplete, onDelete, onMoveBack, type }) => {
  console.log(`🧩 Item rendered: ${item.text}`);

  return (
    <li className="todo-item">
      <span>{item.text}</span>
      <div className="buttons">
        {type === "todo" && (
          <button onClick={() => onComplete(item.id)}>✅ დასრულება</button>
        )}
        {type === "done" && (
          <>
            <button onClick={() => onMoveBack(item.id)}>↩️ დაბრუნება</button>
            <button onClick={() => onDelete(item.id)}>❌ წაშლა</button>
          </>
        )}
      </div>
    </li>
  );
});

export default TodoItem;
