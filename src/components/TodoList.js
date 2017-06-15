import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => (
  <ul>
    {
      todos ?
        todos.edges.map((todo, i)=> <TodoItem key={i} {...todo.node} />)
      :
        <li>Loading</li>
    }
  </ul>
)

export default TodoList;
