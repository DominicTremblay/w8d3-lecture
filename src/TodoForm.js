import React, { useState } from 'react';

const TodoForm = ({addNewTodo}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const validateTodo = content => {

    if (!content) {
      return 'Please enter a todo'
    } else {
      return null;
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = validateTodo(text);

    if (!error) {
      addNewTodo(text);
      setError('');
    } else {
      setError('Please enter a todo')
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <h4 id="error">{error}</h4>}
      <div className="form-group">
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          autoFocus
          type="text"
          className="form-control"
          id="todo-input"
          placeholder="Enter a todo"
        />
      </div>
    </form>
  );
};

export default TodoForm;
