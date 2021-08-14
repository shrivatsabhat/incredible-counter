import React, { FC } from 'react'
import styles from './increment.module.scss';

export const Increment: FC<any> = ({ onClick }) => {
  return <div onClick={onClick} className={styles.increment}>
    <p>+</p>
  </div>
}