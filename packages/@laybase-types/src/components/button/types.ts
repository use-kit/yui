export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'

export type ButtonSize = 'default'

export type ButtonDisabled = boolean

export type ButtonText = string

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: ButtonDisabled
  text?: ButtonText
  // loading?: boolean
  // radius?: boolean
  // prefix?: React.ReactNode
  // suffix?: React.ReactNode
}

export interface ButtonEvent {
  onClick?: () => void
}
