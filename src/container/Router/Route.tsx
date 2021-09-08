import { Home, Menu as Option, About } from '@screen';
import React from 'react';

export const routes = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    exact: true,
    sidebar: <div>Home</div>,
    main: Home,
  },
  {
    id: 2,
    name: 'Option',
    path: '/menu',
    sidebar: <div>Option</div>,
    main: Option,
  },
  {
    id: 3,
    name: 'About',
    path: '/about',
    sidebar: <div>About</div>,
    main: About,
  },
];
