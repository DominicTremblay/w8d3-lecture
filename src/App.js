import React, {useState} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import axios from 'axios';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Walk the Dog",
      completed: true
    },
    {
      id: 2,
      task: "Go for a run",
      completed: false
    },
    {
      id: 3,
      task: "Get a coffee",
      completed: false
    },
  ]);

  const addTodo = content => {

    const newTodo = {
      // id: todos.length + 1,
      task: content,
      completed: false
    }

    axios({
      method: 'POST',
      url: '/api/todos',
      data: newTodo
    })
    .then(result => {
      // update the state

      console.log(result.data);

      setTodos([...todos, result.data]);
    })
    .catch(err => console.log(err.message))
  }

  const deleteTodo = id => {

    const updatedTodos = todos.filter(todo => todo.id !== id); 

    axios({
      method: 'DELETE',
      url: `/api/todos/${id}`
    })
    .then(result => {
      console.log(result.data);
      setTodos(updatedTodos);
    })
    .catch(err => console.log(err.message))

  }

  return (
    <div className="App container">
      <h1>Simple todo</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
