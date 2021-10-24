import React, { FC, useState } from 'react';
import styles from './style.module.scss';

export interface DefaultProps {
  disabled?: boolean;
  ban?: boolean;
  handleClick?: () => void;
}

export const Default: FC<DefaultProps> = ({
  disabled = false,
  ban = false,
  handleClick,
}) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    handleClick && handleClick();
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
        onChange={handleToggle}
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
