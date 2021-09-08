import { Card, Text } from '@atoms';
import { useStore } from '@container';
import { TYPE } from '@helper';
import React, { ChangeEvent, FC } from 'react';
import { Reset } from '../Reset';
import classes from './menu.module.scss';

export const Menu: FC = () => {
  const [data, store] = useStore();

  function handleClick() {
    store(TYPE.DATA.AUTO_COUNTER, !data.autoCounter);
  }

  function handleMinValue(evt: ChangeEvent<HTMLInputElement>) {
    let minValue: number = parseInt(evt.target.value, 10);
    const firstDigit = Math.floor(minValue / 1000) | 0;
    if (minValue < 1000) minValue = 1000;
    if (minValue > firstDigit * 1000 && minValue < firstDigit * 1000 + 1000) {
      minValue = firstDigit * 1000;
    }
    store(TYPE.DATA.RANGE, { ...data.range, min: minValue });
  }

  function handleMaxValue(evt: ChangeEvent<HTMLInputElement>) {
    let maxValue: number = parseInt(evt.target.value, 10);
    const firstDigit = Math.floor(maxValue / 1000) | 0;
    if (maxValue < 2000) maxValue = 2000;
    if (maxValue > firstDigit * 1000 && maxValue < firstDigit * 1000 + 1000) {
      maxValue = firstDigit * 1000;
    }
    store(TYPE.DATA.RANGE, { ...data.range, max: maxValue });
  }
  return (
    <main>
      <Card className={classes.autoCounter}>
        <button onClick={handleClick}>Auto Counter</button>
        <div>
          <Text type="label">Min value</Text>
          <input
            type="number"
            onChange={handleMinValue}
            min="1000"
            step="1000"
            list="number-list"
          />
        </div>
        <div>
          <Text type="label">Max value</Text>
          <input
            type="number"
            onChange={handleMaxValue}
            min="2000"
            step="1000"
            list="number-list"
          />
        </div>
        <datalist id="number-list">
          <option value={1000} />
          <option value={2000} />
          <option value={3000} />
          <option value={4000} />
          <option value={5000} />
          <option value={10000} />
          <option value={20000} />
        </datalist>
      </Card>
      <Card>
        <Reset />
      </Card>
    </main>
  );
};
