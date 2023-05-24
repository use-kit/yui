import { Icon } from '@laybase/react'

function BaseIcon() {
  return (
    <>
      <div>Icon</div>
      <Icon icon="carbon:home" />
      {/* <div className='i-carbon:3d-cursor'>use icon</div> */}
      <svg>
        <path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v8h2V8h2v4h2V4a2 2 0 0 0-2-2H4m0 2h2v2H4m18 9.5V14a2 2 0 0 0-2-2h-4v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M20 20h-2v-2h2v2m0-4h-2v-2h2M5.79 21.61l-1.58-1.22l14-18l1.58 1.22Z" />
      </svg>

      <svg>
        <path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z" />
      </svg>
    </>
  )
}

export default BaseIcon
