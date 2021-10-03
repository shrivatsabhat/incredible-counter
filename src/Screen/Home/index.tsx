import React, {
  ChangeEvent,
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card, SwitchTypes, Text, Toggle } from '@atoms';
import { useStore } from '@container';
import { TYPE, COUNTER_TYPE } from '@helper';
import clasess from './Home.module.scss';
import { ActionButton } from '../../components/molecules';
import { Navbar } from '../../container/Router';

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
    <div className={clasess['container']}>
      <div className={clasess['container_header']}>
        <Navbar />
      </div>
      <Card className={clasess['container_counter']}>
        <div className={clasess['count']}>
          <Text type="h1">{data.counter}</Text>
        </div>
        <div className={clasess['toggle']}>
          <Toggle switchType={SwitchTypes.default} handleClick={handleToggle} />
        </div>
      </Card>
      <div className={clasess['container_control']}>
        {data.autoCounter ? (
          <Fragment>
            <Card className={clasess['action-control']}>
              <Text type="label" htmlFor="delay">
                Delay Time: {data.delay / 1000}
              </Text>
              <input
                id="delay"
                type="range"
                min={String(data.range.min)}
                max={String(data.range.max)}
                step={String(data.range.step)}
                onChange={handleDelay}
                value={data.delay}
              />
            </Card>
            <Card className={clasess['action-btn']}>
              <ActionButton onClick={handleAutoState} ref={ref}>
                {autoCounterState.state ? 'Stop' : 'Start'}
              </ActionButton>
            </Card>
          </Fragment>
        ) : (
          <div className={clasess['action-btn']}>
            <ActionButton onClick={handleAction} ref={ref}>
              {
                {
                  [COUNTER_TYPE.INC]: '+',
                  [COUNTER_TYPE.DEC]: '-',
                }[data.counterType]
              }
            </ActionButton>
          </div>
        )}
      </div>
    </div>
  );
};
