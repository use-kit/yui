import { flattenArray } from '@use-kit/functions'

export function classJoin(...clsProps: unknown[]) {
  const cls = flattenArray([...clsProps])
  return cls.join(' ')
}
