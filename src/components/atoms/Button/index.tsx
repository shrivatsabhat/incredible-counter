import { BasicStyle } from '@helper';
import React, { forwardRef, HTMLProps } from 'react';
import style from './Button.module.scss';

interface ButtonProps extends BasicStyle, HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const className = [
      style.className,
      style.button,
      style[`size-${props.Size}`],
      style[`color-${props.Color}`],
    ].join(' ');

    return (
      <button className={className} {...props} ref={ref}>
        {props.children}
      </button>
    );
  }
);
