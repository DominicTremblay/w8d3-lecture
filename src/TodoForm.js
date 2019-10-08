import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [todo, setTodo] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!todo) {
      setError('Please, submit a todo');
      return false;
    }

    setError('');
    return true;
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (validate()) {
      addTodo(todo);
      setTodo('');
    }
  }


  return (
    <form onSubmit={handleSubmit}>
    <h4 id='error'>{error}</h4>
      <div className="form-group">
        <input type="text" value={todo} onChange={event => setTodo(event.target.value)} autoFocus className="form-control" id="todo-input" placeholder="Enter a todo" />
      </div>

    </form>
        )
}

export default TodoForm
