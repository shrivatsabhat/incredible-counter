import React, { FC } from 'react';
import styles from './Numberblock.module.scss';
import { Icon } from '@assets';

export interface NumberBlockProps {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  step?: number;
  label?: string;
  style?: React.CSSProperties;
  increment?: CallableFunction;
  decrement?: CallableFunction;
  isFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
}

export const NumberBlock: FC<NumberBlockProps> = props => {
  const className = [styles['numberBlock']].join(' ');
  const decrement = (evt: React.MouseEvent<HTMLDivElement>) =>
    props.decrement && props.decrement(evt);
  const increment = (evt: React.MouseEvent<HTMLDivElement>) =>
    props.increment && props.increment(evt);
  return (
    <div className={styles.container} style={props.style}>
      <label className={styles.label}>{props.label ?? ''}</label>
      <div className={className}>
        <div
          className={styles.slider}
          style={{ transform: `scale(${props.isFocus ? 1.5 : 1})` }}
          onFocus={props.onFocus}>
          <div
            className={styles.arrowUp}
            onClick={props.increment && increment}>
            <img src={Icon.triangle} />
          </div>
          <div
            className={styles.arrowDown}
            onClick={props.decrement && decrement}>
            <img src={Icon.triangle} />
          </div>
        </div>
        <div className={styles.value}>
          <input
            className={styles.number}
            type="number"
            step={props.step}
            onChange={props.onChange}
            value={props.value ?? 0}
          />
        </div>
      </div>
    </div>
  );
};
