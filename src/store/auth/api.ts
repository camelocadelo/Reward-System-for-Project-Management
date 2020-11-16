import * as axios from 'store/axios';
import { AxiosResponse } from 'axios';
import { API_URL } from 'core/server';

import { LoginResponse } from 'store/auth/types';

export const login = (email: string, password: string): Promise<AxiosResponse<LoginResponse>> =>
  axios.authRequest.post(API_URL + '/api/auth/login', {
    email,
    password,
  });
