import { declareAtom } from '@reatom/core';
import { RemoteData } from 'remote-data-ts';
import { RegisterResponse } from 'store/register/types';
// import * as axios from 'store/axios';

import * as actions from './actions';

export const register = declareAtom<RemoteData<RegisterResponse, string>>(
  RemoteData.notAsked(),
  (on) => [
    on(actions.registerRequest, () => RemoteData.loading()),
    on(actions.registerFail, (_, payload) => RemoteData.failure(payload)),
    on(actions.registerSuccess, (_, payload) => RemoteData.success(payload)),
  ]
);
