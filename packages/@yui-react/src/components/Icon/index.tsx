import type { IconProps } from '@yui/types'
import type { LucideIcon } from 'lucide-react'

import React from 'react'
import * as Lucide from 'lucide-react'
import { addCSSUnit } from '@yui/shared'
import { isUndefined } from '@use-kit/functions'
import { Icon as Iconify } from '@iconify/react'

export const IconType = Lucide

const Icon: React.FC<IconProps<LucideIcon | string>> = ({ icon, size, color }) => {
  const style: React.CSSProperties = {
    fontSize: isUndefined(size) ? undefined : addCSSUnit(size),
    color,
  }

  const RenderIcon = () => {
    if (Object.values(IconType).includes(icon as LucideIcon)) {
      const LucideIcon = icon as LucideIcon
      return <LucideIcon />
    }
    else {
      return <Iconify icon={icon as string} />
    }
  }

  return (
    <>
      <div style={style}>
        <RenderIcon />
      </div>
    </>
  )
}

export default Icon
