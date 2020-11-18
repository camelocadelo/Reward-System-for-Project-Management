import { defaultAction } from 'store/defaultActions';
import * as api from 'store/auth/api';
import { GET_USER, LoginRequest } from './types';
// import { LoginTypes } from 'pages/login/types';

export const login = (data: LoginRequest, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_USER,
    apiCall: () => {
      return api.getUser(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  login,
};
