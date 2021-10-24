import React, { FC } from 'react';
import styles from './Input.module.scss';

type ReactInput = Omit<React.ComponentProps<'input'>, 'children'>;

export interface InputProps extends ReactInput {
  className?: string;
}

export const Input: FC<InputProps> = props => {
  const className = [styles['input'], props.className].join(' ');
  return <input className={className} {...props} />;
};
