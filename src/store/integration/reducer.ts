import { combineReducers } from 'redux';
import { SEND_GITHUB_CODE } from 'store/integration/types';

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

const integrationReducer = combineReducers({ sentGithubCode });

export default integrationReducer;
