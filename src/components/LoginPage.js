import React, { Component } from 'react';
import Relay from 'react-relay';
import GetTokenMutation from '../mutation/LoginMutation';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    Relay.Store.commitUpdate(
      new GetTokenMutation({
        name: this.state.name
      }),
      {
        onFailure: () => {
          console.log('oops');
        },
        onSuccess: (response) => {
          localStorage.setItem('access_token', response.generateToken.token)
          location.reload()
        }
      }
    )
  }
  render() {
    return (
      <div>
        <h1>
          Login Page
        </h1>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            name="name"
            onChange={(e) => this.handleChange(e)}
            value={this.state.name}
            placeholder='Name'
          />
          <button>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Relay.createContainer(LoginPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        name,
        ${GetTokenMutation.getFragment('viewer')}
      }
    `
  }
});
