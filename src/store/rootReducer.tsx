import { combineReducers } from 'redux';

import authReducer from 'store/auth/reducer';
import userReducer from 'store/user/reducer';
import projectReducer from 'store/project/reducer';
import marketplaceReducer from 'store/marketplace/reducer';
import integrationReducer from 'store/integration/reducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  projectReducer,
  marketplaceReducer,
  integrationReducer,
});

export default rootReducer;
