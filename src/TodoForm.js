import React, {useState} from 'react'

const TodoForm = (props) => {


  return (
    <form>
    <h4 id='error'></h4>
      <div className="form-group">
        <input type="text" className="form-control" id="todo-input" placeholder="Enter a todo" />
      </div>

    </form>
    )
}

export default TodoForm
