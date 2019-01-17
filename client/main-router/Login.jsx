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
    <div>
      <p>Log in!</p>
      <br/>
      <a href='/login/google'>Log In With Google</a>
      <a href='/login/github'>Log In With GitHub</a>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);