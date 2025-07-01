import { isNumber, isString } from '@use-kit/functions'

export function addCSSUnit(value?: string | number, defaultUnit = 'px') {
  if (!value)
    return ''

  if (isNumber(value) || !isNaN(Number(value)))
    return `${value}${defaultUnit}`

  else if (isString(value))
    return value
}
