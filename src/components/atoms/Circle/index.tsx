import { BasicStyle } from '@helper'
import React from 'react'
import classes from './Circle.module.scss'

export interface CircleProps extends BasicStyle {
  radius?: number | string
}

export const Circle: React.FC<CircleProps> = (props) => {
  const className = [classes.circle, classes[`size-${props.size}`], classes[`color-${props.color}`]].join(' ')
  const style: React.CSSProperties = { width: `${props.radius}`, height: `${props.radius}` }
  return <div className={className} style={style}>{props.children}</div>
}