import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import Wrapper from './containers/MainContainer.jsx';
import history from './main-router/History.jsx';
import Login from './main-router/Login.jsx';
import Applications from './main-router/Applications.jsx';
import InterviewQs from './main-router/InterviewQs.jsx';
import Stats from './main-router/Stats.jsx';
import Profile from './main-router/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Login />
    )
  }
}

export default App;