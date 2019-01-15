import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Logged from '../components/Logged.jsx';

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h3>Ready to skip the line to your favorite shop?</h3>
        <Logged />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);