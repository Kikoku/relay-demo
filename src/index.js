import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import {
  applyRouterMiddleware,
  Router,
  browserHistory
} from 'react-router';
import useRelay from 'react-router-relay';
import Routes from './routes';

localStorage.setItem('access_token', 'test')

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080', {
    get headers() {
      return {
        Authorization: localStorage.getItem('access_token')
      }
    }
    // NOTE:
    // [Deafult Header]: value
    // headers {
    //   [Custom Header]: value
    // }
  })
)

class RootApp extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        routes={Routes}
        render={applyRouterMiddleware(useRelay)}
        environment={Relay.Store}
      />
    )
  }
}

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);
