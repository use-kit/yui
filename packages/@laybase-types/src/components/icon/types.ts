export type IconType = string

export type IconSize = 'large' | 'default' | 'small'

export type IconColor = string

export interface IconProps {
  icon: IconType
  size: IconSize
  color: IconColor
}
