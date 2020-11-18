import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const baseUrl = `${API_URL}/op/get-user-info/4`;

const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2MTMzMzIzLCJqdGkiOiIxODJlM2E5ZTUxM2Q0ZTYyOTFkMzViNTgwMjBkOTVjMCIsInVzZXJfaWQiOjJ9.Md8F-7xkP4SFWX7FHOcQPuHZtK88e0odXKt76cR_85Q';

export const getUserInfo = () => API.stdApiGET({ url: baseUrl, token: access_token });
