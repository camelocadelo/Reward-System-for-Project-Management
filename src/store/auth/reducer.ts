import { combineReducers } from 'redux';
import { GET_USER } from 'store/auth/types';

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
      };
    case GET_USER.success:
      console.log(action.data);
      const data = action.data;
      localStorage.setItem('my_token', JSON.stringify(data.tokens));
      // const parsedData = parseUserInfo(data);
      // localStorage.setItem('user', JSON.stringify(parsedData.token));
      // localStorage.setItem('user_role', JSON.stringify(parsedData.user.role));
      return {
        data: data,
        loading: false,
      };
    case GET_USER.failed:
      return {
        data: null,
        loading: false,
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
  // user,
});

export default authReducer;
