import { declareAction } from '@reatom/core';

import * as api from 'store/register/api';

import { RegisterRequest, RegisterResponse } from 'store/register/types/Register';

export const registerFail = declareAction<string>();
export const registerSuccess = declareAction<RegisterResponse>();
export const registerRequest = declareAction<RegisterRequest>(
  async (payload, store) =>
    await api
      .register(
        payload.email,
        payload.username,
        payload.password,
        payload.first_name,
        payload.last_name
      )
      .then((res) => {
        console.log('the res of regster success: ', res);
        store.dispatch(registerSuccess(res.data));
      })
      .catch((err: any) =>
        store.dispatch(registerFail(err.response?.data?.errors || ['serverError']))
      )
);
