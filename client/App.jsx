import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import Wrapper from './containers/MainContainer.jsx';
import history from './../router/history.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
      
        </Switch>
      </Router>
      // <div>
      //   <h1>Hi</h1>
      // </div>
    )
  }
}

export default App;