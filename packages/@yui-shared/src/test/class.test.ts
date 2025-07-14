import { describe, expect, it } from 'vitest'
import { classJoin } from '../utils'

describe('join class', () => {
  const classes = classJoin(['a'], 'b', 'c', ['f', 'd'], [['e'], 'g'])

  it('should flatten to string', () => {
    expect(cls).toMatchInlineSnapshot('"a b c f d e g"')
  })
})
