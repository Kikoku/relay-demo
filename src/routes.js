import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router';

import App from './App';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

import ViewerQuery from './queries/ViewerQuery';

function prepareViewerQueryParams(params, { location }) {
  const { token } = location.query;

  return {
    ...params,
    token: token ? token : ''
  }
}

export default (
  <Route path="/" component={App} queries={ViewerQuery} prepareParams={prepareViewerQueryParams}>
    <IndexRoute component={HomePage} queries={ViewerQuery} prepareParams={prepareViewerQueryParams}/>
    <Route path="login" component={LoginPage} queries={ViewerQuery} prepareParams={prepareViewerQueryParams}/>
  </Route>
)
