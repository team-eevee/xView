import React from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// import 'react-dropdown/style.css';

const DROPDOWN_OPTIONS = [
  'Interested', 'Applied', 'Phone Screen', 'Technical Interview', 'Onsite', 'Offer', 'Negotiation',
]

const mapStateToProps = store => ({
  user: store.user,
  app: store.app
});

const mapDispatchToProps = dispatch => ({
  companyChange: (event) => {
    dispatch(actions.companyChange(event.target.value));
  },
  recruiterChange: (event) => {
    dispatch(actions.recruiterChange(event.target.value));
  },
  contactInfoChange: (event) => {
    dispatch(actions.contactInfoChange(event.target.value));
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
      <input type='text' placeholder='Recruiter / Contact Name' onChange={props.recruiterChange} />
      <input type='text' placeholder='Recruiter / Contact Email' onChange={props.contactInfoChange} />
      <br/>
      <Dropdown
        options={DROPDOWN_OPTIONS}
        placeholder='Select application phase'
        
      />
      <button>Save</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);