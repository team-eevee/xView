import React from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const DROPDOWN_OPTIONS = [
  'Interested', 'Applied', 'Phone Screen', 'Technical Interview', 'Onsite', 'Offer', 'Negotiation',
]

const mapStateToProps = store => ({
  // user: store.user
});

const mapDispatchToProps = dispatch => ({
  companyChange: (event) => {
    dispatch(actions.inputChange(event.target.value));
  },
  locationChange: (event) => {
    dispatch(actions.inputChange(event.target.value));
  },
  contactChange: (event) => {
    dispatch(actions.inputChange(event.target.value));
  },
  dropdownChange: (event) => {
    dispatch(actions.dropdownChange(event.value))
  }


  // login: (event) => {
  //   dispatch(actions.logIn(event));
  // }
});

const CreateApp = (props) => {
  return (
    <div>
      <h2>Create a New Application</h2>
      <input type='text' placeholder='Company Name' onChange={props.companyChange} />
      <br/>
      <input type='text' placeholder='Location' onChange={props.locationChange} />
      <br/>
      <input type='text' placeholder='' />
      <Dropdown
        options={DROPDOWN_OPTIONS}
        placeholder='Select application phase'
        
      />
      <button>Save</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);