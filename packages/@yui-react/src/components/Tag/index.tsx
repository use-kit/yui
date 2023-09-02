import type { TagProps } from '@yui/types'

import React from 'react'
import classNames from 'classnames'

const Tag: React.FC<TagProps> = ({
  text,
  type = 'default',
  size = 'default',
  outline = false,
}) => {
  const cls: string = classNames('tag', {
    [`tag--${type}`]: type !== 'default', // color
    [`tag--${size}`]: size !== 'default',
    'tag--outline': outline,
  })

  return (
    <span className={cls}>
      {text}
    </span>
  )
}

export default Tag
