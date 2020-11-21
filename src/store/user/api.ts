import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const my_pk = localStorage.getItem('pk');
const access_token = localStorage.getItem('access_token');

const getUserInfoUrl = `${API_URL}/op/get-user-info/${my_pk}`;
export const getUserInfo = () => API.stdApiGET({ url: getUserInfoUrl, token: access_token });

const changeUserInfoUrl = `${API_URL}/op/change-user-information/${my_pk}`;
export const changeUserInfo = (data: any) =>
  API.stdApiPOST({ data, url: changeUserInfoUrl, token: access_token });
