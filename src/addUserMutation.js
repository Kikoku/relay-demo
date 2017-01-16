import Relay from 'react-relay';

export default class AddUserMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { addUser }`
  }
  getVariables() {
    return {name: this.props.name}
  }
  getFatQuery() {
    return Relay.QL`
      fragment on addUserPayload {
        user {
          name
        }
      }
    `
  }
  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        user: this.props.name
      }
    }]
  }
}

AddUserMutation.fragments = {
  user: () => Relay.QL`
    fragment on User {
      name
    }
  `
}
