import React from 'react'
import {DefaultProps} from '../../../types'
import './style.scss'

export function RegularText({children, ...rest}: DefaultProps) {
  const classes = rest.className
    ? `regular-text ${rest.className}`
    : 'regular-text'
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

export function SectionHeader({children, ...rest}: DefaultProps) {
  const classes = rest.className
    ? `section-header ${rest.className}`
    : 'section-header'
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}
