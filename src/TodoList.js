import React from 'react'
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({todos}) => {
  
  const todoList = todos.map(todo => <TodoListItem key={todo.id} {...todo} />)
  
  return (
    <ul className="list-group">
      {todoList}
    </ul>
  )
}

export default TodoList
