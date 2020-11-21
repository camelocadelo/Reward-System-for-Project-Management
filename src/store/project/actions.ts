import { defaultAction } from 'store/defaultActions';
import * as api from 'store/project/api';
import { CREATE_PROJECT, CreateProjectRequest } from './types';

export const createProject = (data: CreateProjectRequest, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CREATE_PROJECT,
    apiCall: () => {
      return api.createProject(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  createProject,
};
