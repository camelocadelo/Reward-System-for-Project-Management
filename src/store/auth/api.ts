import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const baseUrl = `${API_URL}/api/auth/login`;

export const getUser = (data: any) => API.stdApiPOST({ data, url: baseUrl });
