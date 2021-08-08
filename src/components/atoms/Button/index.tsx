import { BasicColor, BasicSize } from '@helper'
import React, { MouseEventHandler, ReactChild, ReactChildren } from 'react'
import style from './Button.module.scss'

interface ButtonProps extends BasicSize, BasicColor {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const className = [style.button, style[`size-${props.size}`], style[`color-${props.color}`]].join(' ')
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  )
}
