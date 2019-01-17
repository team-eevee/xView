import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  // user: store.user
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
});

const ViewApp = (props) => {
  return (
    <div>
      <p>Log in!</p>
      <input type='text' placeholder="Email" onChange={props.logemail} />
      <br/>
      <input type='text' placeholder="Password" onChange={props.logpass} />
      <button onClick={() => { props.login(props.user); }}>Log in!</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewApp);