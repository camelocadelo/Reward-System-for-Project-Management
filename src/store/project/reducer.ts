import { combineReducers } from 'redux';
import {
  CREATE_PROJECT,
  GET_PROJECTS,
  GET_PROJECT_ACTIVITIES,
  ADD_TEAM_MEMBER,
  GET_PROJECT_MEMBERS,
  DELETE_PROJECT,
} from 'store/project/types';

const createProjectState = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case CREATE_PROJECT.started:
      return {
        data: null,
        loading: true,
      };
    case CREATE_PROJECT.success:
      console.log(action.data);
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case CREATE_PROJECT.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const userProjects = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_PROJECTS.started:
      return {
        data: null,
        loading: true,
      };
    case GET_PROJECTS.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case GET_PROJECTS.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const projectActivities = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_PROJECT_ACTIVITIES.started:
      return {
        data: null,
        loading: true,
      };
    case GET_PROJECT_ACTIVITIES.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case GET_PROJECT_ACTIVITIES.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const addedTeamMemberState = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case ADD_TEAM_MEMBER.started:
      return {
        data: null,
        loading: true,
      };
    case ADD_TEAM_MEMBER.success:
      console.log(action.data);
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case ADD_TEAM_MEMBER.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const projectMembers = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_PROJECT_MEMBERS.started:
      return {
        data: null,
        loading: true,
      };
    case GET_PROJECT_MEMBERS.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case GET_PROJECT_MEMBERS.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const deletedProjectState = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case DELETE_PROJECT.started:
      return {
        data: null,
        loading: true,
      };
    case DELETE_PROJECT.success:
      console.log(action.data);
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case DELETE_PROJECT.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const projectReducer = combineReducers({
  createProjectState,
  userProjects,
  projectActivities,
  addedTeamMemberState,
  projectMembers,
  deletedProjectState,
});

export default projectReducer;
