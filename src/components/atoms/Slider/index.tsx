import React from 'react';
import classes from './Slider.module.scss';

export type SliderProps = {
  width?: React.CSSProperties;
} & React.ComponentProps<'input'>;

export const Slider: React.FC<SliderProps> = ({ width, ...props }) => {
  return (
    <div className={classes['slider']} style={{ width }}>
      <input type="range" {...props} className={classes.inputRange} />
    </div>
  );
};
