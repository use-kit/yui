type DefaultSize = 'large' | 'default' | 'small'
export type AvatarSize = DefaultSize & string

export type AvatarSrc = string

export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  src?: AvatarSrc
  size?: AvatarSize
  shape?: AvatarShape
}
