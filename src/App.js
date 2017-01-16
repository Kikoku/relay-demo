import React from 'react';
import Relay from 'react-relay'
import './App.css';

import {UserContainer} from './UserContainer';
import {AddUserContainer} from './AddUserContainer';

const App = ({users, user}) => {
  return (
    <div className="App">
      <ul>
        {users.edges.map((edge) => (
          <UserContainer
            cursor={edge.cursor}
            user={edge.node}
          />
        ))}
      </ul>
      <AddUserContainer user={user}/>
    </div>
  )}

exports.Container = Relay.createContainer(App, {
  fragments: {
    users: () => Relay.QL`
      fragment on UserConnection {
        edges {
          cursor
          node {
            ${UserContainer.getFragment('user')}
          }
        }
      }

    `,
    user: () => Relay.QL`
      fragment on User {
        ${AddUserContainer.getFragment('user')}
      }
    `
  }
})
