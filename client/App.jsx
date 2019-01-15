import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
// import Wrapper from './containers/MainContainer.jsx';
import history from './router/History.jsx';
import Login from './router/Login.jsx';
import Applications from './router/Applications.jsx';
import InterviewQs from './router/InterviewQs.jsx';
import Stats from './router/Stats.jsx';
import Profile from './router/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/applications' component={Applications} />
          <Route path='/interview-questions' component={InterviewQs} />
          <Route path='/stats' component={Stats} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
      // <div>
      //   <h1>Hi</h1>
      // </div>
    )
  }
}

export default App;