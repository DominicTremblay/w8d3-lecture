import React from 'react';

import './TodoListItem.scss';

const TodoListItem = ({ id, task, completed, removeTodo, checkTodo }) => {
  return (
    <li className='list-group-item new-todo'>
      <input
        onClick={() => checkTodo(id)}
        type='checkbox'
        value={task}
        completed={completed ? completed.toString() : undefined}
      />{' '}
      <label>{task}</label>{' '}
      <button onClick={() => removeTodo(id)} className='remove-todo'>
        X
      </button>
    </li>
  );
};

export default TodoListItem;
