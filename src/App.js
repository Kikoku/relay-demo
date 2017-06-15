import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import TodoList from './components/TodoList';

function fetchQuery (
  operation,
  variables
) {
  return fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
  }).then(response => {
    return response.json();
  });
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query App_Query {
            viewer {
              name
              todos(
                first: 2147483647  # max GraphQLInt
              ) {
                edges {
                  node {
                    id,
                    text
                  }
                }
              }
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if(props) {
            console.log(props);
            return (
              <div className="App">
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome {props.viewer.name}</h2>
                </div>
                <TodoList
                  todos={props.viewer.todos}
                />
              </div>
            )
          } else {
            return <div>Loading</div>;
          }
        }}
      />
    );
  }
}

export default App;
