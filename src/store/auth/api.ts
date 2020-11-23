import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const loginUrl = `${API_URL}/api/auth/login`;
export const getUser = (data: any) => API.stdApiPOST({ data, url: loginUrl });

const registerUrl = `${API_URL}/api/auth/register`;
export const register = (data: any) => API.stdApiPOST({ data, url: registerUrl });
