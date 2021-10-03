import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Navigation';
import { routes } from './Route';

export const Routes: FC = () => {
  return (
    <Router>
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
export * from './Navigation';
