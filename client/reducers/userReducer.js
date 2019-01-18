import * as types from "../constants/actionTypes";

const initialState = {
  loggedIn: false,
  userid: null,
  username: null,
  email: null,
  avatar: null
};

const userReducer = (state = initialState, action) => {
  let loggedIn;
  let userId;
  let avatar;
  let email;
  let username;

  switch (action.type) {
    case types.CHECK_LOGIN:
      loggedIn = action.payload.loggedIn;
      userId = action.payload.userId;
      username = action.payload.username;
      avatar = action.payload.avatar;
      email = action.payload.email;

      return {
        ...state,
        loggedIn,
        userId,
        username,
        avatar,
        email,
      };

    case types.SIGN_OUT:
      return {
        loggedIn: false,
        userid: null,
        username: null,
        email: null,
        avatar: null
      };

    default:
      return state;
  }
};

export default userReducer;
