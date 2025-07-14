import React, { useState } from 'react'
import cls from 'classnames'

import type { CheckboxEvent, CheckboxProps } from '@yui/types'

const Checkbox: React.FC<CheckboxProps & CheckboxEvent> = ({
  checked = false,
  disabled = false,
  label = '',
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange?.(newChecked)
  }

  const classes = cls({
    'checkbox': true,
    'checkbox-checked': isChecked,
    'checkbox-disabled': disabled,
  })

  return (
    <div className={classes} onClick={handleChange}>
      <span className="checkbox-icon">
        {isChecked && (
          <svg className="checkbox-checked-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.07 5.03L7.5 16.59l-4.59-4.59L1 14l6 6 12-12-2.54-2.54z"
            />
          </svg>
        )}
      </span>
      <span className="checkbox-label">{label}</span>
    </div>
  )
}

export default Checkbox
