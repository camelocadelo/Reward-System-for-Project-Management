import { declareAtom } from '@reatom/core';
import { RemoteData } from 'remote-data-ts';
import { accessTokenKey, AccessTokenState } from 'store/auth/types';
// import * as axios from 'store/axios';

import * as actions from './actions';

export const login = declareAtom<RemoteData<AccessTokenState, string>>(
  RemoteData.notAsked(),
  (on) => [
    on(actions.loginRequest, () => RemoteData.loading()),
    on(actions.loginFail, (_, payload) => RemoteData.failure(payload)),
    on(actions.loginSuccess, (_, payload) => {
      const { tokens: accessToken } = payload;
      localStorage.setItem(accessTokenKey, accessToken);
      return RemoteData.success({
        accessToken,
      });
    }),
  ]
);
