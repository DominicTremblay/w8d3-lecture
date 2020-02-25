import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  // Submit the form
  // - grab the content of the input box

  // we need to maintain a state for the input box
  // - controlled input

  const validateTodo = () => {
    const errors = {
      empty: 'Please type a todo',
    };

    if (!text) {
      return errors.empty;
    }

    return false;
  };

  const handleSubmit = event => {
    // prevent the default submission
    event.preventDefault();
    // pass the text state to our list of todos

    // validate that we have a todo

    const errorMsg = validateTodo();

    if (!errorMsg) {
      addTodo(text);
      // reset the input box
      setText('');
    } else {
      setError(errorMsg);
    }
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
          value={text}
          placeholder='Enter a todo'
          onChange={event => setText(event.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoForm;
