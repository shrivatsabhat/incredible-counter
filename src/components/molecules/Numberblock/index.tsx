import React, { FC, useEffect, useState } from 'react';
// import styles from './NumberBlock.module.scss';
import { NumberBlock as NB, NumberBlockProps as NBProps } from '@atoms';
import { IsValid } from '@helper';

export type NumberBlockProps = Omit<
  NBProps,
  'increment' | 'decrement' | 'isFocus' | 'onFocus' | 'step'
>;

export const NumberBlock: FC<NumberBlockProps> = props => {
  const [value, setValue] = useState<number>(
    IsValid(props.value) ? props.value ?? 0 : 0
  );
  const [isFocus, setIsFocus] = useState<boolean>(false);

  useEffect(() => {
    IsValid(props.value) ? setValue(props.value ?? 0) : setValue(0);
  }, [props.value, props.onChange]);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  const onFocus = (evt: React.FocusEvent) => {
    console.log('onFocus', evt);
    setIsFocus(!isFocus);
  };

  return (
    <NB
      {...props}
      increment={increment}
      decrement={decrement}
      value={value}
      onFocus={onFocus}
      isFocus={isFocus}
    />
  );
};
