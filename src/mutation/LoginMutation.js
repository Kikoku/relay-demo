import Relay from 'react-relay';

export default class LoginMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { generateToken }`
  }
  getVariables() {
    return {
      name: this.props.name
    }
  }
  getFatQuery() {
    return Relay.QL`
      fragment on generateTokenPayload {
        token
      }
    `
  }
  getConfigs(){
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        token: this.props.name
      }
    }]
  }
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        name
      }
    `
  }
}
