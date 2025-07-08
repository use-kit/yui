import type { AvatarShape } from '@yui/types'

export function getAvatarShapeClass(shape: AvatarShape) {
  if (shape === 'circle')
    return ['rounded-full']

  if (shape === 'square')
    return ['rounded-none']

  if (shape === 'rounded')
    return ['rounded']

  return []
}

export const baseAvatarStyle = ['flex h-full w-full items-center justify-center bg-muted']
