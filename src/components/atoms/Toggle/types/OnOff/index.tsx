import React, { useState } from 'react';
import styles from './style.module.scss';

export const OnOff = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const style = { '--radius': '8rem' } as React.CSSProperties;

  return (
    <div className={styles['toggle']} style={style}>
      <input
        type="checkbox"
        id="toggle"
        onChange={handleClick}
        checked={toggle}
      />
      <label htmlFor="toggle"></label>
    </div>
  );
};
