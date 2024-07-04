// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (!task || !description) {
      alert('Please fill in both fields');
      return;
    }

    const newTodo = {
      id: Date.now(),
      task,
      description,
      status: 'not completed'
    };
    setTodos([...todos, newTodo]);
    setTask('');
    setDescription('');
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div className="App">
      <div className="todo-form">
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="header">
        <h1>My Todo</h1>
        <div className="filter-container">
          <label htmlFor="status-filter">Status Filter:</label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;