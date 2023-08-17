export type ButtonType = 'default'

export type ButtonSize = 'default'

export type ButtonDisabled = boolean

export type ButtonText = string

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: ButtonDisabled
  text?: ButtonText
}

export interface ButtonEvent {
  onClick?: (value: string) => void
}
