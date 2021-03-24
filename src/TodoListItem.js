import React from 'react';

import './TodoListItem.scss';

const TodoListItem = ({ id, task, completed, deleteTodo, checkTodo }) => {
  return (
    <li className="list-group-item new-todo">
      <input type="checkbox" value={task} checked={completed} onClick={() => checkTodo(id)}/>{' '}
      <label>{task}</label>{' '}
      <button onClick={(event) => deleteTodo(id)} className="remove-todo">
        X
      </button>
    </li>
  );
};

export default TodoListItem;
