import { declareAction } from '@reatom/core';

import * as api from 'store/auth/api';

import { LoginRequest, LoginResponse } from 'store/auth/types/Login';

export const loginFail = declareAction<string>();
export const loginSuccess = declareAction<LoginResponse>();
export const loginRequest = declareAction<LoginRequest>(
  async (payload, store) =>
    await api
      .login(payload.email, payload.password)
      .then((res) => {
        console.log('the res: ', res);
        store.dispatch(loginSuccess(res.data));
        console.log('huehueheu');
      })
      .catch((err: any) => store.dispatch(loginFail(err.response?.data?.errors || ['serverError'])))
);
