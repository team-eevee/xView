import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  
});

const Login = (props) => {
  return (
    <div className="login">
      <h1 className="logo">xView</h1>
      <a id="google" href='/login/google'>Log in with <span id="goo">Google</span></a>
      <a id="github" href='/login/github'>Log in with <span id="git">GitHub</span></a>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);