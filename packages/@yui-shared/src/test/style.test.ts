import { describe, expect, it } from 'vitest'
import { addCSSUnit } from '../utils'

describe('add unit', () => {
  it('should add `px` unit', () => {
    expect(addCSSUnit(14)).toMatchInlineSnapshot('"14px"')

    expect(addCSSUnit('14')).toMatchInlineSnapshot('"14px"')

    expect(addCSSUnit('14px')).toMatchInlineSnapshot('"14px"')
  })
})
