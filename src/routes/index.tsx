/* TODO: add protected.tsx if user is not logged in */
import React, { FC, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/component'));
const ProjectPage = lazy(() => import('pages/ProjectPage/component'));
const ProfilePage = lazy(() => import('pages/ProfilePage/component'));
const ProjectDetailPage = lazy(() => import('pages/ProjectDetailPage/component'));
const MarketplaceAdminList = lazy(() => import('pages/MarketplaceAdmin/ProductsList/component'));
const ProductCreationEdition = lazy(
  () => import('pages/MarketplaceAdmin/ProductCreationEdition/component')
);
const MarketplaceUserPage = lazy(() => import('pages/MarketplaceUser/component'));
const CartPage = lazy(() => import('pages/CartPages/component'));
const GithubAuthPage = lazy(() => import('pages/GithubAuthPage/component'));

const RootRouter: FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/projects" component={ProjectPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/projects/:id" component={ProjectDetailPage} />
        <Route exact={true} path="/admin-marketplace" component={MarketplaceAdminList} />
        <Route
          exact={true}
          path="/admin-marketplace/product-creation"
          component={ProductCreationEdition}
        />
        <Route path="/marketplace" component={MarketplaceUserPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/githubAuth" component={GithubAuthPage} />
      </Route>
    </Switch>
  </Router>
);

export default RootRouter;
