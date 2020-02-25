import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({ todos, removeTodo, checkTodo }) => {
  const todoList = todos.map(todo => (
    <TodoListItem
      key={todo.id}
      {...todo}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
    />
  ));

  return <ul className='list-group'>{todoList}</ul>;
};

export default TodoList;
