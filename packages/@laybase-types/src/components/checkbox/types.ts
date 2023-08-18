export type CheckoutChecked = boolean

export type CheckboxDisabled = boolean

export type CheckboxLabel = string

export interface CheckboxProps {
  checked?: CheckoutChecked
  disabled?: CheckboxDisabled
  label?: CheckboxLabel
}

export interface CheckboxEvent {
  onChange?: (value: string) => void
}
