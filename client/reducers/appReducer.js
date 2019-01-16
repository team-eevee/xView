import * as types from '../constants/actionTypes';

const initialState = {
  appList: null,
  
};

const appReducer = (state = initialState, action) => {
  let appList;
  switch(action.type) {
    case types.GET_APPS:
    appList = action.payload;
    return {
      ...state,
      appList,
    }
    default: 
      return state;
  }
}

export default appReducer;