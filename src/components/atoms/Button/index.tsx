import { MouseEventHandler as EventHandler, BasicStyle } from '@helper';
import React, { MouseEventHandler, ReactChild, ReactChildren } from 'react';
import style from './Button.module.scss';

interface ButtonProps extends BasicStyle, EventHandler {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = props => {
  const className = [
    style.className,
    style.button,
    style[`size-${props.size}`],
    style[`color-${props.color}`],
  ].join(' ');
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};
