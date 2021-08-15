import React, { FC } from "react";
import { Card } from "@atoms";
import { useStore } from "@container";
import { TYPE, COUNTER_TYPE } from "@helper";
import classes from "./Home.module.scss";

export const Home: FC = () => {
  const [data, store] = useStore();

  const handleToggle = () => {
    if (data.counterType === COUNTER_TYPE.INC)
      store(TYPE.DATA.COUNTER_TYPE, COUNTER_TYPE.DEC);
    if (data.counterType === COUNTER_TYPE.DEC)
      store(TYPE.DATA.COUNTER_TYPE, COUNTER_TYPE.INC);
  };

  const handleAction = () => {
    if (data.counterType === COUNTER_TYPE.INC)
      store(TYPE.DATA.COUNTER, data.counter + 1);
    if (data.counterType === COUNTER_TYPE.DEC)
      store(TYPE.DATA.COUNTER, data.counter - 1);
  };

  return (
    <Card className={classes.container}>
      <button className={classes.toggle} onClick={handleToggle}>
        toggle
      </button>
      <main className={classes.main}>
        <h1>{data.counter}</h1>
      </main>
      <hr />
      <div className={classes.btnContainer}>
        <button className={classes.btnAction} onClick={handleAction}>
          {
            {
              [COUNTER_TYPE.INC]: "Increment",
              [COUNTER_TYPE.DEC]: "Decrement",
            }[data.counterType]
          }
        </button>
      </div>
    </Card>
  );
};
