import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

/*  TODO: add the correct endpoint */
const sendGithubCodeUrl = `${API_URL}/github/sendCode`;
export const sendGithubCode = (data: any) =>
  API.stdApiPOST({
    url: sendGithubCodeUrl,
    token: access_token,
    data,
  });
