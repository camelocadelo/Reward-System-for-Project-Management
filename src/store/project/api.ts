import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

const createProjectUrl = `${API_URL}/op/create_project`;
export const createProject = (data: any) => API.stdApiPOST({ data, url: createProjectUrl });

const getProjectsUrl = `${API_URL}/op/get-projects-for-user/${my_pk}`;
export const getProjects = () => API.stdApiGET({ url: getProjectsUrl, token: access_token });
