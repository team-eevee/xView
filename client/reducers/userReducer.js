import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
}

const userReducer = (state = initialState, action) => {
  let loggedIn;

  switch(action.type) {
    case types.GOOGLE_LOG: 
    loggedIn = action.payload;
    return {
      ...state,
      loggedIn
    };
    case types.GITHUB_LOG: 
    status = true;
    return {
      ...state,
      loggedIn
    };
    default: 
      return state;
  }
};

export default userReducer;