import * as types from '../constants/actionTypes';

const initialState = {
  id: null,
  sessionId: null,
  firstName: null,
  lastName: null,
  logged: false,
}

const userReducer = (state = initialState, action) => {
  let logged;

  switch(action.type) {
    case types.LOG_IN: 
    logged = true;
    return {
      ...state,
      logged
    };
    default: 
      return state;
  }
};

export default userReducer;