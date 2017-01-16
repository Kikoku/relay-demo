import React, { Component } from 'react';
import Relay from 'react-relay';
import AddUserMutation from './addUserMutation';

console.log(AddUserMutation);

class AddUserContainer extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Test Relay',
      newUser: false
    }
  }

  _handleAddUser() {
    this.setState({
      newuser: true
    })
    this.props.relay.commitUpdate(
      new AddUserMutation({name: this.state.name})
    )
  }
  render() {
    console.log(this.props);
    return (
      <div onClick={() => this._handleAddUser()}>
        Add user
        {this.state.newUser ? this.props.user.name : ''}
      </div>
    )
  }
}

exports.AddUserContainer = Relay.createContainer(AddUserContainer, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        ${AddUserMutation.getFragment('user')}
      }
    `
  }
})
