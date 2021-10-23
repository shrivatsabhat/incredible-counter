import React, { ChangeEvent, FC } from 'react';
import styles from './NumberBlock.module.scss';
import { Icon } from '@assets';

export interface NumberBlockProps {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const NumberBlock: FC<NumberBlockProps> = props => {
  const className = [styles['numberBlock']].join(' ');
  return (
    <div className={className}>
      <div className={styles.slider}>
        <div className={styles.arrowUp}>
          <img src={Icon.triangle} />
        </div>
        <div className={styles.arrowDown}>
          <img src={Icon.triangle} />
        </div>
      </div>
      <div className={styles.value}>
        <input
          className={styles.number}
          type="number"
          onChange={props.onChange}
          value={props.value ?? 0}
        />
      </div>
    </div>
  );
};
