import { Input } from '@laybase/react'

function BaseInput() {
  function handleChange(value: string) {
    console.log('event value:', value)
  }

  return (
    <>
      Default: <input />
      Laybase: <Input placeholder="place input" onChange={handleChange} />
    </>
  )
}

export default BaseInput
