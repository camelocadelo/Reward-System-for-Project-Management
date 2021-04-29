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
  GET_SLACK_STATISTICS,
  GET_GIT_STATISTICS,
  GET_PROJECT_BIND_INFO,
  REDUCE_POINTS,
  DELETE_TEAM_LEAD,
} from './types';

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

export const getProjects = (pk: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PROJECTS,
    apiCall: () => {
      return api.getProjects(pk);
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

export const removeTeamMember = (data: RemoveTeamMemberRequest, callbacks?: any) => (
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

export const getProjectBindInfo = (projectPk: number, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PROJECT_BIND_INFO,
    apiCall: () => {
      return api.getProjectBindInfo(projectPk);
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

export const getSlackStatistics = (data: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_SLACK_STATISTICS,
    apiCall: () => {
      return api.getStatistics(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getGitStatistics = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_GIT_STATISTICS,
    apiCall: () => {
      return api.getStatistics(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const reducePoints = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: REDUCE_POINTS,
    apiCall: () => {
      return api.reducePoints(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const deleteTeamLead = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: DELETE_TEAM_LEAD,
    apiCall: () => {
      return api.deleteTeamLead(data);
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
  getProjectBindInfo,
  getSlackStatistics,
  getGitStatistics,
  reducePoints,
  deleteTeamLead,
};
