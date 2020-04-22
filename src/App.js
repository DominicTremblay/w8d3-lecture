import React, { useState } from 'react';
import './App.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import todosArr from './todos';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState(todosArr);

  // setTodos
  const addTodo = (content) => {
    return axios({
      url: '/api/todos',
      method: 'POST',
      data: { task: content },
    }).then((result) => setTodos((prev) => [...prev, result.data]));
  };

  const deleteTodo = (id) => {
    // update my state and remove the todo that has this id

    return axios({
      url: `/api/todos/${id}`,
      method: 'DELETE',
    }).then((result) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <div className='App container'>
      <h1>Simple todo</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
