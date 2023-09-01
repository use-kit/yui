export type SwitchChecked = boolean

export type SwitchDisabled = boolean

export interface SwitchProps {
  checked?: SwitchChecked
  disabled?: SwitchDisabled
}

export interface SwitchEvent {
  onChange?: () => void
}
