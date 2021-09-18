import React, { FC, useState } from 'react';
import styles from './style.module.scss';

export interface DefaultProps {
  disabled?: boolean;
  ban?: boolean;
}

export const Default: FC<DefaultProps> = ({
  disabled = false,
  ban = false,
}) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const className = [
    styles['checkbox'],
    ban ? styles['ban'] : '',
    disabled || ban ? styles['disabled'] : '',
    toggle ? styles['checked'] : '',
  ].join(' ');

  return (
    <div className={className}>
      <input
        type={'checkbox'}
        id={'check_box_default'}
        checked={toggle}
        disabled={disabled || ban}
        onChange={handleClick}
      />
      <label htmlFor={'check_box_default'} />
      {/* <span
        className={styles['indicators']}
        data-label-off="off"
        data-label-on="on"
      /> */}
    </div>
  );
};
