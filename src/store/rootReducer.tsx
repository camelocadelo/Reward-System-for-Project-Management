import { combineReducers } from 'redux';

import authReducer from 'store/auth/reducer';
import userReducer from 'store/user/reducer';
import projectReducer from 'store/project/reducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  projectReducer,
});

export default rootReducer;
