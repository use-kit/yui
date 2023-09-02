import type { SwitchEvent, SwitchProps } from '@yui/types'

import React from 'react'
import classNames from 'classnames'

const Switch: React.FC<SwitchProps & SwitchEvent> = ({
  checked,
  disabled = false,
  onChange,
}) => {
  const cls: string = classNames('switch', { checked, disabled })

  const handleChange = () => {
    if (onChange)
      onChange()
  }

  return (
    <label className={cls}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={handleChange} />
      <span className="slider" />
    </label>
  )
}

export default Switch
