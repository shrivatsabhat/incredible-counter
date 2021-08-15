import { useStore } from "@container";
import { KEYS, TYPE, useCookie } from "@helper";
import { _state as initialState } from "@container";
import React, { FC, Fragment } from "react";

export const Reset: FC = () => {
  const [, store, hardReset] = useStore();
  const [, , clear] = useCookie(KEYS.key_data, initialState);

  function handleCounterReset() {
    store(TYPE.DATA.COUNTER, 0);
  }

  function handleClearMemory() {
    hardReset(initialState);
    clear(KEYS.key_data);
  }

  return (
    <Fragment>
      <div>
        <button onClick={handleCounterReset}>Reset Counter</button>
      </div>
      <div>
        <button onClick={handleClearMemory}>Clear Memory</button>
      </div>
    </Fragment>
  );
};
