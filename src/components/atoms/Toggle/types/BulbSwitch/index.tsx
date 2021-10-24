import React from 'react';
import styles from './style.module.scss';

export const BulbSwitch = () => {
  return (
    <div className={styles['switch']}>
      <input type="checkbox" name="toggle" />
      <label htmlFor="toggle">
        <i className={styles['bulb']}>
          <span className={styles['bulb-center']}></span>
          <span className={styles['filament-1']}></span>
          <span className={styles['filament-2']}></span>
          <span className={styles['reflections']}>
            <span></span>
          </span>
        </i>
      </label>
    </div>
  );
};
