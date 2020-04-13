import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from './components/DashBoard';
import { PageNotFound } from './PageNotFound';
import RegionDetail from './components/RegionDetail';
import { Row } from './Layout';

export default function Router() {
  return (
    <Switch>
      <Route
        path="/dashBoard/:userId"
        render={props => {
          return (
            <Row>
              <Dashboard />
              <RegionDetail regionId={476} />
            </Row>
          );
        }}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
