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

  function Render() {
    if (src) {
      return (
        <img src={src} className={cls(sizeClass, shapeClass)} />
      )
    }

    else {
      return (
        <Icon icon={icon ?? defaultIcon} className={cls(sizeClass, shapeClass)} />
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
