import type { IconProps } from '@yui/types'
import type { LucideIcon } from 'lucide-react'

import React from 'react'
import { addCSSUnit } from '@yui/shared'
import { isUndefined } from '@use-kit/functions'
import { Icon as Iconify } from '@iconify/react'

const Icon: React.FC<IconProps<LucideIcon | string>> = ({ icon, size, color, className }) => {
  const style: React.CSSProperties = {
    fontSize: isUndefined(size) ? undefined : addCSSUnit(size),
    color,
  }

  if (typeof icon === 'object') {
    const Lucide = icon as LucideIcon
    return <Lucide size={size} color={color} className={className} />
  }

  return <Iconify icon={icon as string} style={style} className={className} />
}

export default Icon
