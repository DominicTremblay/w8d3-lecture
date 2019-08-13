import React from 'react'

const TodoForm = ({id, task, completed}) => {
  return (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" id="todo-input" placeholder="Enter a todo" value={task} completed={completed}/>
      </div>

    </form>
        )
}

export default TodoForm
