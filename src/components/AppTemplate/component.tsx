import { context } from '@reatom/react';
import React, { FC, Suspense } from 'react';
import RootRouter from 'routes';
import { store } from 'store';
import 'assets/scss/main.scss';

export const AppTemplate: FC = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <context.Provider value={store}>
        <RootRouter />
      </context.Provider>
    </Suspense>
  </>
);
