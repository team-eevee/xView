import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Login from "./Login.jsx";
import Applications from "./Applications.jsx";

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  checkLogin: () => {
    dispatch(actions.checkLogin());
  },
});

class Logged extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // request to server to check if user is logged in
    this.props.checkLogin();
  }

  render() {
    const checkLog = this.props.user.loggedIn;
    if (!checkLog) return <Login />;
    return <Applications />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logged);
