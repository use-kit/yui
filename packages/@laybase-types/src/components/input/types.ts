export type InputType = 'text' | 'textarea' | 'password' | 'search'

export type InputSize = 'large' | 'default' | 'small'

export type InputDisabled = boolean

export type InputPlaceholder = string

export type InputValue = string

export interface InputProps {
  type?: InputType
  size?: InputSize
  disabled?: InputDisabled
  value?: InputValue
  placeholder?: InputPlaceholder
}

export interface InputEvent {
  onChange?: (value: string) => void
}
