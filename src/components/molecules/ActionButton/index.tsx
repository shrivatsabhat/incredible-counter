import { Button } from '@atoms';
import React, { forwardRef } from 'react';
import styles from './actionButton.module.scss';

interface ActionButtoProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtoProps>(
  (props, ref) => {
    return (
      <div className={styles.actionButton}>
        <Button onClick={props.onClick} ref={ref}>
          {props.children}
        </Button>
      </div>
    );
  }
);

ActionButton.displayName = 'ActionButton';
