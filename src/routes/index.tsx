import React, { FC, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));

const RootRouter: FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Route exact={true} path="/" component={HomePage} />
      </Route>
    </Switch>
  </Router>
);

export default RootRouter;
