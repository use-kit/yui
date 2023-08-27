import { describe, expect, it } from 'vitest'
import classNames from 'classnames'

describe('class names', () => {
  const cls = classNames(['a'], 'b', 'c', ['f', 'd'], [['e'], 'g'])

  it('should flatten to string', () => {
    expect(cls).toMatchInlineSnapshot('"a b c f d e g"')
  })
})
