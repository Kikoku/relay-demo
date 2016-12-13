import React from 'react';
import Relay from 'react-relay';

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
