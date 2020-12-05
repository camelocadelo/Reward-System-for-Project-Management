import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const my_pk = localStorage.getItem('pk');
const access_token = localStorage.getItem('access_token');
// const username = localStorage.getItem('username');

const getUserInfoUrl = `${API_URL}/op/get-user-info/${my_pk}`;
export const getUserInfo = () => API.stdApiGET({ url: getUserInfoUrl, token: access_token });

const changeUserInfoUrl = `${API_URL}/op/change-user-information/${my_pk}`;
export const changeUserInfo = (data: any) =>
  API.stdApiPOST({ data, url: changeUserInfoUrl, token: access_token });

const getUserActivitiesUrl = `${API_URL}/op/get_user_activities/${my_pk}`;
export const getUserActivities = () =>
  API.stdApiGET({ url: getUserActivitiesUrl, token: access_token });
