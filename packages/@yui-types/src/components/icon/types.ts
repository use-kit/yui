export type IconSize = number | string

export type IconColor = string

export interface IconProps<T = string> {
  icon: T
  size?: IconSize
  color?: IconColor
  className?: string
}
