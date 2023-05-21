import * as React from 'react'

export const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <>
      <div className={icon} />
      <div className='i-mdi:ab-testing' />
    </>
  )
}
