import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  // event handler
  // preventDefault => preventing the form from submitting

  // controlled input
  // state
  // onChange
  // value

  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const validateTodo = () => {
    if (!text) {
      return 'Please provide a valid todo';
    }

    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // text is the value we typed in the box
    // calling addTodo from props with the text value
    // This addTodo should be performed only if we have a valid todo

    const error = validateTodo();

    if (!error) {
      addTodo(text);
      setError('');
    } else {
      //error message
      setError(error);
    }

    // resetting the input to ''
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 id='error'>{error}</h4>
      <div className='form-group'>
        <input
          autoFocus
          type='text'
          className='form-control'
          id='todo-input'
          placeholder='Enter a todo'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoForm;
