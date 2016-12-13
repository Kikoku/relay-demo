import React from 'react';
import Relay from 'react-relay';

const UserContainer = ({user, cursor}) => (
  <li key={user.cursor} id={user.cursor}>{user.name}</li>
)

exports.UserContainer = Relay.createContainer(UserContainer, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        id
        name
      }
    `
  }
});
