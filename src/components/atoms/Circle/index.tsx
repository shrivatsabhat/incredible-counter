import { BasicStyle, MouseEventHandler } from '@helper';
import React from 'react';
import classes from './Circle.module.scss';

export interface CircleProps extends BasicStyle, MouseEventHandler {
  radius?: number | string;
  orient?: 'top' | 'center' | 'topLeft' | 'topRight' | 'bottom';
}

export const Circle: React.FC<CircleProps> = props => {
  const className = [
    classes.circle,
    classes[`circle-${props.orient}}`],
    classes[`size-${props.Size}`],
    classes[`color-${props.Color}`],
  ].join(' ');
  const style: React.CSSProperties = {
    width: `${props.radius}`,
    height: `${props.radius}`,
  };
  return (
    <div onClick={props.onClick} className={className} style={style}>
      {props.children}
    </div>
  );
};
