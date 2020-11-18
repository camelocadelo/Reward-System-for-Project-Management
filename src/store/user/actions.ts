import { defaultAction } from 'store/defaultActions';
import * as api from 'store/user/api';
import { GET_USERINFO } from 'store/user/types';

export const getUserInfo = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_USERINFO,
    apiCall: () => {
      return api.getUserInfo();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  getUserInfo,
};
