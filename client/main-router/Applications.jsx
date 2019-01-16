import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateApp from '../app-router/CreateApp.jsx';
import ViewApp from '../app-router/ViewApp.jsx'
import * as actions from '../actions/actions';

const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(actions.getApps());
  }
})

class Applications extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   this.props.onLoad();
  // }
  
  render() {
    return(
      <div>
        <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/view-app'>View Application</Link>
            </li>
            <li>
              <Link to='/create-app'><button>Add Job Prospect</button></Link>
            </li>
          </ul>
          <Switch>
          <Route exact path='/view-app' component={ViewApp} />
          <Route path='/create-app' component={CreateApp} />
        </Switch>
        </div>
      </BrowserRouter>
        <h1>Your Applications</h1>
        <button>Sign Out</button>
        <span>Add Job Prospect<button>+</button></span>
      </div>
    )
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Applications);