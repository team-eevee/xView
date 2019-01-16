import { combineReducers } from 'redux';

import appReducer from './appReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  app: appReducer,
  user: userReducer
});

export default reducers;
