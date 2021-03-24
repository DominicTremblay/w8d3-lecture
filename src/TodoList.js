import React from 'react'
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({todos, deleteTodo, checkTodo}) => {
  
  const todoList = todos.map(todo => <TodoListItem key={todo.id} {...todo} deleteTodo={deleteTodo} checkTodo={checkTodo}/>)
  
  return (
    <ul className="list-group">
      {todoList}
    </ul>
  )
}

export default TodoList
