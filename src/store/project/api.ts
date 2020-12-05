import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

const createProjectUrl = `${API_URL}/op/create_project`;
export const createProject = (data: any) => API.stdApiPOST({ data, url: createProjectUrl });

const getProjectsUrl = `${API_URL}/op/get-projects-for-user/${my_pk}`;
export const getProjects = () => API.stdApiGET({ url: getProjectsUrl, token: access_token });

const getProjectActivitiesUrl = `${API_URL}/op/get_project_activities/`;
export const getProjectActivities = (data: any) =>
  API.stdApiGET({ url: `${getProjectActivitiesUrl}${data}`, token: access_token });

const addTeamMemberUrl = `${API_URL}/op/add_team_member`;
export const addTeamMember = (data: any) => API.stdApiPOST({ data, url: addTeamMemberUrl });
