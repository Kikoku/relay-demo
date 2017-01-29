import React, { Component } from 'react';
import Relay from 'react-relay';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation user={this.props.viewer.name}/>
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
