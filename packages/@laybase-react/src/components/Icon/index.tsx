import * as React from 'react'
import { Icon as Iconify } from '@iconify/react'

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <>
      <div>
        <Iconify icon={icon} />
      </div>
    </>
  )
}

export default Icon
