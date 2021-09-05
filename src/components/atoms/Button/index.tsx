import { BasicStyle } from '@helper';
import React, { forwardRef, HTMLProps } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends BasicStyle, HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const className = [
      styles.button,
      styles.className,
      styles[`size-${props.Size}`],
      styles[`color-${props.Color}`],
    ].join(' ');

    return (
      <button className={className} {...props} ref={ref}>
        {props.children}
      </button>
    );
  }
);
