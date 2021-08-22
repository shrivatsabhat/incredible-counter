import React from 'react';

interface TextProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label';
}

export const Text: React.FC<TextProps> = props => {
  return <props.type {...props}>{props.children}</props.type>;
};
