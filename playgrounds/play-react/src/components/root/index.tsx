import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function Root() {
  return (
    <>
      <div className='content'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default Root
