import { describe, expect, it } from 'vitest'
import cls from 'classnames'

describe('class names', () => {
  const classes = cls(['a'], 'b', 'c', ['f', 'd'], [['e'], 'g'])

  it('should flatten to string', () => {
    expect(cls).toMatchInlineSnapshot('"a b c f d e g"')
  })
})
