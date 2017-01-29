import React, { Component } from 'react';
import {
  Link,
} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>{this.props.user}</li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
