import { Card, Text } from '@atoms';
import { routes } from './Route';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import classes from './styles.module.scss';
import Types from '../../Types';

export function Navbar(): JSX.Element {
  return (
    <Card className={classes.container}>
      <span>
        <Link to={'/'}>
          <Text type="p">{Types.Header.logo}</Text>
        </Link>
      </span>
      {routes.map(route => (
        <span key={route.id}>
          <Link
            to={route.path}
            exact={route.exact}
            className={classes.link}
            activeClassName={classes.activeLink}>
            {route.name}
          </Link>
        </span>
      ))}
    </Card>
  );
}
