import { useStore } from '@container';
import { KEYS, TYPE, useCookie } from '@helper';
import { _state as initialState } from '@container';
import React, { FC, Fragment } from 'react';
import classes from './reset.module.scss';

export const Reset: FC = () => {
  const [, store, hardReset] = useStore();
  const [, , clear] = useCookie(KEYS.key_data, initialState);

  function handleCounterReset() {
    confirm('Are you sure to reset Counter?') && store(TYPE.DATA.COUNTER, 0);
  }

  function handleClearMemory() {
    if (confirm('Are you sure to reset memory?')) {
      hardReset(initialState);
      clear(KEYS.key_data);
    }
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <button onClick={handleCounterReset}>Reset Counter</button>
      </div>
      <div className={classes.container}>
        <button onClick={handleClearMemory}>Clear Memory</button>
      </div>
    </Fragment>
  );
};
