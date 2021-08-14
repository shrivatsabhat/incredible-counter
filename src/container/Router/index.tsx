import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./Route";

export const Routes = () => {
  return (
    <Router>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export * from "./Route";
