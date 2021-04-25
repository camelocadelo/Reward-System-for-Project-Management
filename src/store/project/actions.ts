import { defaultAction } from 'store/defaultActions';
import * as api from 'store/project/api';
import {
  CREATE_PROJECT,
  GET_PROJECTS,
  GET_PROJECT_ACTIVITIES,
  CreateProjectRequest,
  ADD_TEAM_MEMBER,
  AddTeamMemberRequest,
  GET_PROJECT_MEMBERS,
  DELETE_PROJECT,
  REMOVE_TEAM_MEMBER,
  RemoveTeamMemberRequest,
  SET_TEAM_LEAD,
  GET_STATISTICS,
} from './types';

export const createProject = (data: RemoveTeamMemberRequest, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: REMOVE_TEAM_MEMBER,
    apiCall: () => {
      return api.removeTeamMember(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getProjects = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PROJECTS,
    apiCall: () => {
      return api.getProjects();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getProjectActivities = (data: string, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PROJECT_ACTIVITIES,
    apiCall: () => {
      return api.getProjectActivities(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const addTeamMember = (data: AddTeamMemberRequest, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: ADD_TEAM_MEMBER,
    apiCall: () => {
      return api.addTeamMember(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getProjectMembers = (projectPk: number, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PROJECT_MEMBERS,
    apiCall: () => {
      return api.getProjectMembers(projectPk);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const deleteProject = (projectPk: number, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: DELETE_PROJECT,
    apiCall: () => {
      return api.deleteProject(projectPk);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const removeTeamMember = (data: CreateProjectRequest, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CREATE_PROJECT,
    apiCall: () => {
      return api.removeTeamMember(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const setTeamLead = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: SET_TEAM_LEAD,
    apiCall: () => {
      return api.setTeamLead(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getStatistics = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_STATISTICS,
    apiCall: () => {
      return api.getStatistics(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  createProject,
  getProjects,
  getProjectActivities,
  addTeamMember,
  getProjectMembers,
  deleteProject,
  removeTeamMember,
  setTeamLead,
  getStatistics,
};
