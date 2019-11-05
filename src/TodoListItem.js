import React from 'react'

import './TodoListItem.scss'

const TodoListItem = (({id, task, completed}) => {
  return (
    <li className="list-group-item new-todo"><input type="checkbox" value={task} completed={completed ? completed : undefined}/> <label>{task}</label> <button className='remove-todo'>X</button></li>
  )
})

export default TodoListItem
