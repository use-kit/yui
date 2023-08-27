import { Input } from '@yui/react'

function BaseInput() {
  function handleChange(value: string) {
    console.log('event value:', value)
  }

  return (
    <>
      Default: <input />
      YUI: <Input placeholder="place input" onChange={handleChange} />
    </>
  )
}

export default BaseInput
