import React, { FC, Fragment, useState } from 'react';
import classes from './Dropdown.module.scss';

type DataType = { key: string | number; payload: string };

interface DropdownTabProps {
  image?: React.ImgHTMLAttributes<HTMLImageElement>;
}

interface DropdownHeadProps {
  handleToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DropdownMenuProps {
  data: DataType[];
  isExpand: boolean;
  handleOnClick: () => void;
}

export interface DropdownProps {
  data: DataType[];
}

export const Dropdown: FC<DropdownProps> = props => {
  const [toggle, setToggle] = useState(false);
  const className = [classes['dropdown']].join(' ');
  return (
    <div className={className}>
      <DropdownHead handleToggle={setToggle}>hello</DropdownHead>
      <DropdownMenu
        data={props.data}
        handleOnClick={() => {
          console.log('click menu tab');
        }}
        isExpand={toggle}></DropdownMenu>
    </div>
  );
};

const DropdownHead: FC<DropdownHeadProps> = props => {
  return (
    <Fragment>
      <div {...props}>
        <div>{props.children}</div>
        <div>
          <div className={classes['arrow']} />
        </div>
      </div>
    </Fragment>
  );
};

const DropdownMenu: FC<DropdownMenuProps> = props => {
  return (
    <Fragment>
      {props.data.map(item => (
        <DropdownTab key={item.key}>{item.payload}</DropdownTab>
      ))}
    </Fragment>
  );
};

const DropdownTab: FC<DropdownTabProps> = props => {
  return (
    <Fragment>
      <div className={classes['dd-tab']}>
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};
