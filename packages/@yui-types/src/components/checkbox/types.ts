export type CheckboxChecked = boolean

export type CheckboxDisabled = boolean

export type CheckboxLabel = string

export interface CheckboxProps {
  checked?: CheckboxChecked
  disabled?: CheckboxDisabled
  label?: CheckboxLabel
}

export interface CheckboxEvent {
  onChange?: (value: boolean) => void
}
