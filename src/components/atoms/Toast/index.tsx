import React, { FC } from 'react';
import styles from './Toast.module.scss';

export enum MsgType {
  INFO = 'info',
  ERROR = 'error',
  WARN = 'warn',
}

export interface ToastProps {
  type: MsgType;
  tag?: string | JSX.Element;
}

export const Toast: FC<ToastProps> = props => {
  const className = [styles['toast'], styles[`msgType-${props.type}`]].join(
    ' '
  );
  return (
    <section className={styles['toastContainer']}>
      <div className={className}>
        <div className={styles['tag']}>{props.tag || props.type}</div>
        {!!props.children && <div className={styles['separator']} />}
        <div className={styles['msg']}>{props.children}</div>
      </div>
    </section>
  );
};
