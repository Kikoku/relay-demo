import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router';

import App from './App';

import HomePage from './components/HomePage';

import ViewerQuery from './queries/ViewerQuery';

export default (
  <Route path="/" component={App} queries={ViewerQuery}>
    <IndexRoute component={HomePage} queries={ViewerQuery}/>
  </Route>
)
