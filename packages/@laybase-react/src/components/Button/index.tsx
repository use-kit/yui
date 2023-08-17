import type { ButtonEvent, ButtonProps } from '@laybase/types'

import React from 'react'
import classNames from 'classnames'
import { getButtonSizeClass } from '@laybase/shared'

const Button: React.FC<ButtonProps & ButtonEvent> = ({
  type = 'default',
  size = 'default',
  disabled = false,
  text = '',
  onClick,
}) => {
  const sizeClass: string[] = getButtonSizeClass(size)
  const cls: string = classNames('lay-button', type, sizeClass)

  const handleClick = () => {
    if (onClick)
      onClick()
  }

  return (
    <button className={cls} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
