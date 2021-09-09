import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './Navigation';
import { routes } from './Route';

export const Routes: FC = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.main />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export * from './Route';
