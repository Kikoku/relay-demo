import React, { Component } from 'react';
import Relay from 'react-relay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        name
      }
    `
  }
})
