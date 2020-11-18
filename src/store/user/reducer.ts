import { combineReducers } from 'redux';
import { GET_USERINFO } from 'store/user/types';

const userInfo = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_USERINFO.started:
      return {
        data: null,
        loading: true,
      };
    case GET_USERINFO.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case GET_USERINFO.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const userReducer = combineReducers({
  userInfo,
});

export default userReducer;
