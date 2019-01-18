import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import CreateApp from "../app-router/CreateApp.jsx";
import ViewApp from "../app-router/ViewApp.jsx";
import InterviewQs from "./InterviewQs.jsx";
import Stats from "./Stats.jsx";
import Profile from "./Profile.jsx";
import * as actions from "../actions/actions";

const mapStateToProps = store => ({
  app: store.app,
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  onLoad: userId => {
    dispatch(actions.getApps(userId));
  },
  signOut: () => {
    dispatch(actions.signOut());
  }
});

class Applications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad(this.props.user.userId);
  }

  render() {
    const linkStyle = {
      textDecoration: "none",
      marginBottom: '2.5rem', 
      color: 'rgb(254, 254, 254)',
      marginLeft: '0.3rem',
      cursor: 'pointer',
      fontSize: '1.5rem',
      fontWeight: '400',
    }

    const apps = [];
    Object.values(this.props.app.appList).forEach((app) => {
      apps.push(<div>
        <h3>{app.companyName}</h3>
        <img src={app.logo}></img>
        <p>{app.domain}</p>
        </div>)
    });

    return (
      <div className="main">
        <div className="nav">
          <h1 id="minilogo">xView</h1>
          <BrowserRouter>
            <div className="navContent">
              <Link to="/applications" style={linkStyle}>
                Applications
              </Link>
              <Link
                to="/interview-questions"
                style={linkStyle}>
                Interview Qs
              </Link>
              <Link to="/stats" style={linkStyle}>
                Stats
              </Link>
              <Link to="/profile" style={linkStyle}>
                Profile
              </Link>
              <Switch>
                <Route path="/applications" component={Applications} />
                <Route path="/interview-questions" component={InterviewQs} />
                <Route path="/stats" component={Stats} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <div className="content">
          <span className="topButtons">
            <button className="addApp">Add Job Prospect +</button>
            <button className="signOut" onClick={this.props.signOut}>Sign Out</button>
          </span>
          <h1>Your Applications</h1>
          {apps}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Applications);
