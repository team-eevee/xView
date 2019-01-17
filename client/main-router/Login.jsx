import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  // logemail: (event) => {
  //   dispatch(actions.logEmail(event.target.value));
  // },
  // logpass: (event) => {
  //   dispatch(actions.logPass(event.target.value));
  // },
  // login: (event) => {
  //   dispatch(actions.logIn(event));
  // }
  googleLog: (event) => {
    dispatch(actions.googleLog(event));
  },
  githubLog: (event) => {
    dispatch(actions.githubLog(event));
  }
});

const Login = (props) => {
  return (
    <div>
      <p>Log in!</p>
      <br/>
      <button onClick={() => { props.googleLog() }}>Log In With Google</button>
      <button onClick={() => { props.githubLog() }}>Log In With GitHub</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);