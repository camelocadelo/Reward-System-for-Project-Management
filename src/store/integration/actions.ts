import { defaultAction } from 'store/defaultActions';
import * as api from 'store/integration/api';

import { SEND_GITHUB_CODE } from './types';

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

export default {
  sendGithubCode,
};
