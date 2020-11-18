import { combineReducers } from 'redux';

import authReducer from 'store/auth/reducer';
import userReducer from 'store/user/reducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

export default rootReducer;
