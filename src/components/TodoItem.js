import React from 'react';

const TodoItem = ({text, complete}) => (
  <li
    style={{
      opacity: complete ? .65 : 1
    }}
    >{text}</li>
)

export default TodoItem;
