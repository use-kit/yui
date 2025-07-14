import type { ButtonEvent, ButtonProps } from '@yui/types'

import React from 'react'
import cls from 'classnames'
import { getButtonSizeClass } from '@yui/shared'

const Button: React.FC<ButtonProps & ButtonEvent> = ({
  type = 'default',
  size = 'default',
  disabled = false,
  text = '',
  onClick,
}) => {
  const sizeClass: string[] = getButtonSizeClass(size)
  const classes: string = cls('lay-button', type, sizeClass)

  const handleClick = () => {
    if (onClick)
      onClick()
  }

  return (
    <button className={classes} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
