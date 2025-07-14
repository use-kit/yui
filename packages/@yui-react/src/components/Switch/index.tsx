import type { SwitchEvent, SwitchProps } from '@yui/types'

import React from 'react'
import cls from 'classnames'

const Switch: React.FC<SwitchProps & SwitchEvent> = ({
  checked,
  disabled = false,
  onChange,
}) => {
  const classes: string = cls('switch', { checked, disabled })

  const handleChange = () => {
    if (onChange)
      onChange()
  }

  return (
    <label className={classes}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={handleChange} />
      <span className="slider" />
    </label>
  )
}

export default Switch
