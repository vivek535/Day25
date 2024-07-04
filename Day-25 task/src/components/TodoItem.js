import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo({
      ...todo,
      task,
      description,
      status
    });
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    setStatus(updatedStatus);
    updateTodo({
      ...todo,
      status: updatedStatus
    });
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input value={task} onChange={(e) => setTask(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>Task: {todo.task}</h3>
          <p>Description: {todo.description}</p>
          <p>Status:
            <select
              value={status}
              onChange={handleStatusChange}
              className={status === "completed" ? "completed" : "not-completed"}
            >
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </p>
          <div className="actions">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;