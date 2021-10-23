import { Slider, SwitchTypes, Toggle } from '@atoms';
import { Navbar } from '@container';
import { Dropdown } from '@molecules';
import React, { Fragment } from 'react';

export const About = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar />

      <h1>About</h1>
      {/* <Dropdown data={[{ key: 1, payload: 'one' }]} /> */}
      <Toggle switchType={SwitchTypes['toggle-theme']} checked={true} />
      <hr />
      <Toggle switchType={SwitchTypes['on-off']} checked={true} />
      <hr />
      <Toggle switchType={SwitchTypes['default']} checked={true} />
      <hr />
      <Slider />
    </Fragment>
  );
};
