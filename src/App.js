import React from 'react';
import Relay from 'react-relay'
import logo from './logo.svg';
import './App.css';

import {UserContainer} from './UserContainer.js';

const App = ({allusers}) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <ul>
        {allusers.edges.map((edge) => (
          <UserContainer
            cursor={edge.cursor}
            user={edge.node}
          />
        ))}
      </ul>
    </div>
  )

exports.Container = Relay.createContainer(App, {
  fragments: {
    allusers: () => Relay.QL`
      fragment on UsersConnection {
        edges {
          cursor
          node {
            ${UserContainer.getFragment('user')}
          }
        }
      }
    `
  }
})

exports.queries = (params) => ({
  name: 'AllUsersRoute',
  queries: {
    allusers: () => Relay.QL`
      query {
        allusers(first: $first)
      }
    `
  },
  paramDefinitions: {
    first: {required: true},
    after: {required: false}
  },
  params: params
})
