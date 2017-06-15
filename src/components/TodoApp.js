import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import TodoList from './TodoList';

const TodoApp = ({viewer}) => (
  <div>
    <TodoList viewer={viewer} />
  </div>
)

module.exports = createFragmentContainer(
  TodoApp,
  graphql`
    fragment TodoApp_viewer on User {
      ...TodoList_viewer
    }
  `
)
