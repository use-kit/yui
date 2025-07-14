import type { AvatarProps } from '@yui/types'

import React, { useEffect, useState } from 'react'
import cls from 'classnames'
import {
  baseAvatarStyle,
  getAvatarShapeClass,
  getAvatarSizeClass,
} from '@yui/shared'

import { Icon } from '../index'

const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 'default',
  shape = 'circle',
  icon,
}) => {
  const [defaultIcon, setIcon] = useState('mdi:account')

  useEffect(() => {
    if (icon)
      setIcon(icon)
  }, [icon])

  const sizeClass: string[] = getAvatarSizeClass(size)
  const shapeClass: string[] = getAvatarShapeClass(shape)
  const classes: string = cls(sizeClass, shapeClass)

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className='flex items-center justify-center'>{children}</div>
  )

  function Render() {
    if (src) {
      return (
        <img src={src} className={classes} />
      )
    }

    else {
      return (
        <Icon icon={icon ?? defaultIcon} />
      )
    }
  }

  return (
    <span className='flex items-center justify-center' >
      <Render />
    </span>
  )
}

export default Avatar
