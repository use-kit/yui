import { Icon } from '@yui/react'

function BaseIcon() {
  return (
    <>
      <div>Icon</div>
      <Icon icon='mdi-light:home' size={22} color='orange' />
      <Icon icon="carbon:home" color='red' />
    </>
  )
}

export default BaseIcon
