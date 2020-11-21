import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const baseUrl = `${API_URL}/op/create_project`;

export const createProject = (data: any) => API.stdApiPOST({ data, url: baseUrl });
