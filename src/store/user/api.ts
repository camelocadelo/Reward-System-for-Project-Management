import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const my_pk = localStorage.getItem('pk');
const access_token = localStorage.getItem('access_token');

const baseUrl = `${API_URL}/op/get-user-info/${my_pk}`;

export const getUserInfo = () => API.stdApiGET({ url: baseUrl, token: access_token });
