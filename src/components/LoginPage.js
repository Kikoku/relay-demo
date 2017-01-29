import React, { Component } from 'react';
import Relay from 'react-relay';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>
          Login Page
        </h1>
      </div>
    )
  }
}

export default Relay.createContainer(LoginPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        name
      }
    `
  }
});
