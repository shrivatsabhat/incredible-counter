import React from 'react'
import style from './Card.module.scss'
import { BasicStyle } from '@helper'

export interface CardProps extends BasicStyle {
  customSize?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const className = [props.className, style.card, style[`size-${props.size}`], style[`color-${props.color}`]].join(' ')
  return <div className={className}>{props.children}</div>
}