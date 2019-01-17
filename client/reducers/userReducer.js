import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
}

const userReducer = (state = initialState, action) => {
  let loggedIn;

  switch(action.type) {
    case types.CHECK_LOGIN: 
    loggedIn = action.payload;    
    return {
      ...state,
      loggedIn
    };
    default: 
      return state;
  }
};

export default userReducer;