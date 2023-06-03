import type { AvatarProps } from '@laybase/types'

import React, { useState } from 'react'
import classNames from 'classnames'
import {
  getAvatarShapeClass,
  getAvatarSizeClass,
} from '@laybase/shared'

import { Icon } from '../index'

const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 'default',
  shape = 'circle',
}) => {
  const [icon] = useState('mdi:account')

  const sizeClass: string[] = getAvatarSizeClass(size)
  const shapeClass: string[] = getAvatarShapeClass(shape)
  const cls: string = classNames(sizeClass, shapeClass)

  function Render() {
    if (src) {
      return (
        <img src={src} />
      )
    }

    else {
      return (
        <Icon icon={icon} />
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
