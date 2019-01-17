import * as types from '../constants/actionTypes';

const initialState = {
  appList: null,
  companyName: null,
  status: null,
  recruiters: null
};

const appReducer = (state = initialState, action) => {
  let appList;
  let recruiters;
  let companyName;
  let status;
  switch(action.type) {
    case types.GET_APPS:
    appList = action.payload;
    return {
      ...state,
      appList,
    }
    case types.COMPANY_CHANGE: 
    companyName = action.payload;
    return {
      ...state,
      companyName
    }
    case types.
    case types.CREATE_APP: 

    default: 
      return state;
  }
}

export default appReducer;