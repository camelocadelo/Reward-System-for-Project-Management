import { combineReducers } from 'redux';
import { BIND_SLACK_CHANNEL } from 'store/slack/types';

const slackChannelState = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case BIND_SLACK_CHANNEL.started:
      return {
        data: null,
        loading: true,
      };
    case BIND_SLACK_CHANNEL.success:
      console.log(action.data);
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case BIND_SLACK_CHANNEL.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const slackReducer = combineReducers({
  slackChannelState,
});

export default slackReducer;
