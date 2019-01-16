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
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/applications'>Applications</Link>
            </li>
            <li>
              <Link to='/interview-questions'>Interview Questions</Link>
            </li>
            <li>
              <Link to='/stats'>Stats</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
          <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/applications' component={Applications} />
          <Route path='/interview-questions' component={InterviewQs} />
          <Route path='/stats' component={Stats} />
          <Route path='/profile' component={Profile} />
        </Switch>
        </div>
      </BrowserRouter>
      // <div>
      //   <h1>Hi</h1>
      // </div>
    )
  }
}

export default App;