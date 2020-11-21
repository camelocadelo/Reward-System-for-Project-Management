import { combineReducers } from 'redux';
import { CREATE_PROJECT, GET_PROJECTS } from 'store/project/types';

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

const projectReducer = combineReducers({
  createProjectState,
  userProjects,
});

export default projectReducer;
