import React, { Component } from 'react';
import Relay from 'react-relay'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

exports.Container = Relay.createContainer(App, {
  fragments: {
    allusers: () => Relay.QL`
      fragment on UsersConnection {
        edges {
          node {
            name
            friends(first: 1) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    `
  }
})

exports.queries = {
  name: 'AllUsersRoute',
  queries: {
    allusers: () => Relay.QL`
      query {
        allusers
      }
    `
  },
  params: {}
}
