import React, { FC, ImgHTMLAttributes } from 'react';
import styles from './Image.module.scss';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Image: FC<ImageProps> = props => {
  const className = [styles.img, props.className].join(' ');
  return <img {...props} className={className} />;
};
