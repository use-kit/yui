import type { AvatarProps } from '@yui/types'

import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
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
  const cls: string = classNames(baseAvatarStyle, sizeClass, shapeClass)

  function Render() {
    if (src) {
      return (
        <img src={src} />
      )
    }

    else {
      return (
        <Icon icon={icon ?? defaultIcon} />
      )
    }
  }

  return (
    <>
      <span className={cls} >
        <Render />
      </span>
    </>
  )
}

export default Avatar
