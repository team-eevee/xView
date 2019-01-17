import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Login from './Login.jsx';
import Applications from './Applications.jsx';

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

function Logged(props) {
  const checkLog = props.user.loggedIn;
  if (!checkLog) {
    return <Login />;
  }
  return <Applications />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Logged);