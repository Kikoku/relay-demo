import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay, { RootContainer} from 'react-relay';
import { Container } from './App';
import './index.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080', {
    // NOTE:
    // [Deafult Header]: value
    // headers {
    //   [Custom Header]: value
    // }
  })
)

let queries = (params) => ({
  name: 'AllUsersRoute',
  queries: {
    allusers: () => Relay.QL`
      query {
        allusers(first: $first)
      }
    `
  },
  paramDefinitions: {
    first: {required: true},
    after: {required: false}
  },
  params: params
})

class RootApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayResults: 3
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={3}
          name="displayResults"
          onChange={this.handleChange}
          value={this.state.displayResults}
        />
        <RootContainer
          Component={Container}
          route={queries({first: this.state.displayResults})}
          onReadyStateChange={({error}) => { if (error) console.error(error) }}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);
