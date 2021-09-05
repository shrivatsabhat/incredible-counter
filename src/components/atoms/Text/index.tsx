import React from 'react';
import classes from './Text.module.scss';
interface TextProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label';
  className?: string;
  style?: React.CSSProperties;
  htmlFor?: string;
}

export const Text: React.FC<TextProps> = props => {
  const className = [classes.text, props.className].join(' ');
  return (
    <props.type {...props} className={className}>
      {props.children}
    </props.type>
  );
};
