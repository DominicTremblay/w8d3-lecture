import React, {useReducer} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList';


const ADD_TODO = 'ADD_TODO';

const todoReducer = (state, {type, task}) => {

  const actions = {
    ADD_TODO: [
      ...state,
      {
        id: Math.random().toString(36),
        task,
        completed: false
      }
    ]
  }

  if (!actions[type]) {
    throw new Error("type not found")
  }

  return actions[type]
}


const App = () => {

  const [state, dispatch] = useReducer(todoReducer, {todos: [{
    id: 1,
    task: 'Walk the Dog',
    completed: false
  }]})


  return (
    <div className="App container">
      <h1>Simple todo</h1>
      <TodoList todos={state.todos}/>
      <TodoForm />
    </div>
  );
}

export default App;
