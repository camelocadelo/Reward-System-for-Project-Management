import { defaultAction } from 'store/defaultActions';
import * as api from 'store/integration/api';

import {
  BIND_SLACK_PROFILE,
  SEND_GITHUB_CODE,
  BIND_TELEGRAM_PROFILE,
  BIND_TELEGRAM_PROJECT,
  BIND_SLACK_PROJECT,
  UNBIND_SLACK_PROFILE,
  UNBIND_TELEGRAM_PROFILE,
  BIND_REPO_TO_PROJECT,
  UNBIND_SLACK_PROJECT,
  UNBIND_TELEGRAM_PROJECT,
  UNBIND_GIT_PROFILE,
  UNBIND_GIT_PROJECT,
  SEND_GIT_TOKEN,
} from './types';

export const sendGithubCode = (data: any, token: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: SEND_GITHUB_CODE,
    apiCall: () => {
      return api.sendGithubCode(data, token);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindTelegramProfile = (data: any, token: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_TELEGRAM_PROFILE,
    apiCall: () => {
      return api.bindTelegramProfile(data, token);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindSlackProfile = (data: any, token: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_SLACK_PROFILE,
    apiCall: () => {
      return api.bindSlackProfile(data, token);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindTelegramProject = (data: any, id: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_TELEGRAM_PROJECT,
    apiCall: () => {
      return api.bindTelegramProject(data, id);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindSlackProject = (data: any, arg2: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_SLACK_PROJECT,
    apiCall: () => {
      return api.bindSlackProject(data, arg2);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const unbindSlackProfile = (token: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UNBIND_SLACK_PROFILE,
    apiCall: () => {
      return api.unbindSlackProfile(token);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const unbindTelegramProfile = (token: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UNBIND_TELEGRAM_PROFILE,
    apiCall: () => {
      return api.unbindTelegramProfile(token);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const bindRepoToProject = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_REPO_TO_PROJECT,
    apiCall: () => {
      return api.bindRepoToProject(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const unbindSlackProject = (id: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UNBIND_SLACK_PROJECT,
    apiCall: () => {
      return api.unbindSlackProject(id);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const unbindTelegramProject = (id: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UNBIND_TELEGRAM_PROJECT,
    apiCall: () => {
      return api.unbindTelegramProject(id);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const unbindGitProfile = (token: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UNBIND_GIT_PROFILE,
    apiCall: () => {
      return api.unbindGitProfile(token);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const unbindGitProject = (id: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UNBIND_GIT_PROJECT,
    apiCall: () => {
      return api.unbindGitProject(id);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const sendGitToken = (data: any, token: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: SEND_GIT_TOKEN,
    apiCall: () => {
      return api.sendGitToken(data, token);
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
  bindSlackProject,
  unbindSlackProfile,
  unbindTelegramProfile,
  bindRepoToProject,
  unbindSlackProject,
  unbindTelegramProject,
  unbindGitProfile,
  unbindGitProject,
  sendGitToken,
};
