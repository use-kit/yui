import { Icon } from '@yui/react'
import { Home } from 'lucide-react'

function BaseIcon() {
  console.log(typeof Home)
  return (
    <>
      <div>Icon</div>
      <Icon icon='mdi-light:home' size={22} color='orange' />
      <Icon icon="carbon:home" color='red' />

      <Icon icon={Home} size={22} color='green' />
      <Home size={22} color='blue' />
    </>
  )
}

export default BaseIcon
