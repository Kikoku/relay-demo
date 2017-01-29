import React, {Component} from 'react';
import Relay from 'react-relay';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>
          Home Page
        </h1>
      </div>
    )
  }
}

export default Relay.createContainer(HomePage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        name
      }
    `
  }
})
