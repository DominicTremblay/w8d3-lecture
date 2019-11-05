import React, {useState} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList';

const App = () => {

  const [todos, setTodos] = useState([{
    id: 1,
    task: 'Walk the Dog',
    completed: false
  }]);

  return (
    <div className="App container">
      <h1>Simple todo</h1>
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
}

export default App;
