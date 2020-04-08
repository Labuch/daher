import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from './components/DashBoard'; 
import { PageNotFound } from './PageNotFound';
import RegionDetail from './components/RegionDetail';

export default function Router() {
  return (
    <Switch>
      <Route path="/dashBoard/:userId" render={(props) => {
      return <div><Dashboard/><RegionDetail/></div>; 
      }}/>
      <Route component={PageNotFound} />
    </Switch>
  );
}