import type { IconProps } from '@yui/types'

import React from 'react'
import { addUnit } from '@yui/shared'
import { isUndefined } from '@use-kit/functions'
import { Icon as Iconify } from '@iconify/react'

const Icon: React.FC<IconProps> = ({ icon, size, color }) => {
  const style: React.CSSProperties = {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    color,
  }

  return (
    <>
      <div style={style}>
        <Iconify icon={icon} />
      </div>
    </>
  )
}

export default Icon
