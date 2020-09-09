import React, {useState} from 'react'
import TodoList from './TodoList';

const TodoForm = ({addTodo}) => {


  // controlled input
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  //tracking the string we typed in the box 'Get a coffee'


  // submit the form - onSubmit on the form
  
  const validateTodo = (content) => {
    let valid = true;

    if (!content) {
      setError("Todo cannot be empty!");
      valid = false;
    }
    
    return valid;
  }


  const handleSubmit = event => {
    event.preventDefault();
    
    if (validateTodo(text)) {
      addTodo(text);
      setText('');
    }
    
    // update the state -> event.target.value
  }

  return (
    <form onSubmit={handleSubmit}>
    <h4 id='error'>{error}</h4>
      <div className="form-group">
        <input value={text} onChange={(event) => setText(event.target.value)} autoFocus type="text" className="form-control" id="todo-input" placeholder="Enter a todo" />
      </div>

    </form>
    )
}

export default TodoForm
