import { Card } from "@atoms";
import { useStore } from "@container";
import { TYPE } from "@helper";
import React, { Fragment, ChangeEvent } from "react";
import { Reset } from "../Reset";

export const Menu = () => {
  const [data, store] = useStore();
  function handleClick() {
    store(TYPE.DATA.AUTO_COUNTER, !data.autoCounter);
  }
  function handleMinValue(evt: ChangeEvent<HTMLInputElement>) {
    const minValue = parseInt(evt.target.value, 10);
    console.log(minValue / 1000);
  }
  function handleMaxValue(evt: ChangeEvent<HTMLInputElement>) {
    console.log();
  }
  return (
    <Fragment>
      Menu
      <Fragment>
        <button onClick={handleClick}>Auto Counter</button>
        <input
          type="number"
          onChange={handleMinValue}
          min="1000"
          step="1000"
          list="number-list"
        />
        <input
          type="number"
          onChange={handleMaxValue}
          min="2000"
          step="1000"
          list="number-list"
        />
        <datalist id="number-list">
          <option value={1000} />
          <option value={2000} />
          <option value={3000} />
          <option value={4000} />
          <option value={5000} />
          <option value={10000} />
          <option value={20000} />
        </datalist>
      </Fragment>
      <Card>
        <Reset />
      </Card>
    </Fragment>
  );
};
