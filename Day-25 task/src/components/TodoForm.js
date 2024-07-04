import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      task,
      description,
      status: 'not completed'
    });
    setTask('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Todo Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;