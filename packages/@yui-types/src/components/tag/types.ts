export type TagText = string

export type TagType = 'default'

export type TagSize = 'large' | 'default' | 'small'

export type TagDisabled = boolean

export type TagOutline = boolean

export interface TagProps {
  type?: TagType
  size?: TagSize
  disabled?: TagDisabled
  outline?: TagOutline
  text?: TagText
}

export interface TagEvent {
  onClose?: (value: string) => void
}
