import { defaultAction } from 'store/defaultActions';
import * as api from 'store/user/api';
import {
  GET_USERINFO,
  CHANGE_USERINFO,
  GET_USER_ACTIVITIES,
  ChangeUserInfoRequest,
} from 'store/user/types';

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

export const changeUserInfo = (data: ChangeUserInfoRequest, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CHANGE_USERINFO,
    apiCall: () => {
      return api.changeUserInfo(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getUserActivities = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_USER_ACTIVITIES,
    apiCall: () => {
      return api.getUserActivities();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  getUserInfo,
  changeUserInfo,
  getUserActivities,
};
