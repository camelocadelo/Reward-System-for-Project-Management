import { combineReducers } from 'redux';
import { BIND_SLACK_PROJECT, SEND_GITHUB_CODE } from 'store/integration/types';

const sentGithubCode = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case SEND_GITHUB_CODE.started:
      return {
        data: null,
        loading: true,
      };
    case SEND_GITHUB_CODE.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case SEND_GITHUB_CODE.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const bindSlackProject = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case BIND_SLACK_PROJECT.started:
      return {
        data: null,
        loading: true,
      };
    case BIND_SLACK_PROJECT.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case BIND_SLACK_PROJECT.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const integrationReducer = combineReducers({ sentGithubCode, bindSlackProject });

export default integrationReducer;
