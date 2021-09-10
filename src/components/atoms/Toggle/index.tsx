import React, { FC, HTMLProps } from 'react';
import styles from './Toggle.module.scss';
import { BulbSwitch, OnOff, Default } from './types';

export enum SwitchTypes {
  'on-off',
  'toggle-theme',
  'default',
}

interface SwitchTypesProps {
  switchType: SwitchTypes;
}

export interface ToggleProps
  extends HTMLProps<HTMLInputElement>,
    SwitchTypesProps {
  className?: string;
}

const ToggleType = (type: SwitchTypes) => {
  switch (type) {
    case SwitchTypes['toggle-theme']:
      return <BulbSwitch />;
    case SwitchTypes['on-off']:
      return <OnOff />;
    case SwitchTypes.default:
    default:
      return <Default />;
  }
};

export const Toggle: FC<ToggleProps> = props => {
  return <div className={styles['toggle']}>{ToggleType(props.switchType)}</div>;
};
