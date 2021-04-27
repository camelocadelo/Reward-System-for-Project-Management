import { defaultAction } from 'store/defaultActions';
import * as api from 'store/integration/api';

import {
  BIND_SLACK_PROFILE,
  SEND_GITHUB_CODE,
  BIND_TELEGRAM_PROFILE,
  BIND_TELEGRAM_PROJECT,
} from './types';

export const sendGithubCode = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: SEND_GITHUB_CODE,
    apiCall: () => {
      return api.sendGithubCode(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindTelegramProfile = (data: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_TELEGRAM_PROFILE,
    apiCall: () => {
      return api.bindTelegramProfile(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindSlackProfile = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_SLACK_PROFILE,
    apiCall: () => {
      return api.bindSlackProfile(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindTelegramProject = (data: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_TELEGRAM_PROJECT,
    apiCall: () => {
      return api.bindTelegramProject(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  sendGithubCode,
  bindTelegramProfile,
  bindSlackProfile,
  bindTelegramProject,
};
