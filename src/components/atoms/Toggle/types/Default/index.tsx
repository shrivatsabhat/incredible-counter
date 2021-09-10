import React, { useState } from 'react';
import styles from './style.module.scss';

export const Default = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles['checkbox']}>
      <input type="checkbox" id="check_01" />
      <label htmlFor="check_01"></label>
      <span
        className={styles['indicators']}
        data-label-off="off"
        data-label-on="on"
      />
    </div>
  );
};
