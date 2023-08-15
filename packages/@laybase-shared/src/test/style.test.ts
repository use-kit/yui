import { describe, expect, it } from 'vitest'
import { addUnit } from '../utils'

describe('add unit', () => {
  it('should add `px` unit', () => {
    expect(addUnit(14)).toMatchInlineSnapshot('"14px"')

    expect(addUnit('14')).toMatchInlineSnapshot('"14px"')

    expect(addUnit('14px')).toMatchInlineSnapshot('"14px"')
  })
})
