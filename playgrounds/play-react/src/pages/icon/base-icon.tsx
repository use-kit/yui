import { Icon, IconType } from '@yui/react'

function BaseIcon() {
  return (
    <>
      <div>Icon</div>
      <Icon icon='mdi-light:home' size={22} color='orange' />
      <Icon icon="carbon:home" color='red' />

      <Icon icon={IconType.Home} size={32} color='green' />
    </>
  )
}

export default BaseIcon
