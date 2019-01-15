import React from 'react';
import { connect } from 'react-redux';
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
  componentDidMount() {
    this.props.onLoad();
  }
  
  render() {
    return(
      <div>
        <h1>Your Applications</h1>
        <button>Sign Out</button>
        <button>Add Job Prospect</button>
      </div>
    )
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Applications);