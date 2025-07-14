import type { InputEvent, InputProps } from '@yui/types'

import React, { useState } from 'react'
import cls from 'classnames'
import { getInputSizeClass } from '@yui/shared'

const Input: React.FC<InputProps & InputEvent> = ({
  type = 'text',
  size = 'default',
  disabled = false,
  value = '',
  placeholder = '',
  onChange,
}) => {
  const sizeClass: string[] = getInputSizeClass(size)
  const classes: string = cls(sizeClass)

  const [defaultValue, setDefaultValue] = useState(value)

  function handleChange(
    element: React.ChangeEvent<HTMLInputElement>,
  ) {
    setDefaultValue(element.target.value)

    onChange?.(element.target.value)
  }

  return (
    <>
      <div className={classes} >
        {/* <label htmlFor="input">Input</label> */}
        <input
          type={type}
          defaultValue={defaultValue}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Input
