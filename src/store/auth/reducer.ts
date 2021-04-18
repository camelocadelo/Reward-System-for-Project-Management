import { combineReducers } from 'redux';
import { GET_USER, REGISTER } from 'store/auth/types';

// const parseUserInfo = (userInfo: AuthTypes.IRawData): AuthTypes.IUser => ({
//   token: userInfo.token,
//   user: userInfo.user,
// });

const login = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_USER.started:
      return {
        data: null,
        loading: true,
        errorMesage: undefined,
      };
    case GET_USER.success:
      console.log(action.data);
      const data = action.data;
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('pk', data.pk);
      localStorage.setItem('is_admin', data.is_admin);
      localStorage.setItem('is_manager', data.is_manager);
      localStorage.setItem('is_organizationOwner', data.is_organizationOwner);
      localStorage.setItem('is_marketplace_admin', data.is_marketplace_admin);
      localStorage.setItem('username', data.username);
      // const parsedData = parseUserInfo(data);
      // localStorage.setItem('user', JSON.stringify(parsedData.token));
      // localStorage.setItem('user_role', JSON.stringify(parsedData.user.role));
      return {
        data: data,
        loading: false,
        errorMessage: undefined,
      };
    case GET_USER.failed:
      console.log('the action: ', action);
      return {
        data: null,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const register = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case REGISTER.started:
      return {
        data: null,
        loading: true,
        errorMessage: undefined,
      };
    case REGISTER.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
        errorMessage: undefined,
      };
    case REGISTER.failed:
      return {
        data: null,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

// export const user = () =>  {
//   const local = localStorage.getItem('user');
//   return local ? JSON.parse(local) : null;
// };

const authReducer = combineReducers({
  login,
  register,
});

export default authReducer;
