import { flattenArray } from '@use-kit/functions'

export function classJoin(...clsProps: unknown[]) {
  const classes = flattenArray([...clsProps])
  return cls.join(' ')
}
