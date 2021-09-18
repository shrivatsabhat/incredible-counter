import { SwitchTypes, Toggle } from '@atoms';
import React, { Fragment } from 'react';

export const About = (): JSX.Element => {
  return (
    <Fragment>
      <h1>About</h1>
      <Toggle switchType={SwitchTypes['toggle-theme']} checked={true} />
      <hr />
      <Toggle switchType={SwitchTypes['on-off']} checked={true} />
      <hr />
      <Toggle switchType={SwitchTypes['default']} checked={true} />
    </Fragment>
  );
};
