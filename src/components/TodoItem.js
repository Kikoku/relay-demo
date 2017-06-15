import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

const TodoItem = ({todo}) => (
  <li>{todo.text}</li>
)

module.exports = createFragmentContainer(
  TodoItem,
  graphql`
    fragment TodoItem_todo on Todo {
      id
      text
    }
  `
)
