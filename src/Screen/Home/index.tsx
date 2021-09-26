import React, {
  ChangeEvent,
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Card, Text } from '@atoms';
import { useStore } from '@container';
import { TYPE, COUNTER_TYPE } from '@helper';
import classes from './Home.module.scss';
import { Icon } from '@assets';
import { ActionButton } from '../../components/molecules';

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
                <Text type="label" style={{ fontWeight: 900 }}>
                  +
                </Text>
                <img alt="X" src={Icon.toggleIcon} />
                <Text type="label">−</Text>
              </>
            ),
            [COUNTER_TYPE.DEC]: (
              <>
                <Text type="label" style={{ fontWeight: 900 }}>
                  -
                </Text>
                <img alt="X" src={Icon.toggleIcon} />
                <Text type="label">+</Text>
              </>
            ),
          }[data.counterType]
        }
      </button>
      <main className={classes.main}>
        <Text type="h1">{data.counter}</Text>
      </main>
      <hr />
      <div className={classes.btnContainer}>
        {data.autoCounter ? (
          <Fragment>
            <Text type="label" htmlFor="delay">
              Delay Time: {data.delay / 1000}
            </Text>
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
            {/* <button
              className={classes.btnAction}
              onClick={handleAutoState}
              ref={ref}>
              {autoCounterState.state ? 'Stop' : 'Start'}
            </button> */}
            <ActionButton
              // className={classes.btnAction}
              onClick={handleAutoState}
              ref={ref}>
              {autoCounterState.state ? 'Stop' : 'Start'}
            </ActionButton>
          </Fragment>
        ) : (
          <Fragment>
            {/* <button
              className={classes.btnAction}
              onClick={handleAction}
              ref={ref}>
              {
                {
                  [COUNTER_TYPE.INC]: 'Increment',
                  [COUNTER_TYPE.DEC]: 'Decrement',
                }[data.counterType]
              }
            </button> */}
            <ActionButton onClick={handleAction} ref={ref}>
              {
                {
                  [COUNTER_TYPE.INC]: 'Increment',
                  [COUNTER_TYPE.DEC]: 'Decrement',
                }[data.counterType]
              }
            </ActionButton>
          </Fragment>
        )}
      </div>
    </Card>
  );
};
