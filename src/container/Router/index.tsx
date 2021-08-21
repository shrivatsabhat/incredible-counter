import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from "./Navigation";
import { routes } from "./Route";

export const Routes = () => {
  return (
    <Router>
      <Nav />

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
