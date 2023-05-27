import { flattenArray } from '@use-kit/functions'

export function classJoin(...clsProps: unknown[]) {
  const cls = flattenArray([...clsProps])
  return cls.join(' ')
}

// const ret = classJoin(['a'], 'b', 'c', ['f', 'd'], [['e'], 'g'])
// console.log('ret:', ret)
