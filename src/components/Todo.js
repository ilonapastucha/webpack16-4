import React from 'react';

const Todo = props => {
  return (
    <div>
      <h1 className={style.Title}>Todo App</h1>
      <p>Tasks in queue: {props.tasks}</p>
    </div>
  )
}

export default Todo;