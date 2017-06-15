import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import TodoItem from './TodoItem';

const TodoList = ({viewer}) => (
  <ul>
    {
      viewer.todos.edges ?
        viewer.todos.edges.map((todo, i)=> <TodoItem key={i} todo={todo.node} />)
      :
        <li>Loading</li>
    }
  </ul>
)

module.exports = createFragmentContainer(
  TodoList,
  graphql`
    fragment TodoList_viewer on User  {
      todos(
        first: 3
      ) @connection(key: "TodoList_todos") {
        edges {
          node {
            ...TodoItem_todo
          }
        }
      }
    }
  `
)
