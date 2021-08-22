import React, {
  ChangeEvent,
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card } from '@atoms';
import { useStore } from '@container';
import { TYPE, COUNTER_TYPE } from '@helper';
import classes from './Home.module.scss';
import { Icon } from '@assets';

export const Home: FC = () => {
  const [data, store] = useStore();
  const [autoCounterState, setAutoCounterState] = useState({ state: false });

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

  const handleAutoState = () => {
    setAutoCounterState({
      ...autoCounterState,
      state: !autoCounterState.state,
    });
  };

  const handleDelay = (evt: ChangeEvent<HTMLInputElement>) => {
    store(TYPE.DATA.DELAY, evt.target.value);
  };

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (data.autoCounter && autoCounterState.state)
      timer = setInterval(handleAction, data.delay);
    return () => clearInterval(timer);
  }, [data.counter, autoCounterState.state]);

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    null !== ref.current && ref.current.focus();
  }, []);

  return (
    <Card className={classes.container}>
      <button className={classes.toggle} onClick={handleToggle} type="submit">
        {
          {
            [COUNTER_TYPE.INC]: (
              <>
                <label style={{ fontWeight: 900 }}>+</label>
                <img alt="X" src={Icon.toggleIcon} />
                <label>−</label>
              </>
            ),
            [COUNTER_TYPE.DEC]: (
              <>
                <label style={{ fontWeight: 900 }}>-</label>
                <img alt="X" src={Icon.toggleIcon} />
                <label>+</label>
              </>
            ),
          }[data.counterType]
        }
      </button>
      <main className={classes.main}>
        <h1>{data.counter}</h1>
      </main>
      <hr />
      <div className={classes.btnContainer}>
        {data.autoCounter ? (
          <Fragment>
            <label htmlFor="delay">Delay Time: {data.delay / 1000}</label>
            <input
              id="delay"
              className={classes.btnAction}
              type="range"
              min={String(data.range.min)}
              max={String(data.range.max)}
              step={String(data.range.step)}
              onChange={handleDelay}
              value={data.delay}
            />
            <button
              className={classes.btnAction}
              onClick={handleAutoState}
              ref={ref}>
              {autoCounterState.state ? 'Stop' : 'Start'}
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button
              className={classes.btnAction}
              onClick={handleAction}
              ref={ref}>
              {
                {
                  [COUNTER_TYPE.INC]: 'Increment',
                  [COUNTER_TYPE.DEC]: 'Decrement',
                }[data.counterType]
              }
            </button>
          </Fragment>
        )}
      </div>
    </Card>
  );
};
