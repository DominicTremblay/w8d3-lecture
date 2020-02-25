import React, { useState } from 'react';
import './App.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Walk the Dog',
      completed: false,
    },
    {
      id: 2,
      task: 'Go for a run',
      completed: false,
    },
  ]);

  const addTodo = task => {
    // create a new todo

    // this is now provided by the (stubbed) backend

    // const newTodo = {
    //   id: Math.random()
    //     .toString(36)
    //     .substr(0, 8),
    //   task,
    //   completed: false,
    // };

    axios({
      url: '/api/todos',
      method: 'POST',
      data: { task },
    })
      .then(result => {
        // update the state
        console.log('RESULT', result.data);
        setTodos([...todos, result.data]);
      })
      .catch(err => console.log('Error sending request'));
  };

  const removeTodo = id => {
    // removing a todo from the state

    axios({
      url: `/api/todos/${id}`,
      method: 'DELETE',
    }).then(result => {
      console.log('Delete Result:', result.data);

      // Update the todos state
      setTodos([...todos.filter(todo => todo.id !== id)]);
    });
  };

  const checkTodo = id => {
    console.log('Check', id);

    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      }),
    ]);
  };

  return (
    <div className='App container'>
      <h1>Simple todo</h1>
      <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
