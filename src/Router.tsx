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
          const { userId } = props.match.params;
          return (
            <Row>
              <Dashboard />
              <RegionDetail regionId={parseInt(userId)} />
            </Row>
          );
        }}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
