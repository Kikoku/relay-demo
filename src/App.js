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
    user: () => Relay.QL`
      fragment on User {
        name
      }
    `
  }
})

exports.queries = {
  name: 'UserQuerie',
  params: {},
  queries: {
    user: () => Relay.QL`
      query {
        user(id: "57e46ab23b34a33831823b84")
      }
    `
  }
}
