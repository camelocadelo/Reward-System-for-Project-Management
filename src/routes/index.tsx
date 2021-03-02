/* TODO: add protected.tsx if user is not logged in */
import React, { FC, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/component'));
const ProjectPage = lazy(() => import('pages/ProjectPage/component'));
const ProfilePage = lazy(() => import('pages/ProfilePage/component'));
const ProjectDetailPage = lazy(() => import('pages/ProjectDetailPage/component'));
const MarketplaceAdminList = lazy(() => import('pages/MarketplaceAdmin/ProductsList/component'));

const RootRouter: FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/projects" component={ProjectPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/projects/:id" component={ProjectDetailPage} />
        <Route path="/admin-marketplace" component={MarketplaceAdminList} />
      </Route>
    </Switch>
  </Router>
);

export default RootRouter;
