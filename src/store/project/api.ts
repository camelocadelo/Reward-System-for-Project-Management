import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

const createProjectUrl = `${API_URL}/op/create_project`;
export const createProject = (data: any) => API.stdApiPOST({ data, url: createProjectUrl });

const getProjectsUrl = `${API_URL}/op/get-projects-for-user`;
export const getProjects = (pk: any) =>
  API.stdApiGET({ url: `${getProjectsUrl}/${pk}`, token: access_token });

const getProjectActivitiesUrl = `${API_URL}/op/get_project_activities/`;
export const getProjectActivities = (data: any) =>
  API.stdApiGET({ url: `${getProjectActivitiesUrl}${data}`, token: access_token });

const addTeamMemberUrl = `${API_URL}/op/add_team_member`;
export const addTeamMember = (data: any) => API.stdApiPOST({ data, url: addTeamMemberUrl });

const getProjectMembersUrl = `${API_URL}/op/get-users-of-project/`;
export const getProjectMembers = (projectPk: number) =>
  API.stdApiGET({ url: `${getProjectMembersUrl}${projectPk}`, token: access_token });

const deleteProjectUrl = `${API_URL}/op/delete-project/`;
export const deleteProject = (projectPk: number) =>
  API.stdApiDELETE({ url: `${deleteProjectUrl}${projectPk}`, token: access_token });

const removeTeamMemberUrl = `${API_URL}/op/remove_team_member`;
export const removeTeamMember = (data: any) => API.stdApiDELETE({ data, url: removeTeamMemberUrl });

const setTeamLeadUrl = `${API_URL}/op/set_team_lead`;
export const setTeamLead = (data: any) => API.stdApiPOST({ data, url: setTeamLeadUrl });

const getStatisticsUrl = `${API_URL}/op/get-statistics/`;
export const getStatistics = (data: any) =>
  API.stdApiGET({
    url: `${getStatisticsUrl}${data.pk}?time_frame=${data.time_frame}`,
    token: access_token,
  });

const getProjectBindInfoUrl = `${API_URL}/op/get-info-project`;
export const getProjectBindInfo = (id: any) =>
  API.stdApiGET({
    url: `${getProjectBindInfoUrl}/${id}`,
    token: access_token,
  });

const reducePointsUrl = `${API_URL}/op/reduce-points`;
export const reducePoints = (data: any) => API.stdApiPOST({ data, url: reducePointsUrl });

const deleteTeamLeadUrl = `${API_URL}/op/delete_team_lead`;
export const deleteTeamLead = (data: any) => API.stdApiDELETE({ data, url: deleteTeamLeadUrl });
