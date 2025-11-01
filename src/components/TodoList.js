import React from "react";

function TodoList({ items, onAction, onDelete, onMoveBack, type }) {
  return (
    <ul className="todo-list">
      {items.length === 0 ? (
        <p className="empty">ცარიელია</p>
      ) : (
        items.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item}</span>
            <div className="buttons">
              {type === "todo" && (
                <button onClick={() => onAction(index)}>✅ დასრულება</button>
              )}
              {type === "done" && (
                <>
                  <button onClick={() => onMoveBack(index)}>↩️ დაბრუნება</button>
                  <button onClick={() => onDelete(index)}>❌ წაშლა</button>
                </>
              )}
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;
