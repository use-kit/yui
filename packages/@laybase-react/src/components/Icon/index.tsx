import * as React from 'react'

// import { getSvgBody } from '@laybase/shared'

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  // const path = getSvgBody(icon)
  const svg = `i-${icon}`

  return (
    <>
      <div className='i-carbon:home' />
      <div className={svg}></div>
      {/* <svg>{path.body}</svg> */}
    </>
  )
}

export default Icon
