import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import Wrapper from './containers/MainContainer.jsx';
import history from './main-router/History.jsx';
import Logged from './main-router/Logged.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <Logged />
    )
  }
}

export default App;
