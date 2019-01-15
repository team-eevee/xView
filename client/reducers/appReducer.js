import * as types from '../constants/actionTypes';

const initialState = {

};

const appReducer = (state = initialState, action) => {
  let list;
  switch(action.type) {
    case types.GET_APPS:
    list = action.payload;
    return {
      ...state,
      list,
    }
    default: 
      return state;
  }
}

export default appsReducer;