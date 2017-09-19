
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import ProfileSettings from './Containers/ProfileSettings'
import Profile from './Containers/Profile'

export default () => {
  const routes = (
    <Route path="">
      <Route path="settings">
        <Route path="profile" component={ProfileSettings} />
      </Route>
      <Route path=":username" component={Profile} />
      <Route path=":username/:slug" component={Profile} />
      <Route path=":username/:slug/:pageNumber" component={Profile} />
    </Route>
  );
  return routes;
};
