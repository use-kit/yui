export type TagText = string

export type TagType = 'default'

export type TagColor = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger'

export type TagShape = 'default' | 'round' | 'square'

export type TagSize = 'large' | 'default' | 'small'

export type TagDisabled = boolean

export type TagOutline = boolean

export interface TagProps {
  type?: TagType
  size?: TagSize
  disabled?: TagDisabled
  outline?: TagOutline
  text?: TagText
  color?: TagColor
  shape?: TagShape
}

export interface TagEvent {
  onClose?: (value: string) => void
}
