import React, { Fragment, useEffect } from "react";
import { Button, Text, Card, Circle } from "@atoms";
import classes from "./App.module.scss";
import { useStore } from "../Store";
import { TYPE } from "@helper";
import { Increment } from "@molecules";

export const App = () => {
  const [data, store] = useStore();
  const handleIncrement = () => store(TYPE.DATA.COUNTER, data.counter + 1);
  const handleDecrement = () => store(TYPE.DATA.COUNTER, data.counter - 1);
  const resetCounter = () => store(TYPE.DATA.COUNTER, 0);
  const toggleOption = () => store(TYPE.DATA.OPTION, !data.option);
  useEffect(() => {}, [data.counter]);
  return (
    <Fragment>
      <section>
        {true && (
          <Card>
            <h1>LOGO</h1>
          </Card>
        )}
        <Card>
          <Card>
            <div className={classes["header"]}>
              <h1>{data.counter}</h1>
            </div>
          </Card>
          <main className={classes["main"]}>
            <div
              className={[
                classes["inc-circle"],
                classes["disable-select"],
              ].join(" ")}
              onClick={handleIncrement}
            >
              <p
                className={[
                  classes["inc-text"],
                  classes["disable-select"],
                ].join(" ")}
              >
                <>+</>
              </p>
            </div>
            <div className={classes["option"]} onClick={toggleOption}>
              <div className={classes["option-box"]}>
                <div className={classes["dot"]} />
                <div className={classes["dot"]} />
                <div className={classes["dot"]} />
              </div>
            </div>
          </main>
        </Card>
        {data.option && (
          <>
            <Card className={classes["options-container"]}>
              <div className={classes["container"]}>
                <header>Option</header>
              </div>
              <section className={classes["main"]}>
                <Card className={classes["option-item"]}>
                  <div
                    className={classes["option-item"]}
                    onClick={() => {
                      resetCounter();
                      toggleOption();
                    }}
                  >
                    Reset
                  </div>
                </Card>
              </section>
            </Card>
          </>
        )}
        {/* <Card>
        {data.option && <h3>Option</h3>}
        <ul>
          <li>Stop at zero</li>
          <li>Toggle Button</li>
          <li>Reset</li>
          <li>Auto</li>
        </ul>
      </Card>
      <Card>
        <h3>Auto</h3>
        <Card>Increment/Decrement Toggle Button</Card>
        <Card>Counter Auto</Card>
      </Card> */}
      </section>
    </Fragment>
  );
};
