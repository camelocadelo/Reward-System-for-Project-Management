// import { context } from '@reatom/react';
import React, { FC, Suspense } from 'react';
import RootRouter from 'routes';
import { initStore } from 'store/index';
import { Provider } from 'react-redux';
import 'assets/scss/main.scss';

export const AppTemplate: FC = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={initStore()}>
        <RootRouter />
      </Provider>
    </Suspense>
  </>
);
