import * as axios from 'store/axios';
import { AxiosResponse } from 'axios';
import { API_URL } from 'core/server';

import { RegisterResponse } from 'store/register/types';

export const register = (
  email: string,
  username: string,
  password: string,
  first_name: string,
  last_name: string
): Promise<AxiosResponse<RegisterResponse>> =>
  axios.authRequest.post(API_URL + '/api/auth/register', {
    email,
    username,
    password,
    first_name,
    last_name,
  });
