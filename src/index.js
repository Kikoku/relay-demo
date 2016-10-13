import React from 'react';
import ReactDOM from 'react-dom';
import Relay, {RootContainer} from 'react-relay';
import {Container, queries} from './App';
import './index.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080')
)

ReactDOM.render(
  <RootContainer
    Component={Container}
    route={queries}
    onReadyStateChange={({error}) => { if (error) console.error(error) }}
  />,
  document.getElementById('root')
);
