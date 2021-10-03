import React, { FC, HTMLProps } from 'react';
import styles from './Toggle.module.scss';
import { BulbSwitch, OnOff, Default, DefaultProps } from './types';

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
    SwitchTypesProps,
    DefaultProps {
  className?: string;
}

const ToggleType = (type: SwitchTypes, props: ToggleProps): JSX.Element => {
  switch (type) {
    case SwitchTypes['toggle-theme']:
      return <BulbSwitch {...props} />;
    case SwitchTypes['on-off']:
      return <OnOff {...props} />;
    case SwitchTypes.default:
    default:
      return <Default {...props} />;
  }
};

export const Toggle: FC<ToggleProps> = props => {
  return (
    <div className={styles['toggle']}>
      {ToggleType(props.switchType, props)}
    </div>
  );
};
