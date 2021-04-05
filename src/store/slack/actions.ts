import { defaultAction } from 'store/defaultActions';
import * as api from 'store/slack/api';
import { BIND_SLACK_CHANNEL } from './types';

export const bindSlackChannel = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: BIND_SLACK_CHANNEL,
    apiCall: () => {
      return api.bindSlackChannel(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  bindSlackChannel,
};
