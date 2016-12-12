import React from 'react';
import Relay from 'react-relay'
import logo from './logo.svg';
import './App.css';

const App = ({allusers}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <ul>
        {allusers.edges.map(user => (
          <li key={user.node.id}>{user.node.name}</li>
        ))}
      </ul>
    </div>
  )
}

exports.Container = Relay.createContainer(App, {
  fragments: {
    allusers: () => Relay.QL`
      fragment on UsersConnection {
        edges {
          node {
            id
            name
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
