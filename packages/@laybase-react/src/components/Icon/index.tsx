import * as React from 'react'

export const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <span className={icon} />
  )
}
