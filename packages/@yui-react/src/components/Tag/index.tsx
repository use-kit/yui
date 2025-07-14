import type { TagProps } from '@yui/types'

import React from 'react'
import cls from 'classnames'

const Tag: React.FC<TagProps> = ({
  text,
  type = 'default',
  size = 'default',
  outline = false,
}) => {
  const classes: string = cls('tag', {
    [`tag--${type}`]: type !== 'default', // color
    [`tag--${size}`]: size !== 'default',
    'tag--outline': outline,
  })

  return (
    <span className={classes}>
      {text}
    </span>
  )
}

export default Tag
