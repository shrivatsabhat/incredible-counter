import { NumberBlock, Slider, SwitchTypes, Toggle } from '@atoms';
import { Navbar } from '@container';
import { Dropdown } from '@molecules';
import React, { Fragment } from 'react';

export const About = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar />

      <h1>About</h1>
    </Fragment>
  );
};
