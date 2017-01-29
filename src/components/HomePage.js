import React, {Component} from 'react';
import Relay from 'react-relay';

class HomePage extends Component {
  render() {
    return (
      <div>
        {this.props.viewer.name}
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
